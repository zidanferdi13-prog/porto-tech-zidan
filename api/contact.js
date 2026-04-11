const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUEST = 5;
const MIN_FILL_TIME_MS = 3000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requestStore = new Map();

function json(res, status, payload) {
  res
    .status(status)
    .setHeader("Content-Type", "application/json")
    .setHeader("X-Content-Type-Options", "nosniff")
    .setHeader("Cache-Control", "no-store");
  res.send(JSON.stringify(payload));
}

function escapeDangerousChars(value) {
  return value.replace(/[<>`]/g, "");
}

function isOriginAllowed(req) {
  const allowedRaw = process.env.CONTACT_ALLOWED_ORIGINS || "";
  const allowed = allowedRaw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (allowed.length === 0) {
    return true;
  }

  const origin = req.headers.origin || "";
  return allowed.includes(origin);
}

function getIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const existing = requestStore.get(ip) || [];
  const filtered = existing.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (filtered.length >= RATE_LIMIT_MAX_REQUEST) {
    requestStore.set(ip, filtered);
    return true;
  }

  filtered.push(now);
  requestStore.set(ip, filtered);
  return false;
}

function normalize(input, maxLength) {
  return escapeDangerousChars(String(input || "")).trim().slice(0, maxLength);
}

async function forwardToWebhook(payload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
}

export default async function handler(req, res) {
  if (!isOriginAllowed(req)) {
    return json(res, 403, {
      ok: false,
      message: "Origin is not allowed."
    });
  }

  if (req.method !== "POST") {
    return json(res, 405, { ok: false, message: "Method not allowed." });
  }

  const ip = getIp(req);
  if (isRateLimited(ip)) {
    return json(res, 429, {
      ok: false,
      message: "Terlalu banyak request. Coba lagi dalam beberapa saat."
    });
  }

  const body = typeof req.body === "object" && req.body !== null ? req.body : {};

  const name = normalize(body.name, 80);
  const email = normalize(body.email, 120).toLowerCase();
  const message = normalize(body.message, 2000);
  const company = normalize(body.company, 120);
  const website = normalize(body.website, 120);
  const startedAt = Number(body.startedAt || 0);

  if (website) {
    return json(res, 200, { ok: true, message: "Pesan diterima." });
  }

  if (!startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return json(res, 400, {
      ok: false,
      message: "Pengiriman terlalu cepat. Mohon isi form dengan benar."
    });
  }

  if (!name || name.length < 2) {
    return json(res, 400, { ok: false, message: "Nama minimal 2 karakter." });
  }

  if (!emailPattern.test(email)) {
    return json(res, 400, { ok: false, message: "Format email tidak valid." });
  }

  if (!message || message.length < 20) {
    return json(res, 400, {
      ok: false,
      message: "Deskripsi kebutuhan proyek minimal 20 karakter."
    });
  }

  const payload = {
    source: "zidan-portfolio-contact",
    name,
    email,
    company,
    message,
    submittedAt: new Date().toISOString(),
    ip
  };

  try {
    await forwardToWebhook(payload);
  } catch (error) {
    return json(res, 500, {
      ok: false,
      message: "Pesan gagal diteruskan. Coba beberapa saat lagi."
    });
  }

  return json(res, 200, {
    ok: true,
    message: "Pesan berhasil dikirim. Saya akan membalas secepatnya."
  });
}

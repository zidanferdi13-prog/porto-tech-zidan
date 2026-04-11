import React, { useEffect } from "react";

function upsertMeta({ name, property, content }) {
  if (!content) {
    return;
  }

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let meta = document.head.querySelector(selector);

  if (!meta) {
    meta = document.createElement("meta");
    if (name) {
      meta.setAttribute("name", name);
    }
    if (property) {
      meta.setAttribute("property", property);
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertCanonical(href) {
  if (!href) {
    return;
  }

  let link = document.head.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
}) {
  useEffect(() => {
    const siteName = "Zidan Portfolio";
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = `${siteUrl}${normalizedPath}`;
    const finalTitle = title ? `${title} | ${siteName}` : siteName;

    document.title = finalTitle;

    upsertMeta({ name: "description", content: description });
    upsertMeta({ property: "og:title", content: finalTitle });
    upsertMeta({ property: "og:description", content: description });
    upsertMeta({ property: "og:type", content: type });
    upsertMeta({ property: "og:url", content: canonicalUrl });
    upsertMeta({ property: "og:image", content: image });
    upsertMeta({ name: "twitter:card", content: "summary_large_image" });
    upsertMeta({ name: "twitter:title", content: finalTitle });
    upsertMeta({ name: "twitter:description", content: description });
    upsertMeta({ name: "twitter:image", content: image });
    upsertCanonical(canonicalUrl);
  }, [title, description, path, type, image]);

  return null;
}

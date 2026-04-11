import React from "react";
import { useState } from "react";
import Seo from "../components/Seo";
import { useLanguage } from "../context/LanguageContext";
import { siteProfile } from "../data/site";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: ""
};

export default function ContactPage() {
  const { isId } = useLanguage();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [startedAt] = useState(Date.now());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.name.trim().length < 2) {
      setStatus("error");
      setServerMessage(isId ? "Nama minimal 2 karakter." : "Name must be at least 2 characters.");
      return;
    }

    if (values.message.trim().length < 20) {
      setStatus("error");
      setServerMessage(
        isId
          ? "Kebutuhan proyek minimal 20 karakter."
          : "Project requirements must be at least 20 characters."
      );
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...values,
          startedAt
        })
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerMessage(data.message || (isId ? "Pengiriman gagal. Coba lagi." : "Submission failed. Please try again."));
        return;
      }

      setStatus("success");
      setServerMessage(data.message);
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setServerMessage(
        isId
          ? "Server tidak merespons. Coba lagi beberapa saat lagi."
          : "Server is not responding. Please try again in a moment."
      );
    }
  };

  return (
    <main className="container">
      <Seo
        title={isId ? "Kontak" : "Contact"}
        description={
          isId
            ? "Hubungi Zidan untuk kolaborasi proyek IoT dan fullstack engineering di lingkungan industri maupun produk digital."
            : "Contact Zidan for IoT and fullstack engineering collaboration in industrial and digital product environments."
        }
        path="/contact"
      />
      <section className="page-head reveal">
        <p className="eyebrow mono">{isId ? "MARI BANGUN" : "LET'S BUILD"}</p>
        <h1>{isId ? "Kontak & Kolaborasi" : "Contact & Collaboration"}</h1>
        <p>
          {isId
            ? "Jika Anda membutuhkan engineer yang memahami perangkat fisik sekaligus software production-grade, mari diskusi."
            : "If you need an engineer who understands both physical devices and production-grade software, let's talk."}
        </p>
      </section>

      <section className="contact-grid reveal">
        <article className="panel">
          <h2>{isId ? "Kontak Cepat" : "Quick Contact"}</h2>
          <p className="mono">Email: {siteProfile.email}</p>
          <p className="mono">LinkedIn: {siteProfile.linkedin.replace("https://", "")}</p>
          <p className="mono">GitHub: {siteProfile.github.replace("https://", "")}</p>
        </article>

        <form className="panel contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">{isId ? "Nama" : "Name"}</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={isId ? "Nama Anda" : "Your name"}
            value={values.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@company.com"
            value={values.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="company">{isId ? "Perusahaan (opsional)" : "Company (optional)"}</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder={isId ? "Nama perusahaan" : "Company name"}
            value={values.company}
            onChange={handleChange}
          />

          <label htmlFor="message">{isId ? "Kebutuhan Proyek" : "Project Requirement"}</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder={isId ? "Ceritakan proyek Anda..." : "Tell me about your project..."}
            value={values.message}
            onChange={handleChange}
            required
          />

          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex="-1"
              autoComplete="off"
              value={values.website}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? (isId ? "Mengirim..." : "Sending...") : isId ? "Kirim Pesan" : "Send Message"}
          </button>

          {serverMessage ? (
            <p className={`mono form-note ${status === "error" ? "is-error" : "is-success"}`}>
              {serverMessage}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

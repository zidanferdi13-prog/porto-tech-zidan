import React from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function RouteErrorPage() {
  const error = useRouteError();
  const { isId } = useLanguage();

  let title = isId ? "Terjadi Kesalahan" : "Something Went Wrong";
  let description = isId
    ? "Aplikasi mengalami gangguan saat memuat halaman ini."
    : "The app encountered an issue while loading this page.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    description = isId
      ? "Terjadi kesalahan pada rute yang diakses."
      : "A route error occurred while accessing this page.";
  }

  return (
    <main className="container not-found-page">
      <section className="panel reveal not-found-card">
        <p className="eyebrow mono">ERROR</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="detail-actions">
          <Link className="btn btn-primary" to="/">
            {isId ? "Kembali ke Beranda" : "Back to Home"}
          </Link>
          <Link className="btn btn-outline" to="/contact">
            {isId ? "Hubungi Saya" : "Contact Me"}
          </Link>
        </div>
      </section>
    </main>
  );
}

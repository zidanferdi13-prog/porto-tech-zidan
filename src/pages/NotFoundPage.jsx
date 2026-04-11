import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useLanguage } from "../context/LanguageContext";

export default function NotFoundPage() {
  const { isId } = useLanguage();

  return (
    <main className="container not-found-page">
      <Seo
        title={isId ? "Halaman Tidak Ditemukan" : "Page Not Found"}
        description={
          isId
            ? "Halaman yang Anda cari tidak ditemukan."
            : "The page you are looking for could not be found."
        }
        path="/404"
      />
      <section className="panel reveal not-found-card">
        <p className="eyebrow mono">404</p>
        <h1>{isId ? "Halaman Tidak Ditemukan" : "Page Not Found"}</h1>
        <p>
          {isId
            ? "Rute yang Anda akses tidak tersedia. Kembali ke beranda atau lihat daftar proyek."
            : "The route you tried to access does not exist. Return to the homepage or browse projects."}
        </p>
        <div className="detail-actions">
          <Link className="btn btn-primary" to="/">
            {isId ? "Ke Beranda" : "Go Home"}
          </Link>
          <Link className="btn btn-outline" to="/projects">
            {isId ? "Lihat Proyek" : "View Projects"}
          </Link>
        </div>
      </section>
    </main>
  );
}

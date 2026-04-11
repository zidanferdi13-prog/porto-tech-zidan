import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useAdminAccess } from "../context/AdminAccessContext";

export default function Layout({ children }) {
  const { isId, lang, toggleLang } = useLanguage();
  const { isDev, isUnlocked } = useAdminAccess();

  return (
    <>
      <div className="bg-grid" />
      <header className="topbar container">
        <NavLink className="brand" to="/">
          HOME
        </NavLink>
        <nav>
          <NavLink to="/about">{isId ? "Tentang" : "About"}</NavLink>
          <NavLink to="/projects">{isId ? "Proyek" : "Projects"}</NavLink>
          <NavLink to="/case-study">{isId ? "Studi Kasus" : "Case Study"}</NavLink>
          <NavLink to="/contact">{isId ? "Kontak" : "Contact"}</NavLink>
          {isDev || isUnlocked ? <NavLink to="/admin">Admin</NavLink> : null}
          <button type="button" className="lang-toggle mono" onClick={toggleLang}>
            {lang.toUpperCase()}
          </button>
        </nav>
      </header>
      {children}
      <footer className="container footer mono">
        <p>
          {isId
            ? "© 2026 Zidan. IoT Engineer + Fullstack Programmer."
            : "© 2026 Zidan. IoT Engineer + Fullstack Programmer."}
        </p>
      </footer>
    </>
  );
}

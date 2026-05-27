"use client";

import { useEffect, useState } from "react";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";
import styles from "./Nav.module.css";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.about,      href: "#about" },
    { label: t.nav.projects,   href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact,    href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && scrolled) setMenuOpen(false);
  }, [scrolled, menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  const LangToggle = ({ className }: { className?: string }) => (
    <div className={`${styles.langToggle} ${className ?? ""}`} role="group" aria-label="Language">
      <button
        className={styles.langBtn}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={styles.langSep} aria-hidden="true">/</span>
      <button
        className={styles.langBtn}
        aria-pressed={lang === "es"}
        onClick={() => setLang("es")}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );

  return (
    <>
      <header
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <a href="#" className={styles.logo} aria-label="Home">
          ST<span>.</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className={styles.desktopNav}>
          <ul className={styles.links} role="list">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navRight}>
          <LangToggle />

          {/* Mobile hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={styles.mobileMenu}
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileLinks} role="list">
            {links.map(({ label, href }, i) => (
              <li key={href} style={{ "--i": i } as React.CSSProperties}>
                <a href={href} className={styles.mobileLink} onClick={handleLinkClick}>
                  <span className={styles.mobileLinkNum}>0{i + 1}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

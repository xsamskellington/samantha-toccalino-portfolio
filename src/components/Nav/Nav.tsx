"use client";

import { useEffect, useState } from "react";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";
import styles from "./Nav.module.css";

const defaultClassName = "nav";

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

  const LangToggle = () => (
    <div className={styles[`${defaultClassName}__lang-toggle`]} role="group" aria-label="Language">
      <button
        className={styles[`${defaultClassName}__lang-btn`]}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={styles[`${defaultClassName}__lang-sep`]} aria-hidden="true">/</span>
      <button
        className={styles[`${defaultClassName}__lang-btn`]}
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
        className={`${styles[defaultClassName]} ${scrolled ? styles[`${defaultClassName}--scrolled`] : ""}`}
        role="banner"
      >
        <a href="#" className={styles[`${defaultClassName}__logo`]} aria-label="Home">
          ST<span>.</span>
        </a>

        <nav aria-label="Main navigation" className={styles[`${defaultClassName}__desktop`]}>
          <ul className={styles[`${defaultClassName}__links`]} role="list">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles[`${defaultClassName}__link`]}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles[`${defaultClassName}__right`]}>
          <LangToggle />

          <button
            className={`${styles[`${defaultClassName}__hamburger`]} ${menuOpen ? styles[`${defaultClassName}__hamburger--open`] : ""}`}
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

      <div
        className={styles[`${defaultClassName}__mobile`]}
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles[`${defaultClassName}__mobile-links`]} role="list">
            {links.map(({ label, href }, i) => (
              <li key={href} className={styles[`${defaultClassName}__mobile-item`]} style={{ "--i": i } as React.CSSProperties}>
                <a href={href} className={styles[`${defaultClassName}__mobile-link`]} onClick={handleLinkClick}>
                  <span className={styles[`${defaultClassName}__mobile-link-num`]}>0{i + 1}</span>
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

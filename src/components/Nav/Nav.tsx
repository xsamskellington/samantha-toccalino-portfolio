"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const defaultClassName = "nav";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
    if (menuOpen && scrolled) closeMenu();
  }, [scrolled]);

  // Lock body scroll + manage inert when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuRef.current) {
      if (menuOpen) {
        menuRef.current.removeAttribute("inert");
      } else {
        menuRef.current.setAttribute("inert", "");
      }
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Focus first link when menu opens; Escape closes it
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;

    const focusable = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>("a[href]")
    );
    focusable[0]?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  const LangToggle = () => (
    <div className={`${defaultClassName}__lang-toggle`} role="group" aria-label="Language">
      <button
        className={`${defaultClassName}__lang-btn`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={`${defaultClassName}__lang-sep`} aria-hidden="true">/</span>
      <button
        className={`${defaultClassName}__lang-btn`}
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
        className={`${defaultClassName} ${scrolled ? `${defaultClassName}--scrolled` : ""}`}
        role="banner"
      >
        <a href="#" className={`${defaultClassName}__logo`} aria-label="Samantha Toccalino — Home">
          ST<span aria-hidden="true">.</span>
        </a>

        <nav aria-label="Main navigation" className={`${defaultClassName}__desktop`}>
          <ul className={`${defaultClassName}__links`} role="list">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={`${defaultClassName}__link`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${defaultClassName}__right`}>
          <LangToggle />

          <button
            ref={hamburgerRef}
            className={`${defaultClassName}__hamburger${menuOpen ? ` ${defaultClassName}__hamburger--open` : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${defaultClassName}__mobile`}
        data-open={menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={!menuOpen || undefined}
      >
        <nav aria-label="Mobile navigation">
          <ul className={`${defaultClassName}__mobile-links`} role="list">
            {links.map(({ label, href }, i) => (
              <li
                key={href}
                className={`${defaultClassName}__mobile-item`}
                style={{ "--i": i } as React.CSSProperties}
              >
                <a
                  href={href}
                  className={`${defaultClassName}__mobile-link`}
                  onClick={closeMenu}
                >
                  <span className={`${defaultClassName}__mobile-link-num`} aria-hidden="true">0{i + 1}</span>
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

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Contact.module.css";

const fadeUp = makeFadeUp(0.5);

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section id="contact" className={styles.section} ref={ref} aria-label="Contact">
      <div className={styles.inner}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <p className={styles.eyebrow}>{c.eyebrow}</p>
          <h2 className={styles.headline}>{c.headline}</h2>
          <p className={styles.sub}>{c.sub}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
        >
          <div className={styles.links} role="list">
            {c.links.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={styles.linkItem}
                role="listitem"
                aria-label={`${label}: ${value}`}
              >
                <div>
                  <p className={styles.linkLabel}>{label}</p>
                  <p className={styles.linkValue}>{value}</p>
                </div>
                <span className={styles.linkArrow} aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className={styles.footer} role="contentinfo">
        <span className={styles.footerLogo}>
          ST<span>.</span>
        </span>
        <div className={styles.footerRight}>
          <span className={styles.footerRef}>UNIT_ST-01 / {new Date().getFullYear()}</span>
          <span className={styles.footerMeta}>{c.footerMeta}</span>
        </div>
      </footer>
    </section>
  );
}

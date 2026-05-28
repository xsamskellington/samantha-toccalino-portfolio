'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '@/lib/animations';
import { useLanguage } from '@/i18n/LanguageContext';
import styles from './Contact.module.css';

const defaultClassName = 'contact';
const fadeUp = makeFadeUp(0.5);

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section
      id="contact"
      className={styles[defaultClassName]}
      ref={ref}
      aria-label="Contact"
    >
      <div className={styles[`${defaultClassName}__inner`]}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <p className={styles[`${defaultClassName}__eyebrow`]}>{c.eyebrow}</p>
          <h2 className={styles[`${defaultClassName}__headline`]}>{c.headline}</h2>
          <p className={styles[`${defaultClassName}__sub`]}>{c.sub}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          <div className={styles[`${defaultClassName}__links`]} role="list">
            {c.links.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={styles[`${defaultClassName}__link`]}
                role="listitem"
                aria-label={`${label}: ${value}`}
              >
                <div>
                  <p className={styles[`${defaultClassName}__link-label`]}>{label}</p>
                  <p className={styles[`${defaultClassName}__link-value`]}>{value}</p>
                </div>
                <span className={styles[`${defaultClassName}__link-arrow`]} aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className={styles[`${defaultClassName}__footer`]} role="contentinfo">
        <span className={styles[`${defaultClassName}__footer-logo`]}>
          ST<span>.</span>
        </span>
        <div className={styles[`${defaultClassName}__footer-right`]}>
          <span className={styles[`${defaultClassName}__footer-meta`]}>{c.footerMeta}</span>
        </div>
      </footer>
    </section>
  );
}

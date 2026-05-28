'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '@/lib/animations';
import { useLanguage } from '@/i18n/LanguageContext';

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
      className={defaultClassName}
      ref={ref}
      aria-label="Contact"
    >
      <div className={`${defaultClassName}__inner`}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <p className={`${defaultClassName}__eyebrow`}>{c.eyebrow}</p>
          <h2 className={`${defaultClassName}__headline`}>{c.headline}</h2>
          <p className={`${defaultClassName}__sub`}>{c.sub}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          <div className={`${defaultClassName}__links`} role="list">
            {c.links.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`${defaultClassName}__link`}
                role="listitem"
                aria-label={`${label}: ${value}`}
              >
                <div>
                  <p className={`${defaultClassName}__link-label`}>{label}</p>
                  <p className={`${defaultClassName}__link-value`}>{value}</p>
                </div>
                <span className={`${defaultClassName}__link-arrow`} aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className={`${defaultClassName}__footer`} role="contentinfo">
        <span className={`${defaultClassName}__footer-logo`}>
          ST<span>.</span>
        </span>
        <div className={`${defaultClassName}__footer-right`}>
          <span className={`${defaultClassName}__footer-meta`}>{c.footerMeta}</span>
        </div>
      </footer>
    </section>
  );
}

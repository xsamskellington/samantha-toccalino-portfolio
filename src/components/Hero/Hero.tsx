'use client';

import { motion } from 'framer-motion';
import { makeFadeUp } from '@/lib/animations';
import { useLanguage } from '@/i18n/LanguageContext';
import styles from './Hero.module.css';

const defaultClassName = 'hero';
const fadeUp = makeFadeUp(0.65, 0.1);

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className={styles[defaultClassName]} aria-label="Introduction">
      <div className={styles[`${defaultClassName}__content`]}>
        <motion.div
          className={styles[`${defaultClassName}__tag`]}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {h.tag}
        </motion.div>

        <motion.h1
          className={styles[`${defaultClassName}__name`]}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Samantha
          <span className={styles[`${defaultClassName}__name-dim`]}>Toccalino</span>
        </motion.h1>

        <motion.div
          className={styles[`${defaultClassName}__divider`]}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          aria-hidden="true"
        >
          <span className={styles[`${defaultClassName}__divider-line`]} />
          <span className={styles[`${defaultClassName}__divider-dot`]} />
        </motion.div>

        <motion.p
          className={styles[`${defaultClassName}__role`]}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <strong>{h.role}</strong> — {h.stack}
        </motion.p>

        <motion.p
          className={styles[`${defaultClassName}__description`]}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          dangerouslySetInnerHTML={{ __html: h.description }}
        />

        <motion.div
          className={styles[`${defaultClassName}__actions`]}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a href="#projects" className={styles[`${defaultClassName}__btn--primary`]}>
            {h.btnWork}
          </a>
          <a href="#contact" className={styles[`${defaultClassName}__btn--secondary`]}>
            {h.btnContact} →
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles[`${defaultClassName}__meta`]}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={6}
        aria-hidden="true"
      >
        <div className={styles[`${defaultClassName}__meta-item`]}>
          <span className={styles[`${defaultClassName}__meta-label`]}>{h.metaLocation}</span>
          <span className={styles[`${defaultClassName}__meta-value`]}>Buenos Aires, AR</span>
        </div>
        <div className={styles[`${defaultClassName}__meta-item`]}>
          <span className={styles[`${defaultClassName}__meta-label`]}>{h.metaStatus}</span>
          <span className={styles[`${defaultClassName}__meta-value`]}>{h.metaStatusValue}</span>
        </div>
        <div className={styles[`${defaultClassName}__ref`]}>
          FRONTEND DEV / SSR
          <br />
          MELI · LATAM
        </div>
      </motion.div>
    </section>
  );
}

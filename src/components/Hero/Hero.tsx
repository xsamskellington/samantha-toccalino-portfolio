"use client";

import { motion } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Hero.module.css";

const fadeUp = makeFadeUp(0.65, 0.1);

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.content}>
        <motion.div
          className={styles.tag}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {h.tag}
        </motion.div>

        <motion.h1
          className={styles.name}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Samantha
          <span className={styles.nameDim}>Toccalino</span>
        </motion.h1>

        <motion.div
          className={styles.divider}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          aria-hidden="true"
        >
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot} />
        </motion.div>

        <motion.p
          className={styles.role}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <strong>{h.role}</strong> — {h.stack}
        </motion.p>

        <motion.p
          className={styles.description}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          dangerouslySetInnerHTML={{ __html: h.description }}
        />

        <motion.div
          className={styles.actions}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a href="#projects" className={styles.btnPrimary}>
            {h.btnWork}
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            {h.btnContact} →
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.meta}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={6}
        aria-hidden="true"
      >
        <div className={styles.metaLeft}>
          <span className={styles.metaLabel}>{h.metaLocation}</span>
          <span className={styles.metaValue}>Buenos Aires, AR</span>
        </div>
        <div className={styles.metaLeft}>
          <span className={styles.metaLabel}>{h.metaStatus}</span>
          <span className={styles.metaValue}>{h.metaStatusValue}</span>
        </div>
        <div className={styles.refNumber}>
          <span>UNIT_ST-01</span>
          FRONTEND DEV / SSR<br />
          MELI · LATAM
        </div>
      </motion.div>
    </section>
  );
}

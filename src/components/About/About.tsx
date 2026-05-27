"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./About.module.css";

const fadeUp = makeFadeUp(0.55, 0.08);

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className={styles.section} ref={ref} aria-label="About">
      <motion.p
        className={styles.eyebrow}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        {a.eyebrow}
      </motion.p>

      <div className={styles.grid}>
        <div>
          <motion.h2
            className={styles.headline}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            {a.headline}
          </motion.h2>

          <motion.div
            className={styles.bio}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
          >
            {a.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.p
            className={styles.skillsLabel}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
          >
            {a.skillsTitle}
          </motion.p>

          <motion.div
            className={styles.skillGroups}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
          >
            {a.skills.map((group) => (
              <div key={group.label} className={styles.skillGroup}>
                <span className={styles.skillGroupLabel}>{group.label}</span>
                <div className={styles.skillItems}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.skillTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

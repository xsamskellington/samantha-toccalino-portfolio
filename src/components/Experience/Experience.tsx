"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Experience.module.css";

const fadeUp = makeFadeUp(0.5);

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className={styles.section} ref={ref} aria-label="Work experience">
      <motion.p
        className={styles.eyebrow}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        {e.eyebrow}
      </motion.p>

      <motion.h2
        className={styles.title}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        {e.title}
      </motion.h2>

      <div className={styles.list} role="list">
        {e.items.map((item, i) => (
          <motion.article
            key={item.company}
            className={styles.item}
            role="listitem"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 2}
          >
            <div className={styles.itemLeft}>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.period}>{item.period}</p>
              <p className={styles.location}>{item.location}</p>
            </div>

            <div>
              <p className={styles.role}>{item.role}</p>
              <ul className={styles.bullets} aria-label={`Responsibilities at ${item.company}`}>
                {item.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

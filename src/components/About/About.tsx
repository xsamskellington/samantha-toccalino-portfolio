"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./About.module.css";

const B = "about";
const fadeUp = makeFadeUp(0.55, 0.08);

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className={styles[B]} ref={ref} aria-label="About">
      <motion.p
        className={styles[`${B}__eyebrow`]}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        {a.eyebrow}
      </motion.p>

      <div className={styles[`${B}__grid`]}>
        <div>
          <motion.h2
            className={styles[`${B}__headline`]}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            {a.headline}
          </motion.h2>

          <motion.div
            className={styles[`${B}__bio`]}
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
            className={styles[`${B}__skills-label`]}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
          >
            {a.skillsTitle}
          </motion.p>

          <motion.div
            className={styles[`${B}__skill-groups`]}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
          >
            {a.skills.map((group) => (
              <div key={group.label} className={styles[`${B}__skill-group`]}>
                <span className={styles[`${B}__skill-group-label`]}>{group.label}</span>
                <div className={styles[`${B}__skill-items`]}>
                  {group.items.map((item) => (
                    <span key={item} className={styles[`${B}__skill-tag`]}>
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

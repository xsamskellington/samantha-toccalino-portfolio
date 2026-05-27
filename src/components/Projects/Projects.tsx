"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Projects.module.css";

const fadeUp = makeFadeUp();

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();
  const p = t.projects;

  const featured = p.items.find((item) => item.featured)!;
  const rest = p.items.filter((item) => !item.featured);

  return (
    <section id="projects" className={styles.section} ref={ref} aria-label="Projects">
      <motion.p
        className={styles.eyebrow}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        {p.eyebrow}
      </motion.p>

      <motion.h2
        className={styles.title}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        {p.title}
      </motion.h2>

      {/* Featured project */}
      <motion.article
        className={styles.featured}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={2}
        aria-label={`Featured project: ${featured.title}`}
      >
        <div className={styles.featuredInner}>
          <div className={styles.featuredLeft}>
            <div className={styles.cardMeta}>
              <span className={styles.cardBadge}>{p.featuredBadge}</span>
              <span className={styles.cardYear}>{featured.year}</span>
            </div>
            <h3 className={styles.cardTitle}>{featured.title}</h3>
            <p className={styles.cardCompany}>{featured.company}</p>
            <p className={styles.cardDescription}>{featured.description}</p>
          </div>

          <div className={styles.featuredRight}>
            <ul className={styles.cardHighlights} aria-label="Highlights">
              {featured.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className={styles.cardTags} aria-label="Technologies">
              {featured.tags.map((tag) => (
                <span key={tag} className={styles.cardTag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Other projects */}
      <motion.div
        className={styles.smallGrid}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={3}
        role="list"
        aria-label="Other projects"
      >
        {rest.map((project) => (
          <article key={project.id} className={styles.smallCard} role="listitem">
            <div className={styles.cardMeta}>
              <span
                className={styles.cardBadge}
                style={{ background: "var(--bg-subtle)", color: "var(--accent)", border: "1px solid var(--border)" }}
              >
                {project.type}
              </span>
              <span className={styles.cardYear}>{project.year}</span>
            </div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardCompany}>{project.company}</p>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.cardTags} aria-label="Technologies">
              {project.tags.map((tag) => (
                <span key={tag} className={styles.cardTag}>{tag}</span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
                aria-label={`Visit ${project.title}`}
              >
                {p.visitSite}
              </a>
            )}
          </article>
        ))}
      </motion.div>
    </section>
  );
}

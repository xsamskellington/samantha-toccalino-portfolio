"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Projects.module.css";

const defaultClassName = "projects";
const fadeUp = makeFadeUp();

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();
  const p = t.projects;

  const featured = p.items.find((item) => item.featured)!;
  const rest = p.items.filter((item) => !item.featured);

  return (
    <section id="projects" className={styles[defaultClassName]} ref={ref} aria-label="Projects">
      <motion.p
        className={styles[`${defaultClassName}__eyebrow`]}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        {p.eyebrow}
      </motion.p>

      <motion.h2
        className={styles[`${defaultClassName}__title`]}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        {p.title}
      </motion.h2>

      <motion.article
        className={styles[`${defaultClassName}__featured`]}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={2}
        aria-label={`Featured project: ${featured.title}`}
      >
        <div className={styles[`${defaultClassName}__featured-inner`]}>
          <div className={styles[`${defaultClassName}__featured-left`]}>
            <div className={styles[`${defaultClassName}__card-meta`]}>
              <span className={styles[`${defaultClassName}__card-badge`]}>{p.featuredBadge}</span>
              <span className={styles[`${defaultClassName}__card-year`]}>{featured.year}</span>
            </div>
            <h3 className={styles[`${defaultClassName}__card-title`]}>{featured.title}</h3>
            <p className={styles[`${defaultClassName}__card-company`]}>{featured.company}</p>
            <p className={styles[`${defaultClassName}__card-description`]}>{featured.description}</p>
          </div>

          <div className={styles[`${defaultClassName}__featured-right`]}>
            <ul className={styles[`${defaultClassName}__card-highlights`]} aria-label="Highlights">
              {featured.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className={styles[`${defaultClassName}__card-tags`]} aria-label="Technologies">
              {featured.tags.map((tag) => (
                <span key={tag} className={styles[`${defaultClassName}__card-tag`]}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      <motion.div
        className={styles[`${defaultClassName}__grid`]}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={3}
        role="list"
        aria-label="Other projects"
      >
        {rest.map((project) => (
          <article key={project.id} className={styles[`${defaultClassName}__card`]} role="listitem">
            <div className={styles[`${defaultClassName}__card-meta`]}>
              <span
                className={styles[`${defaultClassName}__card-badge`]}
                style={{ background: "var(--bg-subtle)", color: "var(--accent)", border: "1px solid var(--border)" }}
              >
                {project.type}
              </span>
              <span className={styles[`${defaultClassName}__card-year`]}>{project.year}</span>
            </div>
            <h3 className={styles[`${defaultClassName}__card-title`]}>{project.title}</h3>
            <p className={styles[`${defaultClassName}__card-company`]}>{project.company}</p>
            <p className={styles[`${defaultClassName}__card-description`]}>{project.description}</p>
            <div className={styles[`${defaultClassName}__card-tags`]} aria-label="Technologies">
              {project.tags.map((tag) => (
                <span key={tag} className={styles[`${defaultClassName}__card-tag`]}>{tag}</span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles[`${defaultClassName}__card-link`]}
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

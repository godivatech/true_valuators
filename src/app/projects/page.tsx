"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { PROJECTS_DATA, ProjectItem } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "textile" | "education">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === "all" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <div className={styles.main}>
      {/* Page Hero */}
      <section className={styles.projectsHero}>
        <div className={styles.watermark}>PORTFOLIO</div>
        <span className={styles.subtitle}>Our Portfolio</span>
        <h1 className={styles.title}>Valuation Projects</h1>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>Projects</span>
        </div>
      </section>

      {/* filterable Projects Section */}
      <section className={styles.gallerySection} aria-label="Clients & Corporate Valuation Projects">
        <div className={styles.filterBar}>
          <button 
            onClick={() => setFilter("all")} 
            className={`${styles.filterBtn} ${filter === "all" ? styles.filterActive : ""}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("textile")} 
            className={`${styles.filterBtn} ${filter === "textile" ? styles.filterActive : ""}`}
          >
            Textile
          </button>
          <button 
            onClick={() => setFilter("education")} 
            className={`${styles.filterBtn} ${filter === "education" ? styles.filterActive : ""}`}
          >
            Education
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.imageWrapper}>
                {project.image ? (
                  <img src={project.image} alt="Project Image" className={styles.projectImage} />
                ) : (
                  <svg className={styles.buildingVector} viewBox="0 0 24 24">
                    <path d="M19 2H5c-1.1 0-2 .9-2 2v17h2v-2h14v2h2V4c0-1.1-.9-2-2-2zm0 15H5V4h14v13zM7 6h4v3H7zm6 0h4v3h-4zm-6 5h4v3H7zm6 0h4v3h-4z" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Portal for Project Details */}
      <div
        className={`${styles.lightboxOverlay} ${selectedProject ? styles.lightboxOverlayActive : ""}`}
        onClick={() => setSelectedProject(null)}
      >
        <div
          className={styles.lightboxContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className={styles.lightboxClose} 
            onClick={() => setSelectedProject(null)}
            aria-label="Close Lightbox"
          >
            ✕
          </button>
          {selectedProject && (
            <div className={styles.lightboxImageBlock}>
              {selectedProject.image ? (
                <img src={selectedProject.image} alt="Project Image" className={styles.lightboxImage} />
              ) : (
                <svg className={styles.lightboxLargeVector} viewBox="0 0 24 24">
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v17h2v-2h14v2h2V4c0-1.1-.9-2-2-2zm0 15H5V4h14v13zM7 6h4v3H7zm6 0h4v3h-4zm-6 5h4v3H7zm6 0h4v3h-4z" />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

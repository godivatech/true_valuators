"use client";

import { useState } from "react";
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
        <span className={styles.subtitle}>Our Portfolio</span>
        <h1 className={styles.title}>Valuation Projects</h1>
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
              className={`${styles.projectCard} scroll-reveal`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.imageWrapper}>
                {/* Premium inline architectural drafting SVG representation */}
                <svg className={styles.buildingVector} viewBox="0 0 24 24">
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v17h2v-2h14v2h2V4c0-1.1-.9-2-2-2zm0 15H5V4h14v13zM7 6h4v3H7zm6 0h4v3h-4zm-6 5h4v3H7zm6 0h4v3h-4z" />
                </svg>
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayCategory}>{project.category === "textile" ? "Commercial Audit" : "Educational Audit"}</span>
                  <h3 className={styles.overlayTitle}>{project.title}</h3>
                  <span className={styles.overlayLocation}>{project.location}</span>
                  <p className={styles.overlayScope}>{project.scope}</p>
                </div>
              </div>
              <div className={styles.cardBottomInfo}>
                <div className={styles.cardTitleWrap}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.cardSubtitle}>
                    {project.category === "textile" ? "Commercial Audit" : "Educational Audit"}
                  </span>
                </div>
                <div className={styles.cardArrow}>➔</div>
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
            <>
              <div className={styles.lightboxImageBlock}>
                <svg className={styles.lightboxLargeVector} viewBox="0 0 24 24">
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v17h2v-2h14v2h2V4c0-1.1-.9-2-2-2zm0 15H5V4h14v13zM7 6h4v3H7zm6 0h4v3h-4zm-6 5h4v3H7zm6 0h4v3h-4z" />
                </svg>
              </div>
              <div className={styles.lightboxText}>
                <span className={styles.lightboxCategory}>
                  {selectedProject.category === "textile" ? "Commercial Showroom" : "Educational Campus"}
                </span>
                <h2 className={styles.lightboxTitle}>{selectedProject.title}</h2>
                <span className={styles.lightboxLocation}>{selectedProject.location}</span>
                <div style={{ marginTop: "20px" }}>
                  <h3 className={styles.lightboxScopeTitle}>Valuation & Audit Scope:</h3>
                  <p className={styles.lightboxScopeText}>{selectedProject.scope}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

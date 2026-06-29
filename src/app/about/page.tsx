"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { TEAM_DATA, WHY_CHOOSE_US_DATA, OUR_COMMITMENT, VALUATION_PROCESS_DATA } from "../data";

export default function About() {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "users":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "target":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      case "search":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        );
      case "shield":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "clock":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case "trending":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        );
      case "cpu":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="15" x2="23" y2="15" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="15" x2="4" y2="15" />
          </svg>
        );
      case "lock":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        );
      case "briefcase":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case "smile":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderProcessIcon = (icon: string) => {
    switch (icon) {
      case "user":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "handshake":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3" />
            <path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
            <path d="M10 10V7a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v9a4 4 0 0 0 4 4h4" />
            <path d="M6 20h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-3" />
          </svg>
        );
      case "folder":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        );
      case "inspection":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16" />
            <path d="M8 21v-4a2 2 0 0 1 2-2h4" />
            <circle cx="17" cy="13" r="3" />
            <path d="M19.5 15.5L22 18" />
            <path d="M6 7h4M6 11h4" />
          </svg>
        );
      case "chart":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
            <path d="M3 20h18" />
          </svg>
        );
      case "shield-check":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 11l2 2 4-4" />
          </svg>
        );
      case "scale":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="12" y1="21" x2="8" y2="21" />
            <line x1="12" y1="21" x2="16" y2="21" />
            <line x1="5" y1="7" x2="19" y2="7" />
            <path d="M5 7l3 6M19 7l-3 6" />
            <path d="M8 13h2M14 13h2" />
          </svg>
        );
      case "calculator":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="16" y1="14" x2="16" y2="18" />
            <line x1="12" y1="14" x2="12" y2="18" />
            <line x1="8" y1="14" x2="8" y2="18" />
            <line x1="16" y1="10" x2="16" y2="10.01" />
            <line x1="12" y1="10" x2="12" y2="10.01" />
            <line x1="8" y1="10" x2="8" y2="10.01" />
          </svg>
        );
      case "document":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        );
      case "award":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.main}>
      {/* Page Hero */}
      <section className={styles.aboutHero}>
        <div className={styles.watermark}>ABOUT</div>
        <span className={styles.subtitle}>Who We Are</span>
        <h1 className={styles.title}>About Our Firm</h1>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>About</span>
        </div>
      </section>

      {/* Mission, Vision, Aim */}
      <section className={styles.mvaSection} aria-label="Mission Vision Aim">
        <div className={styles.mvaGrid}>
          <div className={`${styles.mvaCard} scroll-reveal`}>
            <div className={styles.mvaIconBox}>
              <svg className={styles.mvaIconSvg} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className={styles.mvaTitle}>Our Mission</h3>
            <p className={styles.mvaText}>
              To service the market through asset optimization and professional consultancy services. We bridge structural safety and financial calculations under one comprehensive auditing banner.
            </p>
          </div>

          <div className={`${styles.mvaCard} scroll-reveal`} style={{ transitionDelay: "150ms" }}>
            <div className={styles.mvaIconBox}>
              <svg className={styles.mvaIconSvg} viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <h3 className={styles.mvaTitle}>Our Vision</h3>
            <p className={styles.mvaText}>
              To be recognized as the market benchmark for innovation and service excellence in asset consulting. We continuously integrate new technologies and structural estimation models to lead our industry.
            </p>
          </div>

          <div className={`${styles.mvaCard} scroll-reveal`} style={{ transitionDelay: "300ms" }}>
            <div className={styles.mvaIconBox}>
              <svg className={styles.mvaIconSvg} viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
            </div>
            <h3 className={styles.mvaTitle}>Our Aim</h3>
            <p className={styles.mvaText}>
              At True Valuators, we assist people and businesses nationwide in realising their full asset potential. We stand behind every calculation, ensuring regulatory compliance and legal protection.
            </p>
          </div>
        </div>
      </section>

      {/* Global Standards & Professional Excellence */}
      <section className={styles.standardsSection} aria-label="Global Standards & Professional Excellence">
        <div className={styles.standardsContainer}>
          <div className={styles.standardsTop}>
            {/* Left Column: Text & Logos */}
            <div className={`${styles.standardsLeft} scroll-reveal-left`}>
              <div className={styles.standardsHeader}>
                <span className={styles.standardsSubtitle}>RICS Compliance</span>
                <div className={styles.standardsSubtitleLine}></div>
              </div>

              <h2 className={styles.standardsTitle}>
                Global Standards.<br />
                <span className={styles.goldText}>Professional Excellence.</span>
              </h2>

              <p className={styles.standardsText}>
                We abide by the standards issued by the Royal Institution of Chartered Surveyors (RICS), ensuring the highest level of professionalism and integrity in every valuation we deliver.
              </p>

              <div className={styles.logoGroup}>
                <div className={styles.ricsLogoWrapper}>
                  <img src="/images/rics-logo.svg" alt="RICS Logo" className={styles.ricsLogoImg} />
                  <div className={styles.regulatedBadge}>Regulated by RICS</div>
                </div>
                <div className={styles.logoDivider}></div>
                <div className={styles.logoTextWrapper}>
                  <span className={styles.logoTextTitle}>Royal Institution of</span>
                  <span className={styles.logoTextTitle}>Chartered Surveyors</span>
                </div>
              </div>
            </div>

            {/* Right Column: Building Image & Badge */}
            <div className={`${styles.standardsRight} scroll-reveal-right`}>
              <div className={styles.buildingImageWrapper}>
                {/* Desktop SVG Curve (Deep S-Curve) */}
                <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" className={`${styles.buildingSvg} ${styles.desktopSvg}`}>
                  <defs>
                    <clipPath id="buildingClip" clipPathUnits="objectBoundingBox">
                      <path d="M 1,0 L 0.25,0 C -0.15,0.35 0.15,0.75 0.55,1 L 1,1 Z" />
                    </clipPath>
                  </defs>
                  <image
                    href="/images/rics_building.png"
                    width="100"
                    height="100"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#buildingClip)"
                  />
                  <path
                    d="M 25,0 C -15,35 15,75 55,100"
                    fill="none"
                    stroke="var(--design-gold)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Mobile SVG (No Curve, Full Width for Mobile) */}
                <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" className={`${styles.buildingSvg} ${styles.mobileSvg}`}>
                  <image
                    href="/images/rics_building.png"
                    width="100"
                    height="100"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                {/* Overlapping circular Badge */}
                <div className={styles.badgeContainer}>
                  <svg viewBox="0 0 160 160" className={styles.badgeSvg}>
                    {/* Dark Background */}
                    <circle cx="80" cy="80" r="72" className={styles.badgeBg} />
                    {/* Inner gold circle */}
                    <circle cx="80" cy="80" r="54" className={styles.badgeInnerCircle} />

                    {/* Paths for text */}
                    <path id="topTextPath" d="M 22,80 A 58,58 0 0,1 138,80" fill="none" />
                    <path id="bottomTextPath" d="M 22,80 A 58,58 0 0,0 138,80" fill="none" />

                    {/* Circular Text */}
                    <text className={styles.badgeText}>
                      <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
                        RICS STANDARDS
                      </textPath>
                    </text>
                    <text className={`${styles.badgeText} ${styles.badgeTextBottom}`}>
                      <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
                        TRUSTED • ETHICAL • PROFESSIONAL
                      </textPath>
                    </text>

                    {/* Center Checkmark in Circle */}
                    <g transform="translate(68, 68)">
                      <circle cx="12" cy="12" r="10" className={styles.badgeCenterCircle} />
                      <path d="M8 12l3 3 5-5" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card: 4 Columns Checklist */}
          <div className={`${styles.checklistContainer} scroll-reveal`}>
            <div className={styles.checklistGrid}>

              {/* Item 1 */}
              <div className={styles.checklistCard}>
                <div className={styles.checklistIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className={styles.checklistTitle}>International Valuation Standards</h3>
                <p className={styles.checklistDescription}>Aligned with globally recognized valuation principles and frameworks.</p>
              </div>

              {/* Item 2 */}
              <div className={styles.checklistCard}>
                <div className={styles.checklistIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2" />
                    <path d="M12 3v15" />
                    <path d="M12 18H3" />
                    <path d="M12 18h9" />
                    <path d="M3 7h18" />
                    <path d="M6 7l-2 6h4l-2-6z" />
                    <path d="M18 7l-2 6h4l-2-6z" />
                  </svg>
                </div>
                <h3 className={styles.checklistTitle}>Ethical & Transparent Practices</h3>
                <p className={styles.checklistDescription}>We uphold the highest standards of ethics, integrity and transparency.</p>
              </div>

              {/* Item 3 */}
              <div className={styles.checklistCard}>
                <div className={styles.checklistIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                  </svg>
                </div>
                <h3 className={styles.checklistTitle}>Accurate & Unbiased Reporting</h3>
                <p className={styles.checklistDescription}>Delivering factual, clear and impartial reports you can depend on.</p>
              </div>

              {/* Item 4 */}
              <div className={styles.checklistCard}>
                <div className={styles.checklistIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 11l2 2 4-4" />
                  </svg>
                </div>
                <h3 className={styles.checklistTitle}>Reliable & Compliant Services</h3>
                <p className={styles.checklistDescription}>Our services are consistent, reliable and fully compliant with RICS requirements.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Valuation Process Section */}
      <section className={styles.processSection} aria-label="Our Valuation Process">
        <div className={`${styles.processHeader} scroll-reveal`}>
          <span className={styles.standardsSubtitle}>Our Valuation Process</span>
          <h2 className={styles.standardsTitle} style={{ textAlign: "center", margin: "15px 0 0 0" }}>
            From Request to Reliable Report
          </h2>
          <div style={{ width: "80px", height: "2.5px", backgroundColor: "var(--accent-gold)", margin: "20px auto 0 auto" }}></div>
        </div>

        <div className={styles.processContainer}>
          {/* SVG Connector Line */}
          <svg className={styles.processSvgConnector} viewBox="0 0 1200 470" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3abeF9" />
              </marker>
            </defs>

            {/* Row 1 Connectors */}
            <path d="M 175 87.5 L 215.6 87.5" markerEnd="url(#arrow)" />
            <path d="M 215.6 87.5 L 256.25 87.5" />

            <path d="M 431.25 87.5 L 471.9 87.5" markerEnd="url(#arrow)" />
            <path d="M 471.9 87.5 L 512.5 87.5" />

            <path d="M 687.5 87.5 L 728.1 87.5" markerEnd="url(#arrow)" />
            <path d="M 728.1 87.5 L 768.75 87.5" />

            <path d="M 943.75 87.5 L 984.4 87.5" markerEnd="url(#arrow)" />
            <path d="M 984.4 87.5 L 1025 87.5" />

            {/* S-Curve Loop Connector */}
            <path d="M 1200 87.5 L 1215 87.5 C 1255 87.5, 1255 235, 1215 235 L -15 235 C -55 235, -55 382.5, -15 382.5 L 0 382.5" />

            {/* Row 2 Connectors */}
            <path d="M 175 382.5 L 215.6 382.5" markerEnd="url(#arrow)" />
            <path d="M 215.6 382.5 L 256.25 382.5" />

            <path d="M 431.25 382.5 L 471.9 382.5" markerEnd="url(#arrow)" />
            <path d="M 471.9 382.5 L 512.5 382.5" />

            <path d="M 687.5 382.5 L 728.1 382.5" markerEnd="url(#arrow)" />
            <path d="M 728.1 382.5 L 768.75 382.5" />

            <path d="M 943.75 382.5 L 984.4 382.5" markerEnd="url(#arrow)" />
            <path d="M 984.4 382.5 L 1025 382.5" />
          </svg>

          {/* Row 1: Steps 01 to 05 */}
          <div className={styles.processRow}>
            {VALUATION_PROCESS_DATA.slice(0, 5).map((step, idx) => (
              <div key={idx} className={`${styles.processCard} scroll-reveal`} style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className={styles.stepBadge}>{step.step}</div>
                <div className={styles.processIconWrapper}>
                  {renderProcessIcon(step.icon)}
                </div>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
              </div>
            ))}
          </div>

          {/* Row 2: Steps 06 to 10 */}
          <div className={styles.processRow}>
            {VALUATION_PROCESS_DATA.slice(5, 10).map((step, idx) => (
              <div key={idx} className={`${styles.processCard} scroll-reveal`} style={{ transitionDelay: `${(idx + 5) * 80}ms` }}>
                <div className={styles.stepBadge}>{step.step}</div>
                <div className={styles.processIconWrapper}>
                  {renderProcessIcon(step.icon)}
                </div>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection} aria-label="Why Choose Us for Property Valuation">
        <div className={`${styles.whyChooseHeader} scroll-reveal`}>
          <span className={styles.standardsSubtitle}>Our Strengths</span>
          <h2 className={styles.standardsTitle} style={{ textAlign: "center", margin: "15px 0 0 0" }}>Why Choose Us for Property Valuation</h2>
          <div style={{ width: "80px", height: "2.5px", backgroundColor: "var(--accent-gold)", margin: "20px auto 0 auto" }}></div>
        </div>

        <div className={styles.whyChooseGrid}>
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.whyChooseCard} scroll-reveal`}
              style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
            >
              <div className={styles.whyChooseIconWrapper}>
                {renderIcon(item.icon)}
              </div>
              <h3 className={styles.whyChooseCardTitle}>{item.title}</h3>
              <p className={styles.whyChooseCardText}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Our Commitment Banner */}
        <div className={`${styles.commitmentBanner} scroll-reveal`}>
          <div className={styles.commitmentQuoteMark}>“</div>
          <div className={styles.commitmentContent}>
            <span className={styles.commitmentSubtitle}>Our Commitment</span>
            <blockquote className={styles.commitmentText}>
              &ldquo;{OUR_COMMITMENT}&rdquo;
            </blockquote>
          </div>
          <div className={styles.commitmentQuoteMark} style={{ alignSelf: "flex-end", transform: "rotate(180deg)" }}>“</div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className={styles.teamSection} aria-label="Our Directors & Consultants">
        <div className={`${styles.teamIntro} scroll-reveal`}>
          <h2 className={styles.introTitle}>Meet Our Leadership</h2>
          <p className={styles.introText}>
            True Valuators comprises a highly certified core team of engineers, financial analysts, and government-registered surveyors. We abide by strict regulatory and professional codes, serving banking firms, public corporations, and private portfolios across the nation.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_DATA.map((member, idx) => (
            <div
              key={idx}
              className={`${styles.profileCard} scroll-reveal`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className={styles.profileImageWrapper}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className={styles.profileImage} />
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                )}
              </div>
              <div className={styles.profileContent}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberRole}>{member.role}</span>
                <span className={styles.credentialsTitle}>Accredited Credentials</span>
                <ul className={styles.credentialsList}>
                  {member.credentials.map((cred, cIdx) => (
                    <li key={cIdx} className={styles.credentialItem}>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Affiliations */}
      <section className={styles.affiliationsSection} aria-label="Trusted Affiliations & Registrations">
        <div className={`scroll-reveal`} style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className={styles.subtitle}>Our Credentials</span>
          <h2 className={styles.title} style={{ fontSize: "36px", marginTop: "10px" }}>Trusted Affiliations</h2>
          <div style={{ width: "80px", height: "2px", backgroundColor: "var(--accent-gold)", margin: "20px auto 0 auto" }}></div>
        </div>

        <div className={styles.affiliationsGrid}>
          <div className={`${styles.affiliationCard} scroll-reveal`}>
            <img src="/images/Trusted Affiliations/office bearers of iov.png" alt="Office bearers of IOV" className={`${styles.affiliationLogo} ${styles.iovOfficeBearersLogo}`} />
            <span className={styles.affiliationLabel}>Office Bearers of IOV & Insolvency Valuers</span>
          </div>

          <div className={`${styles.affiliationCard} scroll-reveal`} style={{ transitionDelay: "150ms" }}>
            <img src="/images/Trusted Affiliations/instution of valuers.png" alt="Institution of Valuers" className={styles.affiliationLogo} />
            <span className={styles.affiliationLabel}>Institution of Valuers Registered Panel</span>
          </div>

          <div className={`${styles.affiliationCard} scroll-reveal`} style={{ transitionDelay: "300ms" }}>
            <img src="/images/Trusted Affiliations/It registered valuer.png" alt="Income Tax Valuer" className={styles.affiliationLogo} />
            <span className={styles.affiliationLabel}>Income Tax & Wealth Tax Registered Valuer</span>
          </div>
        </div>

        {/* Association with 3V PRO */}
        <div className={`${styles.associationCallout} scroll-reveal`} style={{ transitionDelay: "450ms" }}>
          <div className={styles.associationCalloutContent}>
            <div className={styles.associationLogoWrapper}>
              <span className={styles.associationLogoText}>3V PRO</span>
            </div>
            <div className={styles.associationCalloutText}>
              <h3 className={styles.associationCalloutTitle}>Association with 3V PRO</h3>
              <p className={styles.associationCalloutDescription}>
                We are proud to be associated with <a href="https://3vpro.in" target="_blank" rel="noopener noreferrer" className={styles.associationLink}>3V PRO</a>, a reputed valuation and insolvency professional organization offering comprehensive valuation and advisory services across multiple domains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

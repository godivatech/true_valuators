"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { TEAM_DATA } from "../data";

export default function About() {
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

          <div className={`${styles.affiliationCard} scroll-reveal`} style={{ transitionDelay: "450ms" }}>
            <img src="/images/Trusted Affiliations/the instiution of valuers.png" alt="The Institution of Valuers Seal" className={styles.affiliationLogo} />
            <span className={styles.affiliationLabel}>The Institution of Valuers Official Seal</span>
          </div>
        </div>
      </section>
    </div>
  );
}

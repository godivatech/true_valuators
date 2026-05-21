"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { OFFICE_CONTACTS } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Column */}
        <div className={styles.column}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>True Valuators</span>
            <span className={styles.logoSubtext}>Property Valuers & Consultant Engineers</span>
          </div>
          <p className={styles.description}>
            A team of qualified and experienced professionals who are part of the Institution of Valuers (IOV), Institution of Engineers, and Insolvency and Bankruptcy Board of India. We deliver precise values without variation through verified legal, technical, and revenue audit channels.
          </p>
        </div>

        {/* Chennai Office */}
        <div className={styles.column}>
          <h4 className={styles.title}>Office Address</h4>
          <span className={styles.officeName}>{OFFICE_CONTACTS.chennai.city} Office</span>
          <ul className={styles.addressDetails}>
            <li className={styles.addressItem}>
              <span className={styles.addressLabel}>Address</span>
              <span className={styles.addressValue}>{OFFICE_CONTACTS.chennai.address}</span>
            </li>
            <li className={styles.addressItem}>
              <span className={styles.addressLabel}>Phone</span>
              <a href={`tel:${OFFICE_CONTACTS.chennai.phone}`} className={styles.addressValue}>
                {OFFICE_CONTACTS.chennai.phone}
              </a>
            </li>
            <li className={styles.addressItem}>
              <span className={styles.addressLabel}>Email</span>
              <a href={`mailto:${OFFICE_CONTACTS.chennai.email}`} className={styles.addressValue}>
                {OFFICE_CONTACTS.chennai.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Madurai Office */}
        <div className={styles.column}>
          <h4 className={styles.title} style={{ visibility: "hidden" }}>Office Address 2</h4>
          <span className={styles.officeName}>{OFFICE_CONTACTS.madurai.city} Office</span>
          <ul className={styles.addressDetails}>
            <li className={styles.addressItem}>
              <span className={styles.addressLabel}>Address</span>
              <span className={styles.addressValue}>{OFFICE_CONTACTS.madurai.address}</span>
            </li>
            <li className={styles.addressItem}>
              <span className={styles.addressLabel}>Phone</span>
              <a href={`tel:${OFFICE_CONTACTS.madurai.phone}`} className={styles.addressValue}>
                {OFFICE_CONTACTS.madurai.phone}
              </a>
            </li>
            <li className={styles.addressItem}>
              <span className={styles.addressLabel}>Email</span>
              <a href={`mailto:${OFFICE_CONTACTS.madurai.email}`} className={styles.addressValue}>
                {OFFICE_CONTACTS.madurai.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.copyrightRow}>
        <span className={styles.copyrightText}>
          &copy; {new Date().getFullYear()} True Valuators. All rights reserved.
        </span>
        <span className={styles.creditText}>
          Designed &amp; Developed by{" "}
          <a 
            href="https://godivatech.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.creditLink}
          >
            Godivatech
          </a>
        </span>
        <button 
          onClick={scrollToTop} 
          className={styles.scrollButton} 
          aria-label="Scroll to top"
        >
          <span className={styles.chevronUp}></span>
        </button>
      </div>
    </footer>
  );
}

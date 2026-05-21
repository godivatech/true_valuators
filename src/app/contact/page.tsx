"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { OFFICE_CONTACTS } from "../data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "loan",
    officePreference: "chennai",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          serviceType: "loan",
          officePreference: "chennai",
          message: "",
        });
      }, 4000);
    }
  };

  return (
    <div className={styles.main}>
      {/* Page Hero */}
      <section className={styles.contactHero}>
        <span className={styles.subtitle}>Get In Touch</span>
        <h1 className={styles.title}>Contact Our Offices</h1>
      </section>

      {/* Offices Grid */}
      <section className={styles.officesSection} aria-label="Our Corporate Offices Locations">
        <div className={styles.officesGrid}>
          {/* Chennai Office */}
          <div className={`${styles.officeCard} scroll-reveal-left`}>
            <h2 className={styles.cityName}>{OFFICE_CONTACTS.chennai.city}</h2>
            <span className={styles.officeLabel}>Regional Valuation Headquarters</span>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Corporate Address</span>
                <span className={styles.detailVal}>{OFFICE_CONTACTS.chennai.address}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Direct Line</span>
                <a href={`tel:${OFFICE_CONTACTS.chennai.phone}`} className={styles.detailLink}>
                  +91 {OFFICE_CONTACTS.chennai.phone.replace("-", " ")}
                </a>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Electronic Mail</span>
                <a href={`mailto:${OFFICE_CONTACTS.chennai.email}`} className={styles.detailLink}>
                  {OFFICE_CONTACTS.chennai.email}
                </a>
              </div>
            </div>

            {/* Premium simulated map/blueprint locator graphic */}
            <div className={styles.mapPlaceholder}>
              <svg className={styles.mapSvg} viewBox="0 0 100 100">
                <path d="M10 20 L90 20 M10 40 L90 40 M10 60 L90 60 M10 80 L90 80 M20 10 L20 90 M40 10 L40 90 M60 10 L60 90 M80 10 L80 90" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <div className={styles.mapMarker}>
                📍 West Mambalam, Chennai
              </div>
            </div>
          </div>

          {/* Madurai Office */}
          <div className={`${styles.officeCard} scroll-reveal-right`}>
            <h2 className={styles.cityName}>{OFFICE_CONTACTS.madurai.city}</h2>
            <span className={styles.officeLabel}>Registered Corporate Office</span>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Corporate Address</span>
                <span className={styles.detailVal}>{OFFICE_CONTACTS.madurai.address}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Direct Line</span>
                <a href={`tel:${OFFICE_CONTACTS.madurai.phone}`} className={styles.detailLink}>
                  +91 {OFFICE_CONTACTS.madurai.phone.replace("-", " ")}
                </a>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Electronic Mail</span>
                <a href={`mailto:${OFFICE_CONTACTS.madurai.email}`} className={styles.detailLink}>
                  {OFFICE_CONTACTS.madurai.email}
                </a>
              </div>
            </div>

            {/* Premium simulated map/blueprint locator graphic */}
            <div className={styles.mapPlaceholder}>
              <svg className={styles.mapSvg} viewBox="0 0 100 100">
                <path d="M15 15 L85 85 M15 85 L85 15 M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <div className={styles.mapMarker}>
                📍 Narimedu, Madurai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Appointment Scheduler */}
      <section className={styles.formSection} aria-label="Schedule Corporate Audit">
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Schedule a Technical Valuation Audit</h2>
          <p className={styles.formSubtitle}>
            Submit your structural and property parameters to schedule a physical inspection with our directors.
          </p>

          {isSubmitted ? (
            <div style={{ color: "var(--accent-gold)", fontWeight: 600, padding: "30px", textAlign: "center", background: "var(--primary-darker)", border: "1px solid var(--glass-border)", borderRadius: "8px" }}>
              ✓ Valuation Audit Request Received! Our directors will contact you directly within 24 hours to schedule the site audit.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name / Corporation</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className={styles.inputField}
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Direct Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter mobile number"
                  className={styles.inputField}
                  value={formState.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Electronic Mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className={styles.inputField}
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Required Valuation Scope</label>
                <select
                  name="serviceType"
                  className={styles.selectInput}
                  value={formState.serviceType}
                  onChange={handleInputChange}
                >
                  <option value="loan">Property Loan Eligibility Audit</option>
                  <option value="stage">Construction Stage Value Certification</option>
                  <option value="deviation">Zoning & Building Violation Risk</option>
                  <option value="tax">Regulatory Compliance & Capital Gains</option>
                  <option value="corporate">Corporate Debt & Equity Valuation</option>
                </select>
              </div>

              <div className={styles.formGroupFull}>
                <label className={styles.formLabel}>Preferred Office Review Center</label>
                <select
                  name="officePreference"
                  className={styles.selectInput}
                  value={formState.officePreference}
                  onChange={handleInputChange}
                >
                  <option value="chennai">Chennai Valuation Center (West Mambalam)</option>
                  <option value="madurai">Madurai Valuation Center (Narimedu)</option>
                </select>
              </div>

              <div className={styles.formGroupFull}>
                <label className={styles.formLabel}>Property Dimensions & Site Parameters</label>
                <textarea
                  name="message"
                  placeholder="Describe building setbacks, total floors, plot area, and specific audit requirements..."
                  className={styles.textareaField}
                  value={formState.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Confirm Audit Scheduling
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

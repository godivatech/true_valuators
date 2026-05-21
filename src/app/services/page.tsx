"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { SERVICES_DATA, Service } from "../data";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Scope estimator state
  const [propertyType, setPropertyType] = useState("residential");
  const [areaSize, setAreaSize] = useState(1500);

  const getRecommendedServices = (type: string) => {
    switch (type) {
      case "residential":
        return ["Eligibility for loan issuance", "Stage value of construction", "Regulatory compliances"];
      case "commercial":
        return ["Mortgage Security", "Debt & Equity Raising", "Regulatory compliances"];
      case "industrial":
        return ["Financing & Insolvency", "Mortgage Security", "Adverse matters violations advise"];
      case "land":
        return ["Classify the land guidelines", "Statutory & Land Value Objections", "Litigation & Expert Witness"];
      default:
        return ["Eligibility for loan issuance"];
    }
  };

  const getEstimatedDuration = (type: string) => {
    switch (type) {
      case "residential": return "2 - 3 Working Days";
      case "commercial": return "3 - 5 Working Days";
      case "industrial": return "5 - 7 Working Days";
      case "land": return "3 - 4 Working Days";
      default: return "2 - 3 Working Days";
    }
  };

  // Helper to format indexes (e.g., 1 -> "01")
  const formatIndex = (id: number) => {
    return id < 10 ? `0${id}` : `${id}`;
  };

  return (
    <div className={styles.main}>
      {/* Page Hero */}
      <section className={styles.servicesHero}>
        <div className={styles.watermark}>SERVICES</div>
        <span className={styles.subtitle}>What We Offer</span>
        <h1 className={styles.title}>Valuation Services</h1>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>Services</span>
        </div>
      </section>

      {/* Services Grid with Alternating Waves */}
      <section className={styles.servicesSection} aria-label="Our Full Services Directory">
        <div className={`${styles.gridIntro} scroll-reveal`}>
          <p className={styles.introText}>
            We provide comprehensive technical, financial, and legal valuations for a diverse spectrum of assets. Select any core capability below to view the detailed structural compliance and auditing parameters involved.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} scroll-reveal`}
              style={{ transitionDelay: `${idx * 80}ms` }}
              onClick={() => setSelectedService(service)}
            >
              <span className={styles.cardIndex}>{formatIndex(service.id)}</span>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  <svg className={styles.cardIconSvg} viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              <div className={styles.cardAction}>
                <span>Explore Scope</span>
                <span className={styles.actionChevron}>➔</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scope Estimator Portal */}
      <section className={styles.estimatorSection} aria-label="Valuation Scope Estimator">
        <div className={styles.estimatorContainer}>
          <h2 className={styles.estimatorTitle}>Valuation Scope Estimator</h2>
          <p className={styles.estimatorSubtitle}>
            Select your property parameters to dynamically view recommended services and turnaround estimates.
          </p>

          <div className={styles.estimatorGrid}>
            <div className={styles.calculatorForm}>
              <div className={styles.formGroup}>
                <label className={styles.calcLabel}>Property / Asset Type</label>
                <select
                  className={styles.selectInput}
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="residential">Residential Villa / Apartment</option>
                  <option value="commercial">Commercial Office / Showroom</option>
                  <option value="industrial">Industrial Plant / Factory</option>
                  <option value="land">Agricultural / Layout Land Plot</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.calcLabel}>Approx. Built-up Area (Sq.Ft.)</label>
                <input
                  type="number"
                  className={styles.numberInput}
                  value={areaSize}
                  onChange={(e) => setAreaSize(Number(e.target.value))}
                  min={100}
                />
              </div>
            </div>

            <div className={styles.resultsPanel}>
              <div>
                <h3 className={styles.resultTitle}>Estimated Parameters</h3>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Audit Duration</span>
                  <div className={styles.resultVal}>{getEstimatedDuration(propertyType)}</div>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Required Services Scope</span>
                  <ul className={styles.resultList}>
                    {getRecommendedServices(propertyType).map((svc, sIdx) => (
                      <li key={sIdx} className={styles.resultListItem}>
                        <span className={styles.resultCheck}>✦</span>
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide Drawer for Service Details */}
      <div
        className={`${styles.drawerOverlay} ${selectedService ? styles.drawerOverlayActive : ""}`}
        onClick={() => setSelectedService(null)}
      >
        <div
          className={`${styles.drawer} ${selectedService ? styles.drawerActive : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={() => setSelectedService(null)}>
            ✕
          </button>
          {selectedService && (
            <>
              <h2 className={styles.drawerTitle}>{selectedService.title}</h2>
              <p className={styles.drawerDesc}>{selectedService.description}</p>
              
              <h3 className={styles.scopeTitle}>Technical Audit Scope Includes:</h3>
              <ul className={styles.scopeList}>
                {selectedService.details.map((item, idx) => (
                  <li key={idx} className={styles.scopeItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { SERVICES_DATA, Service } from "../data";

export default function Services() {
  const [activeService, setActiveService] = useState<Service>(SERVICES_DATA[0]);
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  
  // Scope estimator state
  const [propertyType, setPropertyType] = useState("residential");
  const [areaSize, setAreaSize] = useState(1500);

  const getServicePillar = (id: number) => {
    if ([1, 2, 4, 5, 11].includes(id)) return 'real-estate';
    if ([6, 7].includes(id)) return 'business';
    return 'legal-financial';
  };

  const handlePillarClick = (pillar: string) => {
    const nextPillar = selectedPillar === pillar ? null : pillar;
    setSelectedPillar(nextPillar);
    
    const filtered = nextPillar
      ? SERVICES_DATA.filter(s => getServicePillar(s.id) === nextPillar)
      : SERVICES_DATA;
    if (filtered.length > 0) {
      setActiveService(filtered[0]);
    }
  };

  const filteredServices = selectedPillar 
    ? SERVICES_DATA.filter(service => getServicePillar(service.id) === selectedPillar)
    : SERVICES_DATA;

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

      {/* Services Verticals Pillars */}
      <section className={styles.pillarsSection} aria-label="Valuation Service Verticals">
        <div className={styles.pillarsContainer}>
          <div className={styles.pillarsTitleBlock}>
            <span className={styles.pillarsSubtitle}>Service Pillars</span>
            <h2 className={styles.pillarsTitle}>Three Core Valuation Verticals</h2>
            <p className={styles.pillarsDesc}>
              We classify our advisory and technical valuation audits under three core pillars. Click any vertical below to inspect or filter our detailed directory:
            </p>
          </div>

          <div className={styles.pillarsFlow}>
            <div className={styles.flowLine}></div>

            <div className={styles.pillarsGrid}>
              <div 
                className={`${styles.pillarCard} ${selectedPillar === 'real-estate' ? styles.pillarCardActive : ''}`}
                onClick={() => handlePillarClick('real-estate')}
              >
                <div className={styles.pillarIndicator}></div>
                <div className={styles.pillarInfo}>
                  <h3 className={styles.pillarName}>Real Estate Valuation</h3>
                  <span className={styles.pillarMeta}>5 Core Capabilities</span>
                </div>
              </div>

              <div 
                className={`${styles.pillarCard} ${selectedPillar === 'business' ? styles.pillarCardActive : ''}`}
                onClick={() => handlePillarClick('business')}
              >
                <div className={styles.pillarIndicator}></div>
                <div className={styles.pillarInfo}>
                  <h3 className={styles.pillarName}>Business Valuation</h3>
                  <span className={styles.pillarMeta}>2 Core Capabilities</span>
                </div>
              </div>

              <div 
                className={`${styles.pillarCard} ${selectedPillar === 'legal-financial' ? styles.pillarCardActive : ''}`}
                onClick={() => handlePillarClick('legal-financial')}
              >
                <div className={styles.pillarIndicator}></div>
                <div className={styles.pillarInfo}>
                  <h3 className={styles.pillarName}>Legal & Financial Support Valuation</h3>
                  <span className={styles.pillarMeta}>5 Core Capabilities</span>
                </div>
              </div>
            </div>
          </div>
          
          {selectedPillar && (
            <button className={styles.clearFilterBtn} onClick={() => { setSelectedPillar(null); setActiveService(SERVICES_DATA[0]); }}>
              Showing {filteredServices.length} filtered results. Click here to show all {SERVICES_DATA.length} services.
            </button>
          )}
        </div>
      </section>

      {/* Services Workspace (Split-Screen Interactive Dashboard) */}
      <section className={styles.workspaceSection} aria-label="Our Full Services Directory">
        <div className={`${styles.gridIntro} scroll-reveal`}>
          <p className={styles.introText}>
            We provide comprehensive technical, financial, and legal valuations for a diverse spectrum of assets. 
            Click any service row in our live directory below to inspect its detailed structural compliance and auditing parameters.
          </p>
        </div>

        <div className={styles.workspaceContainer}>
          {/* Left Column: Sidebar Directory List */}
          <div className={styles.sidebarColumn}>
            <div className={styles.sidebarHeader}>
              <h3 className={styles.sidebarTitle}>Services Directory</h3>
              <span className={styles.sidebarCount}>{filteredServices.length} Capabilities</span>
            </div>
            <div className={styles.sidebarList}>
              {filteredServices.map((service) => {
                const isActive = activeService.id === service.id;
                return (
                  <div
                    key={service.id}
                    className={`${styles.sidebarItem} ${isActive ? styles.sidebarItemActive : ""}`}
                    onClick={() => setActiveService(service)}
                  >
                    <span className={styles.sidebarIndex}>{formatIndex(service.id)}</span>
                    <div className={styles.sidebarTextWrap}>
                      <h4 className={styles.sidebarItemTitle}>{service.title}</h4>
                      <p className={styles.sidebarItemSnippet}>
                        {service.description.substring(0, 75)}...
                      </p>
                    </div>
                    <div className={styles.sidebarArrow}>➔</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Sticky Panoramic Detail Console */}
          <div className={styles.consoleColumn}>
            <div className={styles.stickyConsole}>
              <div className={styles.consoleHeader}>
                <span className={styles.consoleLabel}>Capability {formatIndex(activeService.id)}</span>
                <h2 className={styles.consoleTitle}>{activeService.title}</h2>
                <div className={styles.consoleDivider}></div>
              </div>

              <div className={styles.consoleBody}>
                <p className={styles.consoleDesc}>{activeService.description}</p>

                <div className={styles.auditScopeBlock}>
                  <h3 className={styles.scopeHeaderTitle}>Technical Audit Scope & Compliance Parameters:</h3>
                  <ul className={styles.scopeGrid}>
                    {activeService.details.map((detail, dIdx) => (
                      <li key={dIdx} className={styles.scopeGridItem}>
                        <span className={styles.scopeGridBadge}>✦</span>
                        <span className={styles.scopeGridText}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.consoleFooter}>
                <div className={styles.regulatorySeal}>
                  <div className={styles.sealIcon}>
                    <svg viewBox="0 0 24 24" className={styles.sealSvg}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                  </div>
                  <div className={styles.sealText}>
                    <strong>Government Approved & Accredited</strong>
                    <span>Complies with IBBI, IOV & Indian Income Tax wealth valuation acts.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
}

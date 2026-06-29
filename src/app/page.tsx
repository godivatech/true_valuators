"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { VALUES_DATA, OFFICE_CONTACTS } from "./data";

const HERO_SLIDES = [
  {
    title: "Valuation services designed for modern enterprises",
    subtitle: "Most Trusted Valuation Firm",
    image: "/images/hero section/1.png",
    number: "01"
  },
  {
    title: "Accurate physical and technical value assessment",
    subtitle: "Property Valuers & Consultant Engineers",
    image: "/images/hero section/2.png",
    number: "02"
  },
  {
    title: "Regulatory compliance reporting built on precision",
    subtitle: "Accredited Chartered Engineers",
    image: "/images/hero section/1.png",
    number: "03"
  }
];

const PARTNER_LOGOS = [
  {
    name: "State Bank of India",
    src: "/images/bank%20partners/sbi.jpg"
  },
  {
    name: "Union Bank of India",
    src: "/images/bank%20partners/union%20bank%20of%20india.png"
  },
  {
    name: "Canara Bank",
    src: "/images/bank%20partners/canara%20bank.png"
  },
  {
    name: "Real Touch Finance",
    src: "/images/bank%20partners/Real%20touch%20finance.jpeg"
  },
  {
    name: "Repco Home Finance",
    src: "/images/bank%20partners/repco%20home%20finnace.png"
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          address: "",
          message: "",
        });
      }, 4000);
    }
  };

  const renderValueIcon = (icon: string) => {
    switch (icon) {
      case "scale":
        return (
          <svg className={styles.iconSvg} viewBox="0 0 24 24">
            <path d="M12 2a1 1 0 0 1 .993.883L13 3v1.077c3.093.435 5.5 3.09 5.5 6.308 0 .86-.18 1.67-.502 2.408l.842 1.348a1 1 0 0 1-.848 1.527l-5.992-.016a1 1 0 0 1-.994-.883l-.006-.117V12a1 1 0 0 1 1-1h1.5a1.5 1.5 0 0 0 0-3H13v6H11V8H9.5a1.5 1.5 0 0 0 0 3H11v3H9.5a1.5 1.5 0 0 0 0 3H11v.348c0 .484-.35.89-.83 1.002l-.17.034-5.992.016a1 1 0 0 1-.848-1.527l.842-1.348c-.322-.738-.502-1.548-.502-2.408 0-3.218 2.407-5.873 5.5-6.308V3a1 1 0 0 1 1-1zm0 2h-1v1.03c-2.468.413-4.39 2.483-4.496 5.06l-.004.295c0 .762.148 1.488.42 2.155l.08.182h8.001c.252-.61.4-1.28.42-1.986l.004-.351c0-2.577-1.928-4.647-4.396-5.06V4z" />
          </svg>
        );
      case "helmet":
        return (
          <svg className={styles.iconSvg} viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 1 10 10v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4A10 10 0 0 1 12 2zm1 4.1V9a1 1 0 0 1-2 0V6.1A8.003 8.003 0 0 0 4.07 13h15.86A8.003 8.003 0 0 0 13 6.1zM20 15H4v1h16v-1z" />
          </svg>
        );
      case "tie":
        return (
          <svg className={styles.iconSvg} viewBox="0 0 24 24">
            <path d="M14.5 2a1 1 0 0 1 .84.457l2.5 4a1 1 0 0 1-.03 1.096L14 13v8.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V13L6.19 7.553a1 1 0 0 1-.03-1.096l2.5-4A1 1 0 0 1 9.5 2h5zm-1 2h-3l-1.875 3h6.75L13.5 4zm-1 5.385H11.5V21h1V9.385z" />
          </svg>
        );
      case "connection":
        return (
          <svg className={styles.iconSvg} viewBox="0 0 24 24">
            <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 8c3.866 0 7 2.015 7 4.5v1.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.5c0-2.485 3.134-4.5 7-4.5zm0 2c-2.617 0-4.814.945-4.992 2.185L7 16.5v.5h10v-.5c0-1.223-2.13-2.176-4.783-2.48l-.217-.02z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Helper to map Bento grid shapes
  const getBentoShapeClass = (idx: number) => {
    switch (idx) {
      case 0: return styles.cardLargeHorizontal;
      case 1: return styles.cardTallVertical;
      case 2: return styles.cardSquareCompact;
      case 3: return styles.cardWideMedium;
      default: return "";
    }
  };

  return (
    <div className={styles.main}>
      {/* 1. Immersive Hero Slider */}
      <section className={styles.hero} aria-label="Hero Showcase">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={index}
              className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
            >
              <div 
                className={styles.slideImageWrapper}
                style={{ 
                  backgroundImage: `linear-gradient(180deg, rgba(10, 17, 40, 0.25) 0%, rgba(6, 10, 24, 0.4) 100%), url('${slide.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className={styles.heroContent}>
                <div className={styles.textBlock}>
                  <span className={styles.heroSubtitle}>{slide.subtitle}</span>
                  <h1 className={styles.heroTitle}>{slide.title}</h1>
                  <div className={styles.heroBtnWrapper}>
                    <div className={styles.connectorLine}></div>
                    <Link href="/contact" className={styles.ctaButton}>
                      Schedule Valuation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.sliderArrows}>
          <button onClick={handlePrevSlide} className={styles.arrowBtn} aria-label="Previous Slide">
            <span className={`${styles.arrowIcon} ${styles.arrowLeft}`}></span>
          </button>
          <button onClick={handleNextSlide} className={styles.arrowBtn} aria-label="Next Slide">
            <span className={`${styles.arrowIcon} ${styles.arrowRight}`}></span>
          </button>
        </div>
      </section>

      {/* 2. Partners Infinite Loop Banner */}
      <section className={styles.partnersSection} aria-label="Our Partners">
        <div className={`${styles.sectionHeader} scroll-reveal`}>
          <span className={styles.sectionSubtitle}>Trusted Collaborations</span>
          <h2 className={styles.sectionTitle}>Our Valued Partners</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={styles.partnersContainer}>
          {/* Leftward seamless infinite scroll */}
          <div className={styles.scrollRow}>
            <div className="animate-scroll-left">
              <div className={styles.logoGroup}>
                {PARTNER_LOGOS.map((logo, idx) => (
                  <div key={idx} className={styles.partnerLogoWrapper} title={logo.name}>
                    <img src={logo.src} alt={logo.name} className={styles.partnerLogoImg} />
                  </div>
                ))}
              </div>
              <div className={styles.logoGroup}>
                {PARTNER_LOGOS.map((logo, idx) => (
                  <div key={`dup-${idx}`} className={styles.partnerLogoWrapper} title={logo.name}>
                    <img src={logo.src} alt={logo.name} className={styles.partnerLogoImg} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Company Overview / About Us */}
      <section className={styles.aboutSection} aria-label="Company Overview">
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutContent} scroll-reveal-left`}>
            <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 35px 0" }}>
              <span className={styles.sectionSubtitle}>Company Overview</span>
              <h2 className={styles.sectionTitle}>About Us</h2>
              <div className={styles.sectionLine} style={{ margin: "0" }}></div>
            </div>
            
            <p className={styles.aboutText}>
              True Valuators is a team of qualified and experienced professionals specializing in valuation services across multiple asset classes and business domains.
            </p>

            <h3 className={styles.associationTitleText}>Our professionals are associated with:</h3>
            <ul className={styles.associationList}>
              <li className={styles.associationItem}>
                <div className={styles.checkmarkWrapper}>
                  <svg className={styles.checkmarkIcon} viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span>Institution of Valuers (IOV)</span>
              </li>
              <li className={styles.associationItem}>
                <div className={styles.checkmarkWrapper}>
                  <svg className={styles.checkmarkIcon} viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span>Institution of Engineers</span>
              </li>
              <li className={styles.associationItem}>
                <div className={styles.checkmarkWrapper}>
                  <svg className={styles.checkmarkIcon} viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span>Insolvency and Bankruptcy Board of India (IBBI)</span>
              </li>
            </ul>

            <p className={styles.aboutTextHighlight}>
              We provide accurate, transparent, and reliable valuation solutions backed by professional expertise and industry standards.
            </p>

            <Link href="/about" className={styles.ctaButton}>
              Read More About Us
            </Link>
          </div>

          <div className={`${styles.aboutVisual} scroll-reveal-right`}>
            <div className={styles.glowBackdrop}>
              <div className={styles.glowCircle1}></div>
              <div className={styles.glowCircle2}></div>
            </div>
            
            <div className={styles.imageFrame}>
              <img src="/images/hero section/2.png" alt="True Valuators Inspection Survey" className={styles.visualImage} />
            </div>

            <div className={styles.floatingBadge}>
              <span className={styles.badgeValue}>10+ Years</span>
              <span className={styles.badgeLabel}>Combined Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bento Grid Core Values */}
      <section className={styles.valuesSection} aria-label="Our Core Values">
        <div className={`${styles.sectionHeader} scroll-reveal`}>
          <span className={styles.sectionSubtitle}>True Values</span>
          <h2 className={styles.sectionTitle}>Built on Unshakable Principles</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={`${styles.bentoGrid} perspective-container`}>
          {VALUES_DATA.map((value, idx) => (
            <div 
              key={idx} 
              className={`${styles.bentoCard} ${getBentoShapeClass(idx)} perspective-card scroll-reveal`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={styles.cardBgGlow}></div>
              <div className={styles.bentoIcon}>
                {renderValueIcon(value.icon)}
              </div>
              <div className={styles.bentoTextWrap}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Asymmetrical Live Metrics */}
      <section className={styles.metricsSection} aria-label="Business Metrics">
        <div className={styles.stripeBackground}></div>
        <div className={`${styles.metricsGrid} perspective-container`}>
          <div className={`${styles.metricCard} perspective-card scroll-reveal`}>
            <span className={styles.metricValue}>95%</span>
            <div className={styles.metricLabel}>Valuation Accuracy</div>
          </div>
          <div className={`${styles.metricCard} perspective-card scroll-reveal`} style={{ transitionDelay: "150ms" }}>
            <span className={styles.metricValue}>2,000+</span>
            <div className={styles.metricLabel}>Trusted Clients</div>
          </div>
          <div className={`${styles.metricCard} perspective-card scroll-reveal`} style={{ transitionDelay: "300ms" }}>
            <span className={styles.metricValue}>10+</span>
            <div className={styles.metricLabel}>Bank Partners</div>
          </div>
          <div className={`${styles.metricCard} perspective-card scroll-reveal`} style={{ transitionDelay: "450ms" }}>
            <span className={styles.metricValue}>98%</span>
            <div className={styles.metricLabel}>On Time Delivery</div>
          </div>
        </div>
      </section>

      {/* 5. Contact Gateway HUD */}
      <section className={styles.contactGateway} aria-label="Quick Contact gateway">
        <div className={styles.gatewayGrid}>
          <div className={`${styles.infoCol} scroll-reveal-left`}>
            <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 35px 0" }}>
              <span className={styles.sectionSubtitle}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>Let&apos;s Draft Your Audit Plan</h2>
              <div className={styles.sectionLine} style={{ margin: "0" }}></div>
            </div>
            <p className={styles.gatewayText}>
              Connect with our government registered quality auditors to arrange property evaluations, mortgage compliance checks, or statutory objections.
            </p>
            <div className={styles.contactsList}>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Phone</span>
                <a href={`tel:${OFFICE_CONTACTS.madurai.phone}`} className={styles.contactLink}>
                  +91 {OFFICE_CONTACTS.madurai.phone.replace("-", " ")} (Madurai)
                </a>
                <a href={`tel:${OFFICE_CONTACTS.chennai.phone}`} className={styles.contactLink}>
                  +91 {OFFICE_CONTACTS.chennai.phone.replace("-", " ")} (Chennai)
                </a>
              </div>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Email</span>
                <a href={`mailto:${OFFICE_CONTACTS.madurai.email}`} className={styles.contactLink}>
                  {OFFICE_CONTACTS.madurai.email}
                </a>
                <a href={`mailto:${OFFICE_CONTACTS.chennai.email}`} className={styles.contactLink}>
                  {OFFICE_CONTACTS.chennai.email}
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles.formCol} scroll-reveal-right`}>
            <h3 className={styles.sectionTitle} style={{ fontSize: "24px", marginBottom: "35px" }}>
              Schedule Inspector
            </h3>
            {isSubmitted ? (
              <div style={{ color: "var(--accent-gold)", fontWeight: 600, padding: "20px", textAlign: "center" }}>
                ✓ Thank you! Your booking request has been successfully received. We will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className={styles.inputField}
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={styles.inputField}
                      value={formState.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      className={styles.inputField}
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="address"
                      placeholder="Property Address / Location"
                      className={styles.inputField}
                      value={formState.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroupFull}>
                    <textarea
                      name="message"
                      placeholder="Message / Valuation Scope (e.g. Loan eligibility, stage valuation, capital gains tax)"
                      className={styles.textareaField}
                      value={formState.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Request Inspection Schedule
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

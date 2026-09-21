import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  CalendarDays,
  BadgeCheck,
  HardHat,
  ShieldCheck,
  Target,
  Eye,
  ArrowRight,
  UserRound
} from 'lucide-react';

import './About.css';

const companyFacts = [
  { label: 'Established', value: '2020', Icon: CalendarDays },
  { label: 'PEC Category', value: 'C-2', Icon: BadgeCheck },
  { label: 'Company Type', value: 'Govt. Contractor', Icon: Building2 }
];

export default function About() {
  const [activeFact, setActiveFact] = useState(0);
  const [factsPaused, setFactsPaused] = useState(false);

  useEffect(() => {
    if (factsPaused) return;
    const timer = setInterval(() => {
      setActiveFact((current) => (current + 1) % companyFacts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [factsPaused]);

  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
      <section className="about-page-hero">
        <div className="about-hero-shape about-hero-shape-left"></div>
        <div className="about-hero-shape about-hero-shape-right"></div>

        <div className="about-hero-lines about-hero-lines-left">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="about-hero-lines about-hero-lines-right">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="about-hero-grid"></div>

        <div className="container about-hero-content">

          <span className="about-page-label">
            About Our Company
          </span>

          <h1 className="banner-title">
            Engineering with
            <span> Quality, Trust & Responsibility.</span>
          </h1>

          <p>
            M/S Advance Engineering Company is a government contracting
            and engineering firm established in Rahim Yar Khan, Pakistan,
            delivering professional construction and engineering solutionsfor public-sector, institutional and commercial projects.

          </p>


          <div className="about-facts" role="region" aria-label="Company facts">
            <div className="about-facts-stage" aria-live={factsPaused ? 'polite' : 'off'}>
              {companyFacts.map(({ label, value, Icon }, index) => (
                <div key={label} className={`about-fact${activeFact === index ? ' is-active' : ''}`} aria-hidden={activeFact !== index}>
                  <Icon className="about-fact-icon" size={32} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <span className="about-fact-label">{label}</span>
                    <strong className="about-fact-value">{value}</strong>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-facts-controls">
              <span className="about-facts-count" aria-hidden="true">0{activeFact + 1} / 03</span>
              <button type="button" onClick={() => setFactsPaused((paused) => !paused)} aria-label={factsPaused ? 'Resume company facts' : 'Pause company facts'}>
                {factsPaused ? 'Play' : 'Pause'}
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ================= COMPANY INTRO ================= */}
      <section className="about-company section">
        <div className="container about-company-grid">

          {/* LEFT */}
          <div data-reveal="auto" className="about-company-content">

            <span className="section-label">
              Who We Are
            </span>

            <h2 className="section-title single-line-heading">
              Building reliable solutions
              <span> since 2020.</span>
            </h2>

            <p>
              Advance Engineering Company is a professional government
              contracting firm incorporated in Rahim Yar Khan in 2020.
              The company focuses on delivering dependable engineering,
              construction and infrastructure solutions through structured
              planning, professional execution and quality-focused project
              management.
            </p>

            <p>
              Our aim is to build long-term relationships with government,
              institutional and commercial clients by maintaining high
              standards of workmanship, accountability, safety and timely
              project delivery.
            </p>

            <div className="about-company-points">

              <div>
                <BadgeCheck size={20} />
                <span>PEC Registered Contractor</span>
              </div>

              <div>
                <HardHat size={20} />
                <span>Government Contracting Experience</span>
              </div>

              <div>
                <ShieldCheck size={20} />
                <span>Quality & Compliance Focused</span>
              </div>

              <div>
                <Building2 size={20} />
                <span>Engineering & Construction Services</span>
              </div>

            </div>

            <Link to="/projects" className="about-project-btn">
              Explore Our Projects
              <ArrowRight size={18} />
            </Link>

          </div>


          {/* RIGHT */}
          <div data-reveal="auto" className="about-company-card">

            <div className="about-company-card-icon">
              <Building2 size={38} />
            </div>

            <span>
              Advance Engineering Company
            </span>

            <h3>
              Professional Government Contractor
            </h3>

            <p>
              Delivering engineering and construction solutions with
              professional coordination, responsible execution and
              commitment to project quality.
            </p>

            <div className="about-company-card-line"></div>

            <strong>
              Rahim Yar Khan, Pakistan
            </strong>

          </div>

        </div>
      </section>


      {/* ================= COMPANY INFO ================= */}
      <section className="company-info-section section">
        <div className="container">

          <div data-reveal="auto" className="company-info-heading">
            <span className="section-label">
              Company Information
            </span>

            <h2 className="section-title">
              Registered & Established
            </h2>

            <p>
              Key business and registration information for
              Advance Engineering Company.
            </p>
          </div>


          <div className="company-info-grid">

            <div data-reveal="auto" className="company-info-card">
              <Building2 size={25} />

              <span>Company Name</span>

              <h3>
                M/S Advance Engineering Company
              </h3>
            </div>


            <div data-reveal="auto" className="company-info-card">
              <HardHat size={25} />

              <span>Organization Type</span>

              <h3>
                Government Contractor
              </h3>
            </div>


            <div data-reveal="auto" className="company-info-card">
              <CalendarDays size={25} />

              <span>Established</span>

              <h3>
                2020
              </h3>
            </div>


            <div data-reveal="auto" className="company-info-card">
              <MapPin size={25} />

              <span>Place of Registration</span>

              <h3>
                Rahim Yar Khan
              </h3>
            </div>


            <div data-reveal="auto" className="company-info-card">
              <BadgeCheck size={25} />

              <span>PEC Category</span>

              <h3>
                C-2
              </h3>
            </div>


            <div data-reveal="auto" className="company-info-card">
              <BadgeCheck size={25} />

              <span>PEC Registration No.</span>

              <h3>
                2905
              </h3>
            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="mission-section section">
        <div className="container mission-grid">

          <div data-reveal="auto" className="mission-card">

            <div className="mission-icon">
              <Target size={32} />
            </div>

            <span>Our Mission</span>

            <h2>
              Deliver dependable engineering solutions.
            </h2>

            <p>
              Our mission is to provide quality construction and engineering
              services through professional planning, responsible project
              execution, skilled coordination and commitment to client
              requirements.
            </p>

          </div>


          <div data-reveal="auto" className="mission-card vision-card">

            <div className="mission-icon">
              <Eye size={32} />
            </div>

            <span>Our Vision</span>

            <h2>
              Build lasting value through engineering excellence.
            </h2>

            <p>
              Our vision is to become a trusted engineering and contracting
              company recognized for quality, reliability, professionalism
              and successful delivery of public-sector and infrastructure
              projects.
            </p>

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="values-section section">
        <div className="container">

          <div data-reveal="auto" className="values-heading">
            <span className="section-label">
              Our Core Values
            </span>

            <h2 className="section-title">
              The principles behind our work.
            </h2>
          </div>


          <div className="values-grid">

            <div data-reveal="auto" className="value-card">
              <span>01</span>
              <h3>Integrity</h3>
              <p>
                We believe in responsible, transparent and professional
                business practices.
              </p>
            </div>

            <div data-reveal="auto" className="value-card">
              <span>02</span>
              <h3>Quality</h3>
              <p>
                We focus on workmanship, technical standards and reliable
                project execution.
              </p>
            </div>

            <div data-reveal="auto" className="value-card">
              <span>03</span>
              <h3>Safety</h3>
              <p>
                We promote safe working practices throughout project
                execution.
              </p>
            </div>

            <div data-reveal="auto" className="value-card">
              <span>04</span>
              <h3>Accountability</h3>
              <p>
                We take responsibility for our commitments and project
                performance.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= LEADERSHIP ================= */}
      <section className="leadership-section section">
        <div className="container leadership-grid">

          <div data-reveal="auto" className="leadership-content">

            <span className="section-label">
              Leadership
            </span>

            <h2 className="section-title">
              Experienced leadership.
              Professional execution.
            </h2>

            <p>
              Advance Engineering Company is led by management focused on
              disciplined project execution, business development and
              dependable engineering services.
            </p>

          </div>


          <div data-reveal="auto" className="director-card">

            <div className="director-icon">
              <UserRound size={38} />
            </div>

            <div>
              <span>Managing Partner</span>

              <h3>
                Hafiz Muhammad Afzal Javed
              </h3>

              <p>
                Advance Engineering Company
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= ADDRESS CTA ================= */}
      <section className="about-contact-section">
        <div className="container about-contact-inner">

          <div data-reveal="left">
            <span>
              Head Office
            </span>

            <h2>
              Based in Rahim Yar Khan, Pakistan.
            </h2>

            <p>
              House No. 1, Street 3, Bankers Street,
              Church Road, Rahim Yar Khan.
            </p>
          </div>

          <Link to="/contact" data-reveal="right">
            Contact Our Team
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}

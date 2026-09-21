import {
  Award,
  BadgeCheck,
  Building2,
  FileCheck2,
  ShieldCheck,
  Download
} from 'lucide-react';

import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Pakistan Engineering Council Registration',
    organization: 'Pakistan Engineering Council',
    description:
      'Registered engineering and contracting capabilities for approved construction and engineering categories.',
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: 'Company Registration',
    organization: 'Relevant Corporate Authority',
    description:
      'Registered business entity operating under applicable corporate and commercial requirements.',
    icon: Building2,
  },
  {
    id: 3,
    title: 'Tax Registration',
    organization: 'Relevant Tax Authority',
    description:
      'Registered for applicable taxation and statutory business requirements.',
    icon: FileCheck2,
  },
  {
    id: 4,
    title: 'Quality & Compliance',
    organization: 'Internal / Project Standards',
    description:
      'Structured quality control, safety procedures and compliance-focused project execution.',
    icon: ShieldCheck,
  },
];

const specializationCodes = [
  {
    code: 'CE01',
    title: 'Roads & Pavements',
  },
  {
    code: 'CE09',
    title: 'Sewerage & Water Supply',
  },
  {
    code: 'CE10',
    title: 'General Civil Engineering',
  },
  {
    code: 'ME01',
    title: 'HVAC Systems',
  },
  {
    code: 'EE04',
    title: 'Low Voltage Installation',
  },
  {
    code: 'EE09',
    title: 'IT & Software Engineering',
  },
];

export default function Certifications() {
  return (
    <main className="certifications-page">

      {/* PAGE HERO */}
      {/* <section className="certifications-hero">
        <div className="container">
          <span className="certifications-label">
            Credentials & Compliance
          </span>

          <h1 className="banner-title">
            Registered. Qualified.
            <span> Built for Professional Delivery.</span>
          </h1>

          <p>
            Advance Engineering Company maintains professional registrations,
            technical capabilities and compliance standards to support
            government, institutional and commercial projects.
          </p>
        </div>
      </section> */}

      {/* CERTIFICATION CARDS */}
      <section className="certifications-section section">
        <div className="container">

          <div data-reveal="auto" className="certifications-heading">
            <span className="section-label">
              Our Credentials
            </span>

            <h2 className="section-title single-line-heading">
              Certifications & Registrations
            </h2>

            <p>
              Our registrations and professional credentials reflect our
              commitment to structured, compliant and reliable project delivery.
            </p>
          </div>

          <div className="certification-grid">
            {certifications.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  data-reveal="auto" className="certification-card"
                  key={item.id}
                >
                  <div className="certification-icon">
                    <Icon size={30} />
                  </div>

                  <span>{item.organization}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button className="certification-link">
                    View Details
                  </button>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* SPECIALIZATION CODES */}
      <section className="specializations-section section">
        <div className="container">

          <div data-reveal="auto" className="specialization-header">
            <div>
              <span className="section-label">
                Engineering Capabilities
              </span>

              <h2 className="section-title">
                Registered Specialization Categories
              </h2>
            </div>

            <p>
              These categories should be replaced with the company's exact
              approved registration codes before the website goes live.
            </p>
          </div>

          <div className="specialization-grid">
            {specializationCodes.map((item) => (
              <div
                data-reveal="auto" className="specialization-card"
                key={item.code}
              >
                <div className="specialization-code">
                  {item.code}
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>
                    Professional engineering and contracting capability within
                    this specialization category.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* QUALITY / COMPLIANCE */}
      <section className="compliance-section section">
        <div className="container compliance-grid">

          <div data-reveal="auto" className="compliance-content">
            <span className="section-label">
              Quality & Compliance
            </span>

            <h2>
              Professional standards throughout every project.
            </h2>

            <p>
              Our project approach focuses on quality control, responsible site
              execution, technical compliance and clear project coordination
              from planning through completion.
            </p>

            <div className="compliance-points">

              <div>
                <ShieldCheck size={21} />
                <span>Quality-focused execution</span>
              </div>

              <div>
                <ShieldCheck size={21} />
                <span>Health & safety awareness</span>
              </div>

              <div>
                <ShieldCheck size={21} />
                <span>Applicable regulatory compliance</span>
              </div>

              <div>
                <ShieldCheck size={21} />
                <span>Project documentation & reporting</span>
              </div>

            </div>
          </div>

          <div data-reveal="auto" className="compliance-card">
            <Award size={45} />

            <span>
              Professional Credentials
            </span>

            <h3>
              Supporting reliable engineering and contracting delivery.
            </h3>
          </div>

        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="company-profile-cta">
        <div className="container company-profile-inner">

          <div data-reveal="left">
            <span>Company Documentation</span>

            <h2>
              Need our complete company profile?
            </h2>

            <p>
              Download the company profile for business introductions,
              procurement reviews and project discussions.
            </p>
          </div>

          <a
            href="/documents/company-profile.pdf"
            data-reveal="right" className="profile-download-btn"
            download
          >
            <Download size={19} />
            Download Company Profile
          </a>

        </div>
      </section>

    </main>
  );
}

import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
  Building2,
  CheckCircle2,
  BriefcaseBusiness
} from 'lucide-react';

import './ProjectDetails.css';
import servicesHeroImage from '../assets/images/services/Services-hero.webp';

const projects = [
  {
    id: '1',
    title: 'Government Office Construction',
    category: 'Civil Works',
    location: 'Lahore',
    year: '2025',
    client: 'Government Department',
    status: 'Completed',
    image: '/images/project-1.jpg',

    overview:
      'A complete civil construction and finishing project executed for a government office facility with a strong focus on quality, safety and timely completion.',

    scope: [
      'Civil construction works',
      'Structural and masonry works',
      'Electrical installation',
      'Plumbing works',
      'Interior finishing',
      'External development'
    ],

    challenge:
      'The project required close coordination between multiple engineering disciplines while maintaining quality standards and meeting the approved project schedule.',

    solution:
      'Advance Engineering Company implemented structured project planning, continuous site supervision, quality inspections and coordinated execution across civil, electrical and finishing teams.',

    outcome:
      'The project was completed successfully according to the required specifications with a focus on workmanship, safety and reliable project delivery.'
  }
];

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="project-not-found section">
        <div className="container">
          <h1>Project not found</h1>

          <Link to="/projects">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="project-details-page">

      {/* HERO */}
      <section
        className="project-detail-hero"
        style={{
          backgroundImage: `url(${servicesHeroImage})`
        }}
      >
        <div className="container">

          <Link to="/projects" className="back-projects">
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <span className="project-detail-category">
            {project.category}
          </span>

          <h1 className="banner-title"><span>{project.title}</span></h1>

          <p>{project.overview}</p>

          <div className="project-detail-meta">
            <span>
              <MapPin size={18} />
              {project.location}
            </span>

            <span>
              <CalendarDays size={18} />
              {project.year}
            </span>

            <span>
              <BriefcaseBusiness size={18} />
              {project.status}
            </span>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="project-detail-content section">
        <div className="container project-detail-grid">

          {/* LEFT CONTENT */}
          <div className="project-main-content">

            <div data-reveal="auto" className="project-detail-block">
              <span className="section-label">
                Project Overview
              </span>

              <h2>
                Delivering professional engineering solutions
              </h2>

              <p>{project.overview}</p>
            </div>

            <div data-reveal="auto" className="project-detail-block">
              <span className="section-label">
                Scope of Work
              </span>

              <h2>
                Project Scope
              </h2>

              <div className="scope-list">
                {project.scope.map((item, index) => (
                  <div className="scope-item" key={index}>
                    <CheckCircle2 size={19} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="auto" className="project-detail-block">
              <span className="section-label">
                Project Challenge
              </span>

              <h2>
                Understanding the requirements
              </h2>

              <p>{project.challenge}</p>
            </div>

            <div data-reveal="auto" className="project-detail-block">
              <span className="section-label">
                Our Solution
              </span>

              <h2>
                Structured project execution
              </h2>

              <p>{project.solution}</p>
            </div>

            <div data-reveal="auto" className="project-detail-block">
              <span className="section-label">
                Final Outcome
              </span>

              <h2>
                Reliable delivery and quality workmanship
              </h2>

              <p>{project.outcome}</p>
            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="project-sidebar">

            <div data-reveal="auto" className="project-info-card">
              <div className="project-info-icon">
                <Building2 size={30} />
              </div>

              <h3>Project Information</h3>

              <div className="project-info-row">
                <span>Client</span>
                <strong>{project.client}</strong>
              </div>

              <div className="project-info-row">
                <span>Category</span>
                <strong>{project.category}</strong>
              </div>

              <div className="project-info-row">
                <span>Location</span>
                <strong>{project.location}</strong>
              </div>

              <div className="project-info-row">
                <span>Completion</span>
                <strong>{project.year}</strong>
              </div>

              <div className="project-info-row">
                <span>Status</span>
                <strong>{project.status}</strong>
              </div>
            </div>

            <div data-reveal="auto" className="project-contact-card">
              <span>Have a similar project?</span>

              <h3>
                Let's discuss your engineering requirements.
              </h3>

              <Link to="/contact">
                Request Consultation
              </Link>
            </div>

          </aside>

        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="project-gallery-section section">
        <div className="container">

          <span className="section-label">
            Project Gallery
          </span>

          <h2 className="section-title">
            Project Highlights
          </h2>

          <div data-reveal="auto" className="project-gallery">
            <img
              src="/images/project-1.jpg"
              alt="Project work"
            />

            <img
              src="/images/project-2.jpg"
              alt="Project work"
            />

            <img
              src="/images/project-3.jpg"
              alt="Project work"
            />
          </div>

        </div>
      </section>

    </main>
  );
}

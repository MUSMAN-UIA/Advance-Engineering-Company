import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Building2,
  ShieldCheck,
  ClipboardCheck
} from 'lucide-react';

import './ServiceDetails.css';
import servicesHeroImage from '../assets/images/services/Services-hero.webp';

const services = [
  {
    slug: 'civil-engineering',
    title: 'Civil Engineering Works',
    category: 'Civil Engineering',
    image: '/images/services/civil-engineering.jpg',

    overview:
      'Advance Engineering Company provides professional civil engineering services for government, institutional and commercial projects, with a focus on reliable execution, quality workmanship and structured project delivery.',

    capabilities: [
      'General civil engineering works',
      'Concrete repairs',
      'Structural maintenance',
      'Site development',
      'Landscaping and external works',
      'Waterproofing',
      'Building maintenance',
      'Infrastructure support works'
    ],

    process:
      'Our civil engineering projects are planned and executed through structured site coordination, supervision, quality control and project documentation.',

    quality:
      'We focus on safe execution, material quality, technical compliance and reliable completion according to project requirements.'
  },

  {
    slug: 'road-infrastructure',
    title: 'Road & Infrastructure Works',
    category: 'Infrastructure',
    image: '/images/services/road-infrastructure.jpg',

    overview:
      'We provide road and infrastructure solutions including pavements, drainage systems, retaining structures and associated civil engineering works.',

    capabilities: [
      'Road construction',
      'Pavement works',
      'Drainage systems',
      'Retaining structures',
      'Earthworks',
      'Site grading',
      'Road rehabilitation',
      'Infrastructure development'
    ],

    process:
      'Projects are executed through controlled earthworks, construction sequencing, site supervision and quality inspections.',

    quality:
      'Our infrastructure approach prioritizes durability, safety, proper drainage and dependable project execution.'
  },

  {
    slug: 'building-construction',
    title: 'Building Construction',
    category: 'Building Works',
    image: '/images/services/building-construction.jpg',

    overview:
      'Advance Engineering Company delivers building construction solutions for government, institutional, commercial and specialized facilities.',

    capabilities: [
      'Building construction',
      'Structural works',
      'Masonry works',
      'Finishing works',
      'Renovation works',
      'Building maintenance',
      'External development',
      'Project coordination'
    ],

    process:
      'Our team coordinates civil, electrical, mechanical and finishing activities to maintain smooth project delivery.',

    quality:
      'We maintain a strong focus on workmanship, site safety and compliance with approved project requirements.'
  },

  {
    slug: 'water-sewerage',
    title: 'Water Supply & Sewerage',
    category: 'Civil Engineering',
    image: '/images/services/water-sewerage.jpg',

    overview:
      'We provide water supply, sewerage and drainage infrastructure solutions for public-sector, institutional and commercial developments.',

    capabilities: [
      'Water supply networks',
      'Sewerage systems',
      'Drainage systems',
      'Pipeline installation',
      'Excavation works',
      'Testing and inspection',
      'Repair works',
      'Infrastructure maintenance'
    ],

    process:
      'Work is executed through proper alignment, excavation planning, pipeline installation, testing and controlled backfilling.',

    quality:
      'Our focus is on reliable system performance, proper installation and long-term infrastructure durability.'
  },

  {
    slug: 'electrical-engineering',
    title: 'Electrical Engineering',
    category: 'Electrical Works',
    image: '/images/services/electrical.jpg',

    overview:
      'We provide professional electrical engineering services for buildings, infrastructure and institutional facilities.',

    capabilities: [
      'Low voltage installation',
      'High voltage installation',
      'Lighting systems',
      'Electrical panels',
      'Power distribution',
      'Cable installation',
      'Testing and commissioning',
      'Electrical maintenance'
    ],

    process:
      'Electrical projects are coordinated with civil and mechanical services and completed through structured installation and testing procedures.',

    quality:
      'We focus on electrical safety, reliable installation, proper testing and system performance.'
  },

  {
    slug: 'mechanical-hvac',
    title: 'Mechanical & HVAC',
    category: 'Mechanical Works',
    image: '/images/services/hvac.jpg',

    overview:
      'Advance Engineering Company provides HVAC and specialized mechanical system installation for public, institutional and commercial facilities.',

    capabilities: [
      'HVAC installation',
      'Ventilation systems',
      'Air conditioning systems',
      'Mechanical equipment installation',
      'Ducting works',
      'Testing and commissioning',
      'System maintenance',
      'Mechanical coordination'
    ],

    process:
      'Mechanical works are coordinated with building services to achieve efficient installation, testing and commissioning.',

    quality:
      'Our goal is dependable system performance, efficient operation and professional mechanical installation.'
  }
];

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <section className="service-not-found section">
        <div className="container">
          <h1>Service not found</h1>

          <Link to="/services">
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="service-details-page">

      <section
        className="service-detail-hero"
        style={{
          backgroundImage: `url(${servicesHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">

          <Link
            to="/services"
            className="service-back-link"
          >
            <ArrowLeft size={17} />
            Back to Services
          </Link>

          <span className="service-detail-category">
            {service.category}
          </span>

          <h1 className="banner-title">
            <span>{service.title}</span>
          </h1>

          <p>
            {service.overview}
          </p>

        </div>
      </section>

      <section className="service-detail-section section">
        <div className="container service-detail-grid">

          <div className="service-detail-main">

            <div data-reveal="auto" className="service-detail-block">
              <span className="section-label">
                Service Overview
              </span>

              <h2 className="single-line-heading">
                Professional engineering support
                from planning to completion.
              </h2>

              <p>
                {service.overview}
              </p>
            </div>

            <div data-reveal="auto" className="service-detail-block">

              <span className="section-label">
                Our Capabilities
              </span>

              <h2>
                Scope of Services
              </h2>

              <div className="service-capability-grid">
                {service.capabilities.map(
                  (item, index) => (
                    <div
                      className="service-capability-item"
                      key={index}
                    >
                      <CheckCircle2 size={19} />

                      <span>
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>

            </div>

            <div data-reveal="auto" className="service-detail-block">

              <span className="section-label">
                Our Process
              </span>

              <h2>
                Structured project execution
              </h2>

              <p>
                {service.process}
              </p>

            </div>

            <div data-reveal="auto" className="service-detail-block">

              <span className="section-label">
                Quality & Compliance
              </span>

              <h2>
                Focused on quality, safety
                and reliable delivery.
              </h2>

              <p>
                {service.quality}
              </p>

            </div>

          </div>

          <aside className="service-detail-sidebar">

            <div data-reveal="auto" className="service-sidebar-card">

              <div className="service-sidebar-icon">
                <Building2 size={30} />
              </div>

              <span>
                Advance Engineering Company
              </span>

              <h3>
                Need this service for your project?
              </h3>

              <p>
                Contact our team to discuss your
                project requirements and scope.
              </p>

              <Link to="/contact">
                Request Consultation
              </Link>

            </div>

            <div data-reveal="auto" className="service-benefit-card">

              <div>
                <ShieldCheck size={21} />
                <span>
                  Quality-focused execution
                </span>
              </div>

              <div>
                <ClipboardCheck size={21} />
                <span>
                  Structured project management
                </span>
              </div>

              <div>
                <CheckCircle2 size={21} />
                <span>
                  Reliable project delivery
                </span>
              </div>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}

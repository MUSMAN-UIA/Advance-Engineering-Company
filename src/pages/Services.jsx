import {
  Building2,
  Construction,
  Route,
  Droplets,
  Zap,
  Fan,
  ShieldCheck,
  RadioTower,
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';

import { Link } from 'react-router-dom';
import './Services.css';
import service1Image from '../assets/images/services/Civil Engineering Works.webp';
import service2Image from '../assets/images/services/Road & Infrastructure Works.webp';
import service3Image from '../assets/images/services/Civil Engineering Works.webp';
import service4Image from '../assets/images/services/Water Supply & Sewerage.webp';
import service5Image from '../assets/images/services/Electrical Engineering.webp';
import service6Image from '../assets/images/services/Mechanical & HVAC.webp';

const services = [
  {
    id: 1,
    title: 'Civil Engineering Works',
    slug: 'civil-engineering',
    image: service1Image,
    icon: Construction,
    description:
      'Professional civil engineering solutions including structural works, concrete repairs, maintenance and site development.'
  },

  {
    id: 2,
    title: 'Road & Infrastructure Works',
    slug: 'road-infrastructure',
    image: service2Image,
    icon: Route,
    description:
      'Road construction, pavements, drainage, retaining structures and associated infrastructure development.'
  },

  {
    id: 3,
    title: 'Building Construction',
    slug: 'building-construction',
    image: service3Image,
    icon: Building2,
    description:
      'Construction and development of government, institutional, commercial and specialized building projects.'
  },

  {
    id: 4,
    title: 'Water Supply & Sewerage',
    slug: 'water-sewerage',
    image:service4Image,
    icon: Droplets,
    description:
      'Water supply networks, sewerage systems, drainage infrastructure and related civil engineering works.'
  },

  {
    id: 5,
    title: 'Electrical Engineering',
    slug: 'electrical-engineering',
    image: service5Image,
    icon: Zap,
    description:
      'Low and high voltage installations, lighting systems, power distribution and electrical engineering solutions.'
  },

  {
    id: 6,
    title: 'Mechanical & HVAC',
    slug: 'mechanical-hvac',
    image: service6Image,
    icon: Fan,
    description:
      'Heating, ventilation, air conditioning and specialized mechanical systems for modern facilities.'
  },

  // {
  //   id: 7,
  //   title: 'Security & Surveillance',
  //   slug: 'security-surveillance',
  //   image: '/images/services/security.jpg',
  //   icon: ShieldCheck,
  //   description:
  //     'Security, safety and surveillance system installation for government, institutional and commercial facilities.'
  // },

  // {
  //   id: 8,
  //   title: 'Telecommunication & IT',
  //   slug: 'telecommunication-it',
  //   image: '/images/services/telecommunication.jpg',
  //   icon: RadioTower,
  //   description:
  //     'Telecommunication infrastructure, external communication works, networking and IT engineering solutions.'
  // },

  // {
  //   id: 9,
  //   title: 'Project Management',
  //   slug: 'project-management',
  //   image: '/images/services/project-management.jpg',
  //   icon: ClipboardCheck,
  //   description:
  //     'Structured project planning, coordination, supervision, quality control and efficient engineering project execution.'
  // }
];

export default function Services() {
  return (
    <main className="services-page">

      {/* PAGE HERO */}
      {/* <section className="services-hero">
        <div className="container">
          <span className="services-hero-label">
            What We Do
          </span>

          <h1 className="banner-title">
            Engineering Services
            <span> Built for Excellence.</span>
          </h1>

          <p>
            Advance Engineering Company provides professional engineering,
            construction and infrastructure solutions for government,
            institutional and commercial projects.
          </p>
        </div>
      </section> */}

      {/* SERVICES */}
      <section className="services-section">
        <div className="container">

          <div data-reveal="auto" className="services-heading">
            <span className="section-label">
              Our Capabilities
            </span>

            <h2>
              Professional Engineering
              <span> Solutions</span>
            </h2>

            <p>
              Explore our core services designed to support reliable,
              efficient and professionally executed engineering projects.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  data-reveal="auto" className="service-card"
                  key={service.id}
                >
                  <span className="catalog-corner-lines" aria-hidden="true" />

                  {/* IMAGE */}
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={service.title}
                    />

                    <div className="service-image-overlay"></div>
                  </div>

                  {/* ICON */}
                  <div className="service-icon">
                    <Icon size={30} />
                  </div>

                  {/* CONTENT */}
                  <div className="service-content">
                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                    <Link
                      to={`/services/${service.slug}`}
                      className="service-link"
                    >
                      Learn More

                      <ArrowRight size={17} />
                    </Link>
                  </div>

                </article>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}

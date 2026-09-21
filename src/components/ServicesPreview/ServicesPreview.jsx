import {
  Building2,
  Construction,
  Route,
  Droplets,
  Zap,
  Fan,
  ArrowRight
} from 'lucide-react';

import { Link } from 'react-router-dom';

import './ServicesPreview.css';
import '../../pages/Services.css';
// import service1Image from '../../assets/images/services/Civil Engineering Works.webp';
import service2Image from '../../assets/images/services/Road & Infrastructure Works.webp';
import service3Image from '../../assets/images/services/Civil Engineering Works.webp';
import service4Image from '../../assets/images/services/Water Supply & Sewerage.webp';
// import service5Image from '../../assets/images/services/Electrical Engineering.webp';
// import service6Image from '../../assets/images/services/Mechanical & HVAC.webp';

const services = [
  {
    id: 1,
    title: 'Civil Engineering Works',
    slug: 'civil-engineering',
    image: service3Image,
    icon: Construction,
    description:
      'Professional civil engineering solutions including structural works, maintenance and site development.'
  },
  {
    id: 2,
    title: 'Road & Infrastructure Works',
    slug: 'road-infrastructure',
    image: service2Image,
    icon: Route,
    description:
      'Road construction, pavements, drainage, retaining structures and infrastructure development.'
  },
  // {
  //   id: 3,
  //   title: 'Building Construction',
  //   slug: 'building-construction',
  //   image: '/images/services/building-construction.jpg',
  //   icon: Building2,
  //   description:
  //     'Construction and development of government, institutional and commercial building projects.'
  // },
  {
    id: 4,
    title: 'Water Supply & Sewerage',
    slug: 'water-sewerage',
    image: service4Image,
    icon: Droplets,
    description:
      'Water supply networks, sewerage systems, drainage infrastructure and associated civil works.'
  },
  // {
  //   id: 5,
  //   title: 'Electrical Engineering',
  //   slug: 'electrical-engineering',
  //   image: '/images/services/electrical.jpg',
  //   icon: Zap,
  //   description:
  //     'Electrical installation, lighting, power distribution and building electrical systems.'
  // },
  // {
  //   id: 6,
  //   title: 'Mechanical & HVAC',
  //   slug: 'mechanical-hvac',
  //   image: '/images/services/hvac.jpg',
  //   icon: Fan,
  //   description:
  //     'Heating, ventilation, air conditioning and specialized mechanical engineering systems.'
  // }
];

export default function ServicesPreview() {
  return (
    <section className="services-preview catalog-services section">
      <div className="container">

        <div className="services-preview-header">
          <div data-reveal="left">
            <span className="section-label">
              What We Do
            </span>

            <h2 className="section-title">
              Our Engineering
              <span> Services</span>
            </h2>

            <p>
              Professional engineering and construction solutions designed
              for government, institutional and commercial projects.
            </p>
          </div>

          <Link
            to="/services"
            data-reveal="right" className="services-view-all"
          >
            View All Services

            <ArrowRight size={18} />
          </Link>
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

                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-image-overlay"></div>
                </div>

                <div className="service-icon">
                  <Icon size={30} />
                </div>

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

        <div data-reveal="auto" className="services-preview-mobile-button">
          <Link
            to="/services"
            className="services-view-all"
          >
            View All Services

            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

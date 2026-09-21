import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  CalendarDays
} from 'lucide-react';

import './ProjectsPreview.css';
import '../../pages/Projects.css';
import project1Image from '../../assets/images/project-1.webp';
import project2Image from '../../assets/images/Road & Drainage Infrastructure.webp';
import project3Image from '../../assets/images/Electrical Engineering.webp';

const projects = [
  {
    id: 1,
    title: 'Government Office Construction',
    category: 'Civil Works',
    location: 'Lahore',
    year: '2025',
    image: project1Image
  },
  {
    id: 2,
    title: 'Road & Drainage Infrastructure',
    category: 'Infrastructure',
    location: 'Punjab',
    year: '2024',
    image: project2Image
  },
  {
    id: 3,
    title: 'Electrical Installation Project',
    category: 'Electrical',
    location: 'Islamabad',
    year: '2024',
    image: project3Image
  }
];

export default function ProjectsPreview() {
  return (
    <section className="projects-preview catalog-projects section">
      <div className="container">

        <div className="projects-preview-header">
          <div data-reveal="left">
            <span className="section-label">
              Featured Work
            </span>

            <h2 className="section-title">
              Projects That Show
              <span> Our Capability</span>
            </h2>

            <p>
              Selected engineering and construction projects reflecting
              our approach to quality, coordination and dependable delivery.
            </p>
          </div>

          <Link
            to="/projects"
            data-reveal="right" className="projects-view-all"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              data-reveal="auto" className="project-card"
              key={project.id}
            >
              <span className="catalog-corner-lines" aria-hidden="true" />

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />



                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <div className="project-meta">
                  <span>
                    <MapPin size={15} />
                    {project.location}
                  </span>

                  <span>
                    <CalendarDays size={15} />
                    {project.year}
                  </span>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="project-link"
                >
                  View Project
                  <ArrowRight size={16} />
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

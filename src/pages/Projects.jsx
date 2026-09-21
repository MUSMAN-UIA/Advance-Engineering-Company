import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CalendarDays, ArrowRight } from 'lucide-react';
import './Projects.css';
import project1Image from '../assets/images/project-1.webp';
import project2Image from '../assets/images/Road & Drainage Infrastructure.webp';
import project3Image from '../assets/images/HVAC & Mechanical Works.webp';
import project4Image from '../assets/images/Water Supply & Sewerage.webp';
import project5Image from '../assets/images/Security & Surveillance System.webp';   

const projectData = [
    {
        id: 1,
        title: 'Government Office Construction',
        category: 'Civil Works',
        location: 'Lahore',
        year: '2025',
        image: project1Image,
        description:
            'Complete civil construction and finishing works for a government office facility.',
    },
    {
        id: 2,
        title: 'Road & Drainage Infrastructure',
        category: 'Infrastructure',
        location: 'Punjab',
        year: '2024',
        image: project2Image,
        description:
            'Road development, pavement works, drainage systems and associated infrastructure.',
    },
    {
        id: 3,
        title: 'Electrical Installation Project',
        category: 'Electrical',
        location: 'Islamabad',
        year: '2024',
        image: project1Image,
        description:
            'Low-voltage electrical installation and building power distribution systems.',
    },
    {
        id: 4,
        title: 'HVAC & Mechanical Works',
        category: 'Mechanical',
        location: 'Lahore',
        year: '2023',
        image: project3Image,
        description:
            'HVAC installation and mechanical systems for an institutional facility.',
    },
    {
        id: 5,
        title: 'Water Supply & Sewerage',
        category: 'Civil Works',
        location: 'Punjab',
        year: '2023',
        image: project4Image,
        description:
            'Water supply distribution and sewerage infrastructure development.',
    },
    {
        id: 6,
        title: 'Security & Surveillance System',
        category: 'Electrical',
        location: 'Lahore',
        year: '2025',
        image: project5Image,
        description:
            'Security, surveillance and safety system installation for a public facility.',
    },
];

const categories = [
    'All',
    'Civil Works',
    'Infrastructure',
    'Electrical',
    'Mechanical',
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects =
        activeCategory === 'All'
            ? projectData
            : projectData.filter(
                (project) => project.category === activeCategory
            );

    return (
        <main className="projects-page">

            {/* PAGE HERO */}
            {/* <section className="projects-hero">
                <div className="container">
                    <span className="projects-label">Our Work</span>

                    <h1 className="banner-title">
                        Projects That Reflect Our
                        <span> Engineering Excellence</span>
                    </h1>

                    <p>
                        Explore selected projects delivered across civil engineering,
                        construction, infrastructure, electrical and mechanical works.
                    </p>
                </div>
            </section> */}

            {/* PROJECTS SECTION */}
            <section className="projects-section section">
                <div className="container">

                    <div data-reveal="auto" className="projects-header">
                        <div>
                            <span className="section-label">Project Portfolio</span>

                            <h2 className="section-title">
                                Selected Engineering Projects
                            </h2>
                        </div>
                    </div>

                    {/* FILTER BUTTONS */}
                    <div data-reveal="auto" className="project-filters">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={
                                    activeCategory === category
                                        ? 'filter-btn active'
                                        : 'filter-btn'
                                }
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* PROJECT CARDS */}
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <article data-reveal="auto" className="project-card" key={project.id}>
                                <span className="catalog-corner-lines" aria-hidden="true" />

                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />

                                    <span className="project-category">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="project-content">

                                    <h3>{project.title}</h3>

                                    <div className="project-meta">
                                        <span>
                                            <MapPin size={16} />
                                            {project.location}
                                        </span>

                                        <span>
                                            <CalendarDays size={16} />
                                            {project.year}
                                        </span>
                                    </div>

                                    <p>{project.description}</p>

                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="project-link"
                                    >
                                        View Project
                                        <ArrowRight size={17} />
                                    </Link>

                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Users,
  BriefcaseBusiness
} from 'lucide-react';
import { Link } from 'react-router-dom';

import './AboutPreview.css';
import StatNumber from './StatNumber';

export default function AboutPreview() {
  return (
    <section className="about-preview section" aria-labelledby="about-preview-title">
      <div className="container">
        <div className="about-grid">

          {/* LEFT SIDE */}
          <div data-reveal="auto" className="about-content">
            <span className="section-label">
              About Advance Engineering
            </span>

            <h2 className="section-title" id="about-preview-title">
              Engineering solutions built on
              <span> quality, reliability and trust.</span>
            </h2>

            <p className="about-text">
              Advance Engineering Company is a professional engineering and
              contracting firm delivering construction, civil, mechanical,
              electrical and infrastructure solutions for government,
              institutional and commercial projects.
            </p>

            <p className="about-text">
              Our approach combines technical expertise, structured project
              management, quality workmanship and responsible execution to
              deliver dependable results from planning through completion.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <CheckCircle2 size={20} />
                <span>Professional Project Execution</span>
              </div>

              <div className="about-feature">
                <CheckCircle2 size={20} />
                <span>Quality & Safety Focused</span>
              </div>

              <div className="about-feature">
                <CheckCircle2 size={20} />
                <span>Government & Institutional Experience</span>
              </div>

              <div className="about-feature">
                <CheckCircle2 size={20} />
                <span>Reliable Engineering Solutions</span>
              </div>
            </div>

            <Link to="/about" className="about-btn">
              Learn More About Us
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div data-reveal="auto" className="about-visual">

            <div className="about-main-card">
              <div className="about-icon-box">
                <Building2 size={34} />
              </div>

              <span className="about-card-label">
                Advance Engineering Company
              </span>

              <h3>
                Delivering dependable engineering and construction solutions.
              </h3>

              <p>
                From civil works and infrastructure development to electrical
                and mechanical systems, we focus on professional execution,
                compliance and long-term value.
              </p>
            </div>

            <div className="about-accent-card">
              <span>Built for</span>
              <strong>Government & Infrastructure Projects</strong>
            </div>

          </div>

        </div>

        {/* STATISTICS */}
        <div className="stats-grid">

          <div data-reveal="auto" className="stat-card">
            <div className="stat-icon">
              <BriefcaseBusiness size={24} />
            </div>

            <div>
              <StatNumber target={10} suffix="+" />
              <p>Years of Experience</p>
            </div>
          </div>

          <div data-reveal="auto" className="stat-card">
            <div className="stat-icon">
              <Building2 size={24} />
            </div>

            <div>
              <StatNumber target={50} suffix="+" />
              <p>Projects Delivered</p>
            </div>
          </div>

          <div data-reveal="auto" className="stat-card">
            <div className="stat-icon">
              <Users size={24} />
            </div>

            <div>
              <StatNumber target={20} suffix="+" />
              <p>Clients Served</p>
            </div>
          </div>

          <div data-reveal="auto" className="stat-card">
            <div className="stat-icon">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <StatNumber target={100} suffix="%" />
              <p>Commitment to Quality</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

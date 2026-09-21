import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Building2,
  ShieldCheck,
  HardHat,
  Clock3
} from 'lucide-react';

import hero1 from '../../assets/images/hero-construction.webp';
import hero2 from '../../assets/images/hero-construction2.webp';
import hero3 from '../../assets/images/hero-construction3.webp';

import './Hero.css';

const heroImages = [
  hero1,
  hero2,
  hero3
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        (prev + 1) % heroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* BACKGROUND SLIDES */}
      <div className="hero-backgrounds">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-background ${
              index === currentImage ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        ))}
      </div>

      {/* DARK GRADIENT */}
      <div className="hero-dark-overlay"></div>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">

          <span className="hero-badge">
            Engineering • Construction • Government Contracting
          </span>

          <h1 className="banner-title">
            Engineering & Contracting
            <span>Solutions You Can Trust.</span>
          </h1>

          <p className="hero-description">
            Advance Engineering Company delivers professional civil,
            construction, mechanical, electrical and infrastructure
            solutions for government, institutional and commercial
            projects.
          </p>

          <div className="hero-buttons">

            <Link
              to="/projects"
              className="hero-btn primary"
            >
              View Our Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="hero-btn secondary"
            >
              Explore Services
            </Link>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <div className="trust-icon">
                <Building2 size={21} />
              </div>

              <div>
                <strong>Government Projects</strong>
                <span>Professional contracting</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <HardHat size={21} />
              </div>

              <div>
                <strong>Engineering Expertise</strong>
                <span>Qualified execution</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <ShieldCheck size={21} />
              </div>

              <div>
                <strong>Quality & Safety</strong>
                <span>Reliable standards</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <Clock3 size={21} />
              </div>

              <div>
                <strong>Timely Delivery</strong>
                <span>Project focused</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="hero-slider-dots">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={
              currentImage === index
                ? 'hero-dot active'
                : 'hero-dot'
            }
            onClick={() => setCurrentImage(index)}
            aria-label={`Hero slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

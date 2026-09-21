import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Link to="/" className="footer-brand">Advance Engineering<span>Company</span></Link>
          <p>Engineering and construction solutions built on quality, reliability and trust.</p>
          <Link to="/contact" className="footer-contact">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <nav aria-label="Footer company navigation">
          <h2>Company</h2>
          <Link to="/about">About us</Link>
          <Link to="/projects">Our projects</Link>
          <Link to="/certifications">Certifications</Link>
        </nav>
        <nav aria-label="Footer services navigation">
          <h2>Work with us</h2>
          <Link to="/services">Engineering services</Link>
          <Link to="/contact">Project inquiries</Link>
          <Link to="/contact">Request consultation</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Advance Engineering Company.</span>
        <span>Engineering · Construction · Infrastructure</span>
      </div>
    </footer>
  );
}

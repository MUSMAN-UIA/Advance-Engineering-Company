import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BuildingScrollbar from './components/BuildingScrollbar/BuildingScrollbar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServiceDetails';
import './polish.css';
import './catalog-cards.css';
import './section-headings.css';
import './responsive.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <ScrollReveal>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route
  path="/services/:slug"
  element={<ServiceDetails />}
/>
      </Routes>
      </ScrollReveal>

      <Footer />
      <BuildingScrollbar />
    </BrowserRouter>
  );
}

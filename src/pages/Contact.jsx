import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  Building2
} from 'lucide-react';

import './Contact.css';

// WEB3FORMS SETUP: Set VITE_WEB3FORMS_ACCESS_KEY in frontend/.env.
const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    project_location: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const submissionInProgress = useRef(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submissionInProgress.current) return;

    if (!WEB3FORMS_ACCESS_KEY.trim() || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setSubmissionStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please contact us by phone or email.'
      });
      return;
    }

    submissionInProgress.current = true;
    setIsSending(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          access_key: WEB3FORMS_ACCESS_KEY.trim(),
          subject: 'New Project Inquiry - Advance Engineering Company',
          from_name: 'Advance Engineering Company Website'
        })
      });
      const result = await response.json();

      if (!response.ok || result.success !== true) {
        setSubmissionStatus({
          type: 'error',
          message: 'Your message could not be sent. Please try again later or contact us by phone or email.'
        });
        return;
      }

      setSubmissionStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        service: '',
        project_location: '',
        message: ''
      });
    } catch {
      setSubmissionStatus({
        type: 'error',
        message: 'Unable to confirm your submission. Please check your connection and try again, or contact us by phone or email.'
      });
    } finally {
      submissionInProgress.current = false;
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      {/* <section className="contact-hero">
        <div className="container">
          <span className="contact-label">
            Contact Us
          </span>

          <h1 className="banner-title">
            Let’s Discuss Your
            <span> Next Engineering Project.</span>
          </h1>

          <p>
            Contact Advance Engineering Company for construction,
            engineering, infrastructure and government project inquiries.
          </p>
        </div>
      </section> */}

      {/* MAIN CONTACT */}
      <section className="contact-section section">
        <div className="container contact-grid">

          {/* LEFT */}
          <div data-reveal="auto" className="contact-info">

            <span className="section-label">
              Get In Touch
            </span>

            <h2 className="section-title">
              Start a project conversation.
            </h2>

            <p className="contact-intro">
              Whether you need civil construction, infrastructure,
              electrical, mechanical or specialized engineering services,
              our team is ready to discuss your requirements.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    <a href="https://wa.me/923223888811" style={{ color: 'inherit', textDecoration: 'none' }}>
                      0322-3888811
                    </a>
                  </strong>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    <a href="mailto:afzal.advance@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                      afzal.advance@gmail.com
                    </a>
                  </strong>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <span>Office</span>
                  <strong>Lahore, Pakistan</strong>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Clock3 size={22} />
                </div>

                <div>
                  <span>Working Hours</span>
                  <strong>Mon - Sat, 9:00 AM - 6:00 PM</strong>
                </div>
              </div>

            </div>

            <div className="contact-company-card">
              <Building2 size={34} />

              <div>
                <span>Advance Engineering Company</span>

                <h3>
                  Professional engineering and contracting solutions.
                </h3>
              </div>
            </div>

          </div>

          {/* FORM */}
          <div data-reveal="auto" className="contact-form-wrapper">

            <span className="contact-form-label">
              Project Inquiry
            </span>

            <h2>
              Tell us about your project.
            </h2>

            <p>
              Complete the form and our team can follow up regarding your
              project requirements.
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-busy={isSending}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">
                    Organization
                  </label>

                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Company / Department"
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92"
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="service">
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select service
                    </option>

                    <option value="Civil Engineering">
                      Civil Engineering
                    </option>

                    <option value="Building Construction">
                      Building Construction
                    </option>

                    <option value="Infrastructure">
                      Infrastructure
                    </option>

                    <option value="Electrical Works">
                      Electrical Works
                    </option>

                    <option value="Mechanical Works">
                      Mechanical Works
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="project_location">
                    Project Location
                  </label>

                  <input
                    id="project_location"
                    type="text"
                    name="project_location"
                    value={formData.project_location}
                    onChange={handleChange}
                    placeholder="City / Area"
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Project Details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the project scope, requirements or inquiry..."
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Submit Project Inquiry'}

                <Send size={18} />
              </button>

              {submissionStatus && (
                <p
                  role={submissionStatus.type === 'error' ? 'alert' : 'status'}
                  style={submissionStatus.type === 'success' ? { color: '#15803d' } : undefined}
                >
                  {submissionStatus.message}
                </p>
              )}

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

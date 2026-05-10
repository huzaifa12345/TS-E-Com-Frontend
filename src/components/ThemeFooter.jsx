import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadset, FaEnvelope, FaMapMarkerAlt, FaChevronRight, FaArrowUp, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLogo } from '../context/LogoContext';
import '../assets/css/Footer.css';

const Footer = () => {
  const { websiteLogo } = useLogo();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ts-footer-main">
      <div className="container">
        <div className="ts-footer-top-grid">
          
          {/* Brand Identity */}
          <div className="ts-footer-col brand-col">
            <img src={websiteLogo} alt="Tayyab Sports" className="ts-footer-logo" />
            <p className="ts-brand-text">
              Your ultimate destination for premium badminton gear in Gujranwala. We provide top-quality rackets, shuttlecocks, and professional stringing services.
            </p>
            <div className="ts-social-links">
              <a href="#" className="ts-social-icon"><FaFacebookF /></a>
              <a href="#" className="ts-social-icon"><FaInstagram /></a>
              <a href="https://wa.me/923006468707" className="ts-social-icon"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ts-footer-col">
            <h5 className="ts-footer-title">Quick Links</h5>
            <ul className="ts-footer-links-list">
              <li><Link to="/" onClick={handleScrollTop}><FaChevronRight /> Home</Link></li>
              <li><Link to="/all-products" onClick={handleScrollTop}><FaChevronRight /> Shop Gear</Link></li>
              <li><Link to="/about" onClick={handleScrollTop}><FaChevronRight /> Our Story</Link></li>
              <li><Link to="/cart" onClick={handleScrollTop}><FaChevronRight /> My Cart</Link></li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="ts-footer-col">
            <h5 className="ts-footer-title">Store Support</h5>
            <div className="ts-contact-cards">
              <div className="ts-c-card">
                <FaHeadset className="ts-c-icon" />
                <div>
                  <small>Call / WhatsApp</small>
                  <p>+92 300 6468707</p>
                </div>
              </div>
              <div className="ts-c-card">
                <FaMapMarkerAlt className="ts-c-icon" />
                <div>
                  <small>Visit Store</small>
                  <p>Lari Adda, Gujranwala</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="ts-footer-bottom-bar">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <p className="ts-copyright">
              &copy; 2026 <b>Tayyab Sports</b>. All rights reserved.
            </p>
            <p className="ts-powered-by">
              Developed by <span className="ts-company-highlight">CodeBase Solutions</span>
            </p>
            <button className="ts-scroll-top-btn" onClick={handleScrollTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
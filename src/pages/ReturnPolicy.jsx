import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaChevronRight, FaEnvelope, FaPhoneAlt, FaShieldAlt } from 'react-icons/fa';
import TopBar from '../components/TopBar';
import SideDrawer from '../components/SideDrawer';
import ThemeFooter from '../components/ThemeFooter';
import '../assets/css/ReturnPolicy.css';

export default function ReturnPolicy() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  return (
    <div className="return-policy-page">
      <Helmet>
        <title>Return & Refund Policy | Saith Chemical</title>
        <meta name="description" content="Read Saith Chemical's return, exchange, and refund policy." />
      </Helmet>

      <header className="modern-header">
        <TopBar onMenuToggle={() => setSideDrawerOpen(true)} />
        <SideDrawer isOpen={sideDrawerOpen} onClose={() => setSideDrawerOpen(false)} />
      </header>

      <main>
        <section className="return-policy-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="return-policy-hero-content"
            >
              <span className="return-policy-eyebrow"><FaShieldAlt /> Customer care & transparency</span>
              <h1>Return &amp; Refund Policy</h1>
              <p>We want every Saith Chemical order to arrive safely and meet your expectations.</p>
              <span className="return-policy-updated">Last updated: September 17, 2026</span>
            </motion.div>
          </div>
        </section>

        <section className="return-policy-content container">
          <div className="return-policy-intro">
            <span className="return-policy-kicker">Simple process</span>
            <h2>What happens if something is not right?</h2>
            <p>Contact our support team as soon as possible. We will review the order details and guide you through the next step.</p>
          </div>

          <div className="return-policy-grid">
            <article className="return-policy-card return-policy-card-featured">
              <span className="return-policy-number">01</span>
              <h3>Returns &amp; Exchange</h3>
              <p>At Saith Chemical, we strive to provide high-quality cleaning and chemical products. If you receive a damaged, defective, or incorrect product, you are eligible for a return or exchange within <strong>7 days</strong> of delivery.</p>
            </article>

            <article className="return-policy-card">
              <span className="return-policy-number">02</span>
              <h3>Conditions for Return</h3>
              <ul>
                <li><FaCheckCircle /> The product must be unused, sealed, and in its original packaging.</li>
                <li><FaCheckCircle /> Proof of purchase, such as an invoice or order confirmation, is required.</li>
              </ul>
            </article>

            <article className="return-policy-card">
              <span className="return-policy-number">03</span>
              <h3>Non-Returnable Items</h3>
              <p>Unsealed chemical products or items damaged due to customer misuse cannot be returned.</p>
            </article>

            <article className="return-policy-card return-policy-card-refund">
              <span className="return-policy-number">04</span>
              <h3>Refund Process</h3>
              <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed via Bank Transfer or EasyPaisa/JazzCash within <strong>3 to 5 business days</strong>.</p>
            </article>
          </div>

          <div className="return-policy-contact">
            <div>
              <span className="return-policy-kicker">Need assistance?</span>
              <h2>Our support team is ready to help.</h2>
              <p>To initiate a return, please share your order details with us.</p>
            </div>
            <div className="return-policy-contact-links">
              <a href="mailto:support@saithchemicals.com"><FaEnvelope /> support@saithchemicals.com</a>
              <a href="tel:+923227594213"><FaPhoneAlt /> +92 322 7594213</a>
              <span><FaChevronRight /> Response during business hours</span>
            </div>
          </div>
        </section>
      </main>

      <ThemeFooter />
    </div>
  );
}
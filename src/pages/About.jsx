import { motion } from 'framer-motion';
import TopBar from '../components/TopBar';
import ThemeFooter from '../components/ThemeFooter';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header className="modern-header">
        <div className="container">
          <TopBar onMenuToggle={() => {}} />
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="row align-items-center"
        >
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3" style={{ color: '#111827' }}>
              About <span style={{ color: '#3498db' }}>Tayyab Sports Shop</span>
            </h1>
            <p className="lead" style={{ color: '#4b5563' }}>
              Tayyab Sports Shop is a premier destination for quality badminton equipment and sports gear that has been serving players and enthusiasts since <strong>1999</strong>. We combine decades of expertise, premium products and passion for sports to provide equipment that helps champions perform at their best every single time.
            </p>
          </div>
          <div className="col-lg-5">
            <div
              className="p-4 rounded-4 shadow-sm"
              style={{
                background:
                  'linear-gradient(135deg, rgba(242,101,34,0.1), rgba(251,191,36,0.15))',
              }}
            >
              <h5 className="fw-bold mb-3" style={{ color: '#111827' }}>
                At a Glance
              </h5>
              <ul className="list-unstyled mb-0" style={{ color: '#374151', fontSize: 14 }}>
                <li className="mb-2">
                  • Founded in <strong>1999</strong> with a simple mission: provide premium quality sports
                  equipment for every player level.
                </li>
                <li className="mb-2">
                  • Thousands of satisfied players who trust our equipment, quality and expert guidance.
                </li>
                <li className="mb-2">
                  • Specialized collection of badminton rackets, shuttlecocks and accessories.
                </li>
                <li>
                  • Based in Pakistan, serving players nationwide through our store and online shop.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="container pb-5">
        <div className="row">
          <div className="col-lg-7 mb-4">
            <h3 className="fw-bold mb-3" style={{ color: '#111827' }}>
              Our Story
            </h3>
            <p style={{ color: '#4b5563', lineHeight: 1.7 }}>
              Tayyab Sports Shop started in 1999 as a specialized venture to bring premium badminton equipment to players of all levels. We saw players struggling to choose between cheap alternatives and expensive professional gear, so we decided to build a brand that delivers both – <strong>quality</strong> and{' '}
              <strong>affordability</strong>.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.7 }}>
              Today, Tayyab Sports Shop is a recognised name in sports industry with a strong reputation, latest equipment arrivals every season and a loyal customer base that relies on our consistent quality. From professional badminton rackets to training accessories, every product is selected to handle real‑world challenges: competitive matches, training sessions, recreational play and everything in between.
            </p>
          </div>
          <div className="col-lg-5 mb-4">
            <div className="p-4 rounded-4 bg-white shadow-sm h-100">
              <h4 className="fw-bold mb-3" style={{ color: '#111827' }}>
                What Makes Us Different?
              </h4>
              <ul className="list-unstyled mb-0" style={{ color: '#4b5563', fontSize: 14 }}>
                <li className="mb-2">
                  • <strong>Premium quality equipment</strong> – professional grade, durable and performance-focused.
                </li>
                <li className="mb-2">
                  • <strong>Expert selection</strong> – carefully chosen badminton rackets and gear for all skill levels.
                </li>
                <li className="mb-2">
                  • <strong>Competitive pricing</strong> – professional quality without breaking the bank.
                </li>
                <li>
                  • <strong>Personalized service</strong> – we guide players to choose the perfect equipment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section
        className="py-5"
        style={{ background: 'linear-gradient(135deg,#0f172a,#020617)', color: '#e5e7eb' }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Our Vision</h3>
              <p style={{ lineHeight: 1.7 }}>
                To be the most trusted badminton equipment supplier in the region – a brand that professional players rely on for competitive performance and enthusiasts choose for quality and value.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Our Promise</h3>
              <p style={{ lineHeight: 1.7 }}>
                Every order from Tayyab Sports Shop should deliver complete satisfaction: from equipment quality and performance to packaging, delivery experience and expert support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ThemeFooter />
    </div>
  );
};

export default About;



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div>
      {/* 1. Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Express Daily Mart</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Departments</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Highlights</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="https://wa.me/918853567103" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Order via WhatsApp &rarr;
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">Fresh daily essentials at your doorstep.</h1>
          <h2 className="hero-subheadline">Your trusted neighborhood supermarket.</h2>
          <p className="hero-support">
            Shop No. 19, 20, 21, 22, Kathauta Chauraha Rd, In front of Petrol Pump, Vijayant Khand, Gomti Nagar, Lucknow. Open 8:30 AM – 10:30 PM (Wed Closed).
          </p>
          <a href="https://maps.app.goo.gl/9kBE7RBcQPjM6aWc6?g_st=ac" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
            Find Our Store &rarr;
          </a>
        </div>
      </header>

      {/* 3. Trust / Reassurance Strip */}
      <section className="trust-strip">
        <div className="trust-item">
          <span className="icon">✓</span> 100% Genuine Branded Groceries
        </div>
        <div className="trust-item">
          <span className="icon">✓</span> Open 8:30 AM – 10:30 PM
        </div>
        <div className="trust-item">
          <span className="icon">✓</span> Front of Petrol Pump, Vijayant Khand
        </div>
        <div className="trust-item">
          <span className="icon">✓</span> 5.0 ★ Rated by 140+ Happy Shoppers
        </div>
      </section>

      {/* 4. Services — Image Grid Cards */}
      <section id="services" className="services">
        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="card-image bg-placeholder-1"></div>
            <div className="card-content">
              <h3 className="card-label">Daily Groceries & Staples</h3>
              <p className="card-hover-text">Fresh flour, basmati rice, lentils, pulses & organic spices.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="service-card">
            <div className="card-image bg-placeholder-2"></div>
            <div className="card-content">
              <h3 className="card-label">Packaged Foods & Snacks</h3>
              <p className="card-hover-text">Haldiram delicacies, biscuits, beverages, dairy & breakfast picks.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="service-card">
            <div className="card-image bg-placeholder-3"></div>
            <div className="card-content">
              <h3 className="card-label">Household & Hygiene</h3>
              <p className="card-hover-text">Cleaning essentials, premium soaps, detergents & personal care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "We handle the tech" / About Section */}
      <section id="about" className="tech-reassurance">
        <div className="tech-content">
          <h2>Everything you need for your daily home.</h2>
          <p>Easy shopping, organized aisles, quick billing, and hassle-free phone/WhatsApp ordering for Gomti Nagar families.</p>
          <div className="tech-steps">
            <div className="step">
              <div className="step-icon">🛒</div>
              <p>Send your list on WhatsApp</p>
            </div>
            <div className="step">
              <div className="step-icon">📦</div>
              <p>We pack fresh items instantly</p>
            </div>
            <div className="step">
              <div className="step-icon">⚡</div>
              <p>Quick neighborhood pickup/delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Proof / Case Studies */}
      <section id="work" className="case-studies">
        <div className="case-grid">
          {/* Case 1 */}
          <div className="case-card">
            <div className="case-visual bg-placeholder-4"></div>
            <div className="case-info">
              <span className="industry-tag">Local Neighborhood Mart</span>
              <p className="result-line">Rated <strong>5.0 out of 5 stars</strong> by 140+ Gomti Nagar customers</p>
              <a href="https://maps.app.goo.gl/9kBE7RBcQPjM6aWc6?g_st=ac" target="_blank" rel="noopener noreferrer" className="view-project">
                View Google Maps Reviews &rarr;
              </a>
            </div>
          </div>
          {/* Case 2 */}
          <div className="case-card">
            <div className="case-visual bg-placeholder-5"></div>
            <div className="case-info">
              <span className="industry-tag">Prime Gomti Nagar Location</span>
              <p className="result-line">Conveniently located <strong>directly opposite Bharat Petroleum</strong></p>
              <a href="https://maps.app.goo.gl/9kBE7RBcQPjM6aWc6?g_st=ac" target="_blank" rel="noopener noreferrer" className="view-project">
                Get Driving Directions &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ — Doubt-Clearing Accordion */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          <div className={`accordion-item ${activeAccordion === 0 ? "active" : ""}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(0)}>
              Where is Express Daily Mart located? <span className="icon">+</span>
            </button>
            <div className="accordion-content">
              <p>We are located at Shop no 19, 20, 21, 22, Kathauta Chauraha Road, directly in front of the petrol pump in Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010.</p>
            </div>
          </div>

          <div className={`accordion-item ${activeAccordion === 1 ? "active" : ""}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(1)}>
              What are your store hours? <span className="icon">+</span>
            </button>
            <div className="accordion-content">
              <p>We are open Monday to Tuesday and Thursday to Sunday from 8:30 AM to 10:30 PM. The store is closed on Wednesdays.</p>
            </div>
          </div>

          <div className={`accordion-item ${activeAccordion === 2 ? "active" : ""}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(2)}>
              How do I contact or order via phone/WhatsApp? <span className="icon">+</span>
            </button>
            <div className="accordion-content">
              <p>You can directly call or WhatsApp us on +91 88535 67103 to check product availability or place an order for quick pickup.</p>
            </div>
          </div>

          <div className={`accordion-item ${activeAccordion === 3 ? "active" : ""}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(3)}>
              What payment methods do you accept? <span className="icon">+</span>
            </button>
            <div className="accordion-content">
              <p>We accept all UPI apps (GPay, PhonePe, Paytm), Debit/Credit Cards, and Cash.</p>
            </div>
          </div>

          <div className={`accordion-item ${activeAccordion === 4 ? "active" : ""}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(4)}>
              Are all grocery and FMCG products authentic? <span className="icon">+</span>
            </button>
            <div className="accordion-content">
              <p>Yes, all items are sourced directly from verified brands and distributors ensuring 100% freshness and genuine quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section id="contact" className="final-cta">
        <h2>Need groceries right now?</h2>
        <div className="cta-buttons">
          <a href="tel:+918853567103" className="btn-primary btn-large">Call +91 88535 67103</a>
          <a href="https://wa.me/918853567103" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-large">Chat on WhatsApp</a>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Express Daily Mart</h3>
            <p>Shop no 19-22, Kathauta Chauraha Rd, Vijayant Khand, Gomti Nagar, Lucknow</p>
          </div>
          <div className="footer-links">
            <a href="#services">Staples</a> | 
            <a href="#services">Snacks & Dairy</a> | 
            <a href="#services">Household</a>
          </div>
          <div className="footer-social">
            <a href="https://wa.me/918853567103" target="_blank" rel="noopener noreferrer" className="social-icon">WhatsApp</a>
            <a href="tel:+918853567103" className="social-icon">Phone: +91 88535 67103</a>
            <a href="https://maps.app.goo.gl/9kBE7RBcQPjM6aWc6?g_st=ac" target="_blank" rel="noopener noreferrer" className="social-icon">Google Maps</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Express Daily Mart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

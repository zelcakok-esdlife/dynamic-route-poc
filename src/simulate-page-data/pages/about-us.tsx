// pages/AboutUsPage.tsx
import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      <div className="hero-section">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the team behind our platform</p>
      </div>

      <div className="content-sections">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to creating innovative solutions that connect people and 
            businesses through technology. Our platform brings together users and products 
            in a seamless, user-friendly environment.
          </p>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            To become the leading platform for digital interaction, where users can 
            discover amazing products, connect with like-minded individuals, and 
            share their experiences with the world.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly strive to improve and innovate our platform</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>We believe in building strong, supportive communities</p>
            </div>
            <div className="value-card">
              <h3>Quality</h3>
              <p>We maintain high standards in everything we do</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>We operate with honesty and openness</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🎨</div>
              <h3>Mike Davis</h3>
              <p>Head of Design</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Emily Chen</h3>
              <p>Head of Marketing</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> hello@ourplatform.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
          </div>
          <div className="social-links">
            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>Facebook</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;

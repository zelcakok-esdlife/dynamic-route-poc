// pages/LandingPage.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing products and connect with users worldwide</p>
        <button className="cta-button">Get Started</button>
      </header>
      
      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>User Profiles</h3>
            <p>Create and customize your profile</p>
          </div>
          <div className="feature-card">
            <h3>Product Catalog</h3>
            <p>Browse our extensive product collection</p>
          </div>
          <div className="feature-card">
            <h3>Community Posts</h3>
            <p>Share and discover content</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

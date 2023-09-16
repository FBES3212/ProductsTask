import React from 'react'
import './Home.css';
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to our Product Site</h1>
      </header>
      <main>
        <section className="hero-section">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5a1fac7e914e6b30d737146f/1683652897432-UKUTT07XCKS9NI9NLOXT/228A4750a.jpg"
            alt="Product Showcase"
            className="hero-image"
          />
          <h1>Discover our amazing products.</h1>
          <button className="products-link">View Products</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

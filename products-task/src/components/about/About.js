import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image from '../../assets/about-image.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Products</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={image} alt="Company Office" className="about-image" />
        </div>
        <div className="about-text">
          <p>
            Welcome to our products application! We are dedicated to providing
            you with high-quality and innovative products that cater to your
            needs. Our team is passionate about technology and design, and we
            strive to create products that not only look great but also enhance
            your life.
          </p>
          <p>
            At our company, we believe in the power of collaboration. Our
            designers, engineers, and product specialists work together to
            bring you the latest trends and cutting-edge technology. We
            understand that every customer is unique, and we aim to offer a
            diverse range of products to suit different tastes and preferences.
          </p>
          <p>
            Our commitment to quality extends to every aspect of our
            operation, from sourcing the finest materials to rigorous quality
            control. We are proud of the products we create and stand behind
            their durability and performance.
          </p>
          <p>
            Whether you're looking for innovative gadgets, stylish accessories,
            or essential tools, our product lineup is designed to meet your
            lifestyle needs.
          </p>
          <p>
            Thank you for choosing our products. We look forward to serving
            you and providing you with the best in quality and design.
          </p>
          {/* Links to other pages */}
          <p>
            Explore our products on our{' '}
            <a href="/products">Products Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

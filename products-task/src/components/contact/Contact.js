import React, { useState } from 'react';
import './Contact.css';
import contactImage from '../../assets/contact-image.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert("Message Was Sent!")
    setFormData({
        name: '',
        email: '',
        message: '',
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="contact-text">
          <p>
            Have questions or feedback? Feel free to get in touch with us.
            We're here to assist you!
          </p>
          <p>
            You can reach out to us via email, phone, or by using the contact
            form below. Our dedicated team is ready to provide you with
            information and support.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-image">
          <img
            src={contactImage}
            alt="Contact Office"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="page">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Me</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Get in touch with me for any questions or opportunities!
        </p>
        
        <ContactForm />
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3>Direct Contact</h3>
          <p>Phone: 0725471028</p>
          <p>Email: uwimpuhwejennifer@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
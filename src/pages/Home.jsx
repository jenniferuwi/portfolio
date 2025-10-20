import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaFacebook, 
  FaTwitter,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: '#',
      icon: <FaGithub className="social-icon" />,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: <FaLinkedin className="social-icon" />,
      color: '#0077b5'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: <FaInstagram className="social-icon" />,
      color: '#e4405f'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: <FaYoutube className="social-icon" />,
      color: '#ff0000'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: <FaFacebook className="social-icon" />,
      color: '#1877f2'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: <FaTwitter className="social-icon" />,
      color: '#1da1f2'
    }
  ];

  return (
    <section className="page">
      <div className="container">
        <div className="hero">
          <h1 className="hero-title">Uwimpuhwe Jenifer</h1>
          <p className="hero-subtitle">Full Stack Developer | PHP | Python | Node.js | React</p>
          <p className="hero-description">
            Passionate about creating efficient, scalable web applications with modern technologies. 
            Let's build something amazing together!
          </p>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>uwimpuhwejennifer@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>0725471028</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
            <Link to="/skills" className="btn btn-secondary">
              View Skills
            </Link>
          </div>

          {/* Social Media Links - Full Version */}
          <div className="social-section">
            <p className="social-links-title">Follow me on social media</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow me on ${social.name}`}
                >
                  {social.icon}
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Home;
import React from 'react';

const About = () => {
  return (
    <section className="page">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Me</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Hello! I'm Uwimpuhwe Jenifer, a passionate Full Stack Developer with expertise in both frontend and backend technologies.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            I specialize in creating responsive, user-friendly web applications using modern technologies like React, Node.js, Python, and PHP.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            With a strong foundation in web development principles and a keen eye for detail, I strive to create efficient and scalable solutions.
          </p>
          <p>
            When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
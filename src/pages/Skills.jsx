import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'PHP', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'React.js', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' }
  ];

  return (
    <section className="page">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
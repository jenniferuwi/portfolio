import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform with React frontend and Node.js backend. Features user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "🛒",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["React", "Python", "SQLite", "REST API"],
      image: "✅",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with dark/light mode, contact form, and project showcase. Built with React and professional CSS.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "💼",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location detection, 5-day forecast, and interactive charts. Uses external weather API.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "HTML/CSS"],
      image: "🌤️",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content management system for bloggers with rich text editor, categories, tags, and comment system. Admin dashboard for content management.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "📝",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, user authentication, and message history. Built with Socket.io for real-time communication.",
      technologies: ["Node.js", "Socket.io", "React", "MongoDB"],
      image: "💬",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="page">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Projects</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span style={{ fontSize: '3rem' }}>{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
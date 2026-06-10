import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="logo">cm.</div>
        <div className="nav-pill">
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#projects">Proyectos</a> 
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
        </div>
        <button className="contact-btn">Hablemos</button>
      </nav>

      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-text">
            <p className="hero-greeting">Soy Carlos Merino</p>
            <h1 className="hero-title">Desarrollador Web<br/>& Estudiante de Ingeniería</h1>
            <p className="hero-desc">
              Fusionando la lógica del backend con interfaces limpias y responsivas para crear productos digitales que se ven increíbles y rinden sin problemas.
            </p>
            <div className="hero-actions">
              <button className="download-btn">Descargar CV</button>
              <div className="social-links">
                <a href="#linkedin" className="social-icon">in</a>
                <a href="#github" className="social-icon">gh</a>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="image-placeholder">
              <span>Tu Foto Aquí</span>
            </div>
          </div>
        </section>

        <section id="services" className="section text-center">
          <h2 className="section-title">Servicios & Áreas</h2>
          <p className="section-subtitle">Soluciones tecnológicas escalables y eficientes</p>
          
          <div className="grid-4">
            <div className="card">
              <h3>Frontend Development</h3>
              <p>Interfaces responsivas usando React, Tailwind y JS para un rendimiento confiable y consistente.</p>
              <div className="card-tags">
                <span className="pill">React.js</span>
                <span className="pill">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="card">
              <h3>Backend & Lógica</h3>
              <p>Desarrollo de módulos críticos, APIs y lógica de negocio para sistemas contables y ERP.</p>
              <div className="card-tags">
                <span className="pill">PHP / Laravel</span>
                <span className="pill">Node.js</span>
              </div>
            </div>

            <div className="card">
              <h3>Bases de Datos</h3>
              <p>Administración, diseño y optimización de bases de datos relacionales en producción.</p>
              <div className="card-tags">
                <span className="pill">MySQL</span>
                <span className="pill">NoSQL</span>
              </div>
            </div>

            <div className="card">
              <h3>Soporte & Servidores</h3>
              <p>Mantenimiento de hardware/software, optimización en Linux y despliegue con Docker.</p>
              <div className="card-tags">
                <span className="pill">Linux</span>
                <span className="pill">Docker</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="text-center">
            <h2 className="section-title">Proyectos Destacados</h2>
            <p className="section-subtitle">Una selección de mi trabajo reciente y desarrollos técnicos</p>
          </div>

          <div className="projects-grid-modern">
            <div className="project-modern-card">
              <div className="project-img-placeholder">
                <span>Captura del ERP / CRM</span>
              </div>
              <div className="project-modern-info">
                <h3>Módulo ERP Contable & DTE</h3>
                <p>Desarrollo e implementación de módulos críticos para el sistema financiero de Intersys. Lógica de negocio estructurada para la gestión de documentos tributarios electrónicos (DTE).</p>
                <div className="project-modern-tags">
                  <span className="pill">Laravel</span>
                  <span className="pill">PHP</span>
                  <span className="pill">MySQL</span>
                </div>
              </div>
            </div>

            <div className="project-modern-card">
              <div className="project-img-placeholder">
                <span>Captura de Datos/Dashboard</span>
              </div>
              <div className="project-modern-info">
                <h3>Sistema de Análisis Académico</h3>
                <p>Herramienta basada en datos para procesar históricos y hacer ingeniería inversa de horarios universitarios, permitiendo predecir la asignación de docentes basada en patrones.</p>
                <div className="project-modern-tags">
                  <span className="pill">Data Analysis</span>
                  <span className="pill">Algoritmos</span>
                  <span className="pill">Backend</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section text-center">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="about-desc">
            Soy un estudiante de Ingeniería en Ciencias de la Computación apasionado por crear experiencias digitales limpias. Me enfoco en convertir ideas en sistemas funcionales entendiendo las necesidades operativas y asegurando interacciones fluidas en cualquier dispositivo.
          </p>

          <h3 className="subsection-title">Mi Enfoque</h3>
          <div className="grid-3">
            <div className="approach-card">
              <span className="approach-num">01</span>
              <span>Análisis de Requerimientos</span>
            </div>
            <div className="approach-card">
              <span className="approach-num">02</span>
              <span>Desarrollo de Lógica Clara</span>
            </div>
            <div className="approach-card">
              <span className="approach-num">03</span>
              <span>Implementación Escalable</span>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat">
              <h4>3+</h4>
              <p>Años de Experiencia</p>
            </div>
            <div className="stat">
              <h4>10+</h4>
              <p>Proyectos Creados</p>
            </div>
            <div className="stat">
              <h4>100%</h4>
              <p>Compromiso</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section text-center">
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">Herramientas y tecnologías que domino</p>

          <div className="grid-4">
            <div className="card">
              <h3>Core Skills</h3>
              <div className="skills-tags">
                <span className="skill-pill">Arquitectura Web</span>
                <span className="skill-pill">Resolución de Problemas</span>
                <span className="skill-pill">Soporte Técnico</span>
              </div>
            </div>

            <div className="card">
              <h3>Frontend</h3>
              <div className="skills-tags">
                <span className="skill-pill">HTML & CSS</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">React.js</span>
                <span className="skill-pill">Tailwind CSS</span>
              </div>
            </div>

            <div className="card">
              <h3>Backend & BD</h3>
              <div className="skills-tags">
                <span className="skill-pill">PHP & Laravel</span>
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">MySQL</span>
              </div>
            </div>

            <div className="card">
              <h3>Herramientas</h3>
              <div className="skills-tags">
                <span className="skill-pill">Git / GitHub</span>
                <span className="skill-pill">Linux</span>
                <span className="skill-pill">Docker</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
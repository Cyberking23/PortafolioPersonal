import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <main className="main-content">
        {/* ABOUT ME & PIXEL CAT */}
        <section id="about" className="about-section">
          <div className="about-text">
            <h1 className="section-title">About Me</h1>
            <p>
              Soy un desarrollador web y estudiante de Ingeniería en Ciencias de la Computación apasionado por crear productos digitales escalables. Creo firmemente en el poder del código limpio y el diseño intuitivo para resolver problemas reales.
            </p>
            <p>
              Cuando no estoy programando o gestionando bases de datos, me encuentro explorando nuevas tecnologías de backend, optimizando servidores en Linux o aportando soluciones operativas eficientes. Siempre busco proyectos que me reten a crecer como futuro ingeniero.
            </p>
          </div>
          <div className="about-graphic">
            {/* SVG GATITO PIXEL ART SIMULADO */}
            <svg width="180" height="180" viewBox="0 0 24 24" fill="#a855f7" xmlns="http://www.w3.org/2000/svg" className="pixel-cat">
              <path d="M2 6h2v2h2v2h12V8h2V6h2v6h-2v2h2v6h-2v2H4v-2H2v-6h2v-2H2V6zm4 6h4v2H6v-2zm8 0h4v2h-4v-2z" />
              <path d="M10 16h4v2h-4z" fill="#050505" />
              <path d="M4 14h2v2H4v-2zm14 0h2v2h-2v-2z" />
            </svg>
            <div className="sparkles">
              <span className="sparkle s1">✦</span>
              <span className="sparkle s2">✖</span>
              <span className="sparkle s3">✦</span>
            </div>
          </div>
        </section>

        {/* SKILLS & TECHNOLOGIES */}
        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-container">
            <div className="skill-box">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Tailwind</span>
              </div>
            </div>
            
            <div className="skill-box">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span>PHP</span>
                <span>Node.js</span>
                <span>Laravel</span>
                <span>Express</span>
                <span>Python</span>
              </div>
            </div>

            <div className="skill-box">
              <h3>Data & Tools</h3>
              <div className="skill-tags">
                <span>MySQL</span>
                <span>NoSQL</span>
                <span>Git/GitHub</span>
                <span>Docker</span>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE (TIMELINE) */}
        <section id="experience" className="experience-section">
          <h2 className="section-title">Experience & Education</h2>
          
          <div className="timeline">
            {/* Item 1 */}
            <div className="timeline-item">
              <div className="timeline-year">
                <span>2026</span>
              </div>
              <div className="timeline-content">
                <h3>Ingeniería en Ciencias de la Computación</h3>
                <p className="highlight">Universidad Don Bosco</p>
                <p>Estudiante activo en formación, desarrollando pensamiento crítico, arquitectura de software y administración de sistemas.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="timeline-item">
              <div className="timeline-year">
                <span>2025</span>
              </div>
              <div className="timeline-content">
                <h3>Desarrollador de Software</h3>
                <p className="highlight">Intersys | Profinancial SV</p>
                <p>Implementación de módulos críticos para sistemas ERP con Laravel y DTE. Desarrollo de lógica de negocio para sistemas CRM contables en PHP, junto con administración de bases de datos MySQL en producción y diseño de interfaces con Tailwind CSS.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item">
              <div className="timeline-year">
                <span>2024</span>
              </div>
              <div className="timeline-content">
                <h3>Soporte Técnico</h3>
                <p className="highlight">Colegio Don Bosco</p>
                <p>Mantenimiento preventivo y correctivo de hardware/software, diagnóstico de fallas, instalación de sistemas operativos y resolución de incidentes técnicos para garantizar la operatividad.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>© 2026 Carlos Merino. Desarrollador Web.</p>
      </footer>
    </div>
  );
};

export default App;
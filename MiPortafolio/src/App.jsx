import React from 'react';
import './App.css';
import { CarruselProyectos } from './Components/CarruselProyectos';
import { Certificaciones } from './Components/Certificaciones';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5] font-sans antialiased overflow-x-hidden">
      <div className="w-full">
        
        <nav className="flex justify-between items-center py-[30px] px-[5%]">
          <div className="font-semibold bg-[#222] w-[45px] h-[45px] flex items-center justify-center rounded-full">
            CM
          </div>
          <div className="hidden md:flex bg-[#111] border border-[#222] py-[10px] px-[30px] rounded-full gap-[30px]">
            <a href="#home" className="text-[#aaa] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-white">Inicio</a>
            <a href="#services" className="text-[#aaa] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-white">Servicios</a>
            <a href="#projects" className="text-[#aaa] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-white">Proyectos</a>
            <a href="#about" className="text-[#aaa] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-white">Sobre mí</a>
            <a href="#skills" className="text-[#aaa] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-white">Habilidades</a>
            <a href="#certifications" className="text-[#aaa] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-white">Certificaciones</a>
          </div>
        </nav>

        <main className="px-[5%]"> {/* Aplicamos el padding aquí para todo el contenido */}
          <section id="home" className="flex flex-col md:flex-row items-center justify-between py-[60px] gap-[40px] text-center md:text-left">
            <div className="flex-1 max-w-[600px] mb-[30px] md:mb-0">
              <p className="text-[#888] text-[16px] mb-[12px]">Soy Carlos Merino</p>
              <h1 className="text-[40px] lg:text-[52px] leading-[1.1] font-bold mb-[24px]">Desarrollador Web<br />& Estudiante de Ingeniería</h1>
              <p className="text-[#aaa] text-[16px] mb-[40px] max-w-[90%] mx-auto md:mx-0">
                Fusionando la lógica del backend con interfaces limpias y responsivas para crear productos digitales que se ven increíbles y rinden sin problemas.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-[20px]">
                <a href="/Docs/CV.pdf" download="CV_TuNombre.pdf" className="bg-[#222] text-white py-[10px] px-[24px] rounded-lg font-medium transition-colors duration-300 hover:bg-[#333]">
                  Descargar CV
                </a>
                <div className="flex gap-[15px]">
                  <a href="https://github.com/Cyberking23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[8px] no-underline text-[#aaa] transition-colors duration-300 hover:text-white">
                    <img src="/Img/GithubWhite.svg" alt="Github" className="w-[30px] h-[30px]" />
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-none w-full md:w-[400px]">
              <div className="w-full h-[450px] bg-[#111] rounded-[24px] flex items-center justify-center text-[#444]">
                <span>Tu Foto Aquí</span>
              </div>
            </div>
          </section>

          <CarruselProyectos/>
          

          <section id="about" className="py-[80px] flex flex-col items-center text-center">
            <h2 className="text-[32px] font-semibold mb-[8px]">Sobre Mí</h2>
            <p className="text-[#aaa] max-w-[800px] mb-[40px] text-[15px]">
              Soy un estudiante de Ingeniería en Ciencias de la Computación apasionado por crear experiencias digitales limpias. Me enfoco en convertir ideas en sistemas funcionales entendiendo las necesidades operativas y asegurando interacciones fluidas en cualquier dispositivo.
            </p>

            <h3 className="text-[18px] mb-[24px] text-white">Mi Enfoque</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full mb-[50px]">
              <div className="bg-[#111] rounded-full py-[12px] px-[24px] flex items-center gap-[16px]">
                <span className="bg-[#ddd] text-black w-[30px] h-[30px] flex items-center justify-center rounded-full text-[12px] font-bold">01</span>
                <span>Análisis de Requerimientos</span>
              </div>
              <div className="bg-[#111] rounded-full py-[12px] px-[24px] flex items-center gap-[16px]">
                <span className="bg-[#ddd] text-black w-[30px] h-[30px] flex items-center justify-center rounded-full text-[12px] font-bold">02</span>
                <span>Desarrollo de Lógica Clara</span>
              </div>
              <div className="bg-[#111] rounded-full py-[12px] px-[24px] flex items-center gap-[16px]">
                <span className="bg-[#ddd] text-black w-[30px] h-[30px] flex items-center justify-center rounded-full text-[12px] font-bold">03</span>
                <span>Implementación Escalable</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-[30px] md:gap-[80px] mt-[20px]">
              <div>
                <h4 className="text-[40px] font-bold mb-[4px]">2+</h4>
                <p className="text-[#888] text-[14px]">Años de Experiencia</p>
              </div>
              <div>
                <h4 className="text-[40px] font-bold mb-[4px]">10+</h4>
                <p className="text-[#888] text-[14px]">Proyectos Creados</p>
              </div>
              <div>
                <h4 className="text-[40px] font-bold mb-[4px]">100%</h4>
                <p className="text-[#888] text-[14px]">Compromiso</p>
              </div>
            </div>
          </section>

          <Certificaciones />

          <section id="skills" className="py-[80px] flex flex-col items-center text-center">
            <h2 className="text-[32px] font-semibold mb-[8px]">Habilidades</h2>
            <p className="text-[#888] text-[14px] mb-[50px]">Herramientas y tecnologías que domino</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
              <div className="bg-[#111] border border-[#1a1a1a] rounded-[16px] p-[30px_24px] text-left flex flex-col">
                <h3 className="text-[18px] mb-[16px] font-semibold">Core Skills</h3>
                <div className="flex flex-wrap gap-[10px]">
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Arquitectura Web</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Resolución de Problemas</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Soporte Técnico</span>
                </div>
              </div>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-[16px] p-[30px_24px] text-left flex flex-col">
                <h3 className="text-[18px] mb-[16px] font-semibold">Frontend</h3>
                <div className="flex flex-wrap gap-[10px]">
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">HTML & CSS</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">JavaScript</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">React.js</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Tailwind CSS</span>
                </div>
              </div>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-[16px] p-[30px_24px] text-left flex flex-col">
                <h3 className="text-[18px] mb-[16px] font-semibold">Backend & BD</h3>
                <div className="flex flex-wrap gap-[10px]">
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">PHP & Laravel</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Node.js</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">MySQL</span>
                </div>
              </div>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-[16px] p-[30px_24px] text-left flex flex-col">
                <h3 className="text-[18px] mb-[16px] font-semibold">Herramientas</h3>
                <div className="flex flex-wrap gap-[10px]">
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Git / GitHub</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Linux</span>
                  <span className="bg-transparent border border-[#2a2a2a] text-[#aaa] py-[6px] px-[16px] rounded-full text-[12px]">Docker</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
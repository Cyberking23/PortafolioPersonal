import { CarruselProyectos } from './Components/CarruselProyectos';
import { Certificaciones } from './Components/Certificaciones';
import './App.css';
const App = () => {
  return (
    <div className="min-h-screen bg-[#050b14] text-slate-300 font-sans antialiased selection:bg-blue-500/30 selection:text-white">

      <div className="pt-6 px-4 md:px-8 w-full max-w-[1400px] mx-auto">
        <nav className="flex justify-between items-center bg-[#0e1629] border border-slate-800 rounded-full px-6 py-3 shadow-lg">
          <div className="font-bold text-white text-sm tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            Carlos Merino
          </div>
          <div className="hidden md:flex gap-8 text-[13px] font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Inicio</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#skills" className="hover:text-white transition-colors">Stack Técnico</a>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=merinoventura123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold text-[13px] px-5 py-2 rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            Contactar <span className="text-lg leading-none">→</span>
          </a>


        </nav>
      </div>

      <main className="max-w-[1400px] mx-auto px-4 md:px-8">

        <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh] py-12">
          <div className="flex flex-col items-start text-left">
            <div className="border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Desarrollador de Software Jr.
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
              Creando sistemas corporativos y <span className="text-blue-500">lógica escalable.</span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              Estudiante de Ingeniería en Ciencias de la Computación con experiencia en mantenimiento de sistemas, integración de APIs RESTful y gestión de bases de datos en producción.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=merinoventura123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2"
              >
                Trabajemos juntos <span className="text-xl leading-none">→</span>
              </a>
              <a href="/Docs/CV.pdf" download className="bg-[#0e1629] border border-slate-700 text-white font-medium px-6 py-3 rounded-lg hover:border-slate-500 transition-colors">
                Descargar CV
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center flex-1 w-full max-w-lg mx-auto group">

            <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

            <div className="relative bg-[#0b101c] border border-slate-800 rounded-3xl p-3 shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-blue-500/40 hover:-translate-y-1">

              <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800/60 mb-3 text-[10px] font-mono tracking-widest text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  CM_SYS.EXE
                </span>
                <span>SYS_READY // B2</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#080d1a]">
                <img
                  src="img/ImgAnimadaPersonal.jpg"
                  alt="Carlos Merino - Desarrollador de Software Jr."
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/40 to-transparent pointer-events-none"></div>
              </div>

              <div className="flex justify-between items-center px-4 pt-3 text-[9px] font-mono text-slate-500">
                <span>LATAM // ESA +503</span>
                <span>0x889F_ACTIVE</span>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full bg-[#0e1629] border border-slate-800 rounded-2xl p-8 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 shadow-lg">
          <div className="flex flex-col items-start lg:px-8 first:pl-0">
            <span className="text-[10px] text-slate-500 font-mono mb-2">01</span>
            <h4 className="text-3xl font-bold text-white mb-1">2+ Años</h4>
            <p className="text-xs text-slate-400">Trayectoria en TI y Dev</p>
          </div>
          <div className="flex flex-col items-start lg:px-8 pt-6 lg:pt-0">
            <span className="text-[10px] text-slate-500 font-mono mb-2">02</span>
            <h4 className="text-3xl font-bold text-white mb-1">ERPs / CRMs</h4>
            <p className="text-xs text-slate-400">Experiencia corporativa</p>
          </div>
          <div className="flex flex-col items-start lg:px-8 pt-6 lg:pt-0">
            <span className="text-[10px] text-slate-500 font-mono mb-2">03</span>
            <h4 className="text-3xl font-bold text-white mb-1">Full Stack</h4>
            <p className="text-xs text-slate-400">Despliegue end-to-end</p>
          </div>
          <div className="flex flex-col items-start lg:px-8 pt-6 lg:pt-0">
            <span className="text-[10px] text-slate-500 font-mono mb-2">04</span>
            <h4 className="text-3xl font-bold text-white mb-1">B2 (Avanzado)</h4>
            <p className="text-xs text-slate-400">Nivel de Idioma Inglés</p>
          </div>
        </section>

        <CarruselProyectos />

        <section id="skills" className="py-24 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-3 block">Stack Técnico</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Herramientas probadas para proyectos en producción.</h2>
            </div>
            <a href="https://github.com/Cyberking23" className="text-sm text-blue-400 hover:text-white transition-colors flex items-center gap-2">
              Ver perfil en GitHub <span className="text-lg">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01", title: "Front-End", desc: "Creación de interfaces modernas y componentes responsivos estructurados.",
                techs: ["HTML5 & CSS3", "JavaScript", "React Js", "Tailwind CSS"]
              },
              {
                num: "02", title: "Back-End", desc: "Lógica de servidores, creación de APIs y despliegue de módulos ERP.",
                techs: ["PHP / Laravel", "Node.js / Express", "Python","Java", "Lógica Algorítmica"]
              },
              {
                num: "03", title: "Bases de Datos", desc: "Administración, persistencia e integridad de datos en servidores en vivo.",
                techs: ["MySQL", "NoSQL", "Diseño Relacional", "Optimización SQL"]
              },
              {
                num: "04", title: "Herramientas", desc: "Control de versiones, pruebas de API y entornos aislados de desarrollo.",
                techs: ["Git / GitHub", "Docker", "Postman", "Soporte Técnico"]
              }
            ].map((cat, idx) => (
              <div key={idx} className="bg-[#0e1629] border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-blue-500/30 transition-colors">
                <span className="text-right text-[10px] font-mono text-slate-600 block mb-4">{cat.num}</span>
                <div className="w-10 h-10 rounded-lg bg-[#15203b] border border-slate-700 flex items-center justify-center mb-6">
                  <span className="text-blue-400">❖</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">{cat.desc}</p>

                <div className="space-y-2 border-t border-slate-800 pt-4">
                  {cat.techs.map((tech, tIdx) => (
                    <div key={tIdx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium">{tech}</span>
                      <span className="text-slate-600">→</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Certificaciones />

        <footer className="py-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
          <div className="font-bold text-white text-sm tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            Carlos Merino
          </div>
          <div className="text-slate-500 text-xs text-center md:text-right">
            © 2026 Carlos Merino. Tecnico en Ingeniería en Ciencias de la Computación.
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
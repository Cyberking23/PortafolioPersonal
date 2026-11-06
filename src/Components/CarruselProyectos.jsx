export function CarruselProyectos() {
  const proyectos = [
    {
      titulo: "Clon de Disney+",
      desc: "Réplica de la interfaz web de Disney+. Incluye catálogos dinámicos, previsualización de videos interactivos por franquicia y un diseño totalmente responsivo fiel a la plataforma original.",
      tags: ["React.js", "Vite", "JavaScript", "CSS"],
      img: "/img/PreviewImgDisneyClone.png",
      link: "https://cyberking23.github.io/React-DisneyClone/"
    },
    {
      titulo: "Clon de Spotify",
      desc: "Réplica de la interfaz web de Spotify. Incluye reproducción de música, listas de reproducción y un diseño moderno y responsivo.",
      tags: ["React.js", "Vite", "JavaScript", "CSS"],
      img: "/img/PreviewImgSpotifyClone.png",
      link: "https://cyberking23.github.io/React-SpotifyClone/"
    }

  ];

  return (
    <section id="projects" className="py-20 w-full">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ingeniería de software. Alcance claro.</h2>
        <p className="text-slate-400 text-sm">Desde el diseño de bases de datos hasta la interfaz del usuario.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {proyectos.map((proj, idx) => (
          <div key={idx} className="bg-[#0e1629] border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors group">
            <div className="w-full h-[240px] bg-[#080d1a] flex items-center justify-center border-b border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <img
                src={proj.img}
                alt={proj.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">{proj.titulo}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">{proj.desc}</p>

              <div className="flex flex-wrap items-center justify-between mt-auto gap-4">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-[#15203b] border border-slate-700 text-slate-300 py-1.5 px-3 rounded-md text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={proj.link} className="flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  Ver Plataforma
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
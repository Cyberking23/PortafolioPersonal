import React, { useState } from 'react';

export function Certificaciones() {
    const [index, setIndex] = useState(0);

    const slides = [
        [
            { titulo: "Técnico en Redes de Datos", institucion: "Fundación Carlos Slim", fecha: "Junio 2025", link: "/Certificaciones/TecnicoEnRedesDeDatos.pdf", previewImg: "/Certificaciones/TecnicoEnRedesDeDatos.pdf" },
            { titulo: "Desarrollador Backend", institucion: "Fundación Carlos Slim", fecha: "Junio 2024", link: "/Certificaciones/DesarolladorBackend.pdf", previewImg: "/Certificaciones/DesarolladorBackend.pdf" },
            { titulo: "Fundamentos de Bases de Datos", institucion: "Platzi", fecha: "Diciembre 2024", link: "/Certificaciones/FundamentoBaseDeDatos.pdf", previewImg: "/Certificaciones/FundamentoBaseDeDatos.pdf" }
        ],
        [
            { titulo: "Desarrollador Frontend", institucion: "Fundación Carlos Slim", fecha: "Junio 2024", link: "/Certificaciones/DesarrolladorFrontEnd.pdf", previewImg: "/Certificaciones/DesarrolladorFrontEnd.pdf" },
            { titulo: "Pensamiento Crítico para IA", institucion: "Platzi", fecha: "Mayo 2026", link: "/Certificaciones/PensamientoCriticoIA.pdf", previewImg: "/Certificaciones/PensamientoCriticoIA.pdf" },
            { titulo: "Administrador de Servidores", institucion: "Fundación Carlos Slim", fecha: "2026", link: "/Certificaciones/AdministradorDeServidores.pdf", previewImg: "/Certificaciones/AdministradorDeServidores.pdf" }
        ],
        [
            { titulo: "Programación Orientada a Objetos", institucion: "Fundación Carlos Slim", fecha: "2026", link: "/Certificaciones/ProgramacionOrientadaAObjetos.pdf", previewImg: "/Certificaciones/ProgramacionOrientadaAObjetos.pdf" },
            { titulo: "Curso de TypeScript", institucion: "Platzi", fecha: "2026", link: "/Certificaciones/Typescript.pdf", previewImg: "/Certificaciones/Typescript.pdf" },
            { titulo: "Claude para Programadores", institucion: "Platzi", fecha: "2026", link: "/Certificaciones/ClaudeParaProgramadores.pdf", previewImg: "/Certificaciones/ClaudeParaProgramadores.pdf" }
        ],
        [
            { titulo: "Fundamentos de Electrónica", institucion: "Platzi", fecha: "2026", link: "/Certificaciones/FundamentosElectronica.pdf", previewImg: "/Certificaciones/FundamentosElectronica.pdf" }
        ]
    ];

    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section id="certifications" className="py-20 flex flex-col w-full">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Validaciones Técnicas</h2>
                    <p className="text-slate-400 text-sm">Certificaciones, fundamentos e idiomas</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={prev} className="w-10 h-10 rounded-lg bg-[#0e1629] border border-slate-800 text-white hover:border-blue-500 transition-colors flex items-center justify-center">❮</button>
                    <button onClick={next} className="w-10 h-10 rounded-lg bg-[#0e1629] border border-slate-800 text-white hover:border-blue-500 transition-colors flex items-center justify-center">❯</button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {slides.map((slide, i) => (
                        <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full">
                            {slide.map((cert, j) => (
                                <div key={j} className="bg-[#0e1629] border border-slate-800 rounded-xl p-4 flex flex-col hover:border-blue-500/40 transition-colors">

                                    <div className="h-48 w-full bg-[#080d1a] rounded-lg mb-4 overflow-hidden border border-slate-800/50 relative">
                                        <div className="absolute inset-0 z-10 bg-transparent cursor-pointer" onClick={() => window.open(cert.link, '_blank')}></div>

                                        <object
                                            data={`${cert.previewImg}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                                            type="application/pdf"
                                            className="w-[calc(100%+20px)] h-[calc(100%+20px)] border-0 pointer-events-none"
                                        >
                                            <span className="text-slate-500 text-xs flex items-center justify-center h-full">PDF Preview</span>
                                        </object>
                                    </div>

                                    <h3 className="text-white text-sm font-bold mb-1 truncate">{cert.titulo}</h3>
                                    <p className="text-slate-500 text-xs mb-4">{cert.institucion}</p>
                                    <div className="mt-auto flex justify-between items-center">
                                        <span className="text-slate-400 text-xs">{cert.fecha}</span>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs font-semibold hover:text-blue-300 z-20">Ver ↗</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
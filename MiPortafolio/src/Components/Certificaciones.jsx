import React, { useState } from 'react';

export function Certificaciones() {
    const [index, setIndex] = useState(0);

    const slides = [
        [
            { titulo: "Desarrollador FrontEnd", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/DesarrolladorFrontEnd.pdf", previewImg: "/Certificaciones/DesarrolladorFrontEnd.pdf" },
            { titulo: "Desarrollador Backend", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/DesarolladorBackend.pdf", previewImg: "/Certificaciones/DesarolladorBackend.pdf" },
            { titulo: "Fundamentos de BD", fecha: "2025", link: "/Certificaciones/FundamentoBaseDeDatos.pdf", previewImg: "/Certificaciones/FundamentoBaseDeDatos.pdf" },
            { titulo: "Curso de TypeScript", fecha: "2026", link: "/Certificaciones/Typescript.pdf", previewImg: "/Certificaciones/Typescript.pdf" }
        ],
        [
            { titulo: "Prog. Orientada a Objetos", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/ProgramacionOrientadaAObjetos.pdf", previewImg: "/Certificaciones/ProgramacionOrientadaAObjetos.pdf" },
            { titulo: "Pensamiento Crítico para IA", fecha: "2026", link: "/Certificaciones/PensamientoCriticoIA.pdf", previewImg: "/Certificaciones/PensamientoCriticoIA.pdf" },
            { titulo: "Administrador de Servidores", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/AdministradorDeServidores.pdf", previewImg: "/Certificaciones/AdministradorDeServidores.pdf" },
            { titulo: "Técnico en Redes", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/TecnicoEnRedesDeDatos.pdf", previewImg: "/Certificaciones/TecnicoEnRedesDeDatos.pdf" }
        ],
        [
            { titulo: "Fundamentos de Electrónica", fecha: "2026", link: "/Certificaciones/FundamentosElectronica.pdf", previewImg: "/Certificaciones/FundamentosElectronica.pdf" }
        ]
    ];

    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section id="certifications" className="py-20 flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold mb-2 text-white">Certificaciones</h2>
            <p className="text-[#888] text-sm mb-12">Validaciones técnicas y académicas</p>

            {/* Contenedor fluido que ocupa el ancho disponible */}
            <div className="relative w-full px-[5%]">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-1000 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {slides.map((slide, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-full p-4 justify-items-center">
                                {slide.map((cert, j) => (
                                    <CardCertificacion key={j} {...cert} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={prev} className="w-12 h-12 absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#111] border border-[#222] rounded-full text-white hover:bg-[#222] z-10">❮</button>
                <button onClick={next} className="w-12 h-12 absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#111] border border-[#222] rounded-full text-white hover:bg-[#222] z-10">❯</button>
            </div>
        </section>
    );
}

function CardCertificacion({ titulo, institucion, fecha, link, previewImg }) {
    return (
        <div className="bg-[#111] border border-[#1a1a1a] rounded-3xl overflow-hidden flex flex-col h-[420px] w-full hover:border-[#444] transition-all hover:scale-[1.02]">
            
            <div className="h-[220px] w-full bg-[#0a0a0a] overflow-hidden relative">
                <iframe 
                    src={`${previewImg}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                    title={titulo} 
                    className="w-full h-full border-0 pointer-events-none"
                    scrolling="no"
                />
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-white text-lg font-bold mb-3 leading-tight">{titulo}</h3>
                <p className="text-[#888] text-sm mb-6">
                    {institucion === "Fundacion Carlos Slim" ? "Fundación Carlos Slim" : "Platzi"}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#222]">
                    <span className="text-[#aaa] text-xs font-medium">{fecha}</span>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-[#222] hover:bg-[#333] py-2 px-5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                        Ver ↗
                    </a>
                </div>
            </div>
        </div>
    );
}
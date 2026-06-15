import React, { useState } from 'react';

export function Certificaciones() {
    const [index, setIndex] = useState(0);

    const slides = [
        [
            { titulo: "Desarrollador FrontEnd", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/DesarrolladorFrontEnd.pdf" },
            { titulo: "Desarrollador Backend", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/DesarrolladorBackend.pdf" },
            { titulo: "Fundamentos de BD", fecha: "2025", link: "/Certificaciones/FundamentoBaseDeDatos.pdf" }
        ],
        [
            { titulo: "Curso de TypeScript", fecha: "2026", link: "/Certificaciones/Typescript.pdf" },
            { titulo: "Prog. Orientada a Objetos", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/ProgramacionOrientadaAObjetos.pdf" },
            { titulo: "Pensamiento Crítico para IA", fecha: "2026", link: "/Certificaciones/PensamientoCriticoIA.pdf" }
        ],
        [
            { titulo: "Administrador de Servidores", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/AdministradorDeServidores.pdf" },
            { titulo: "Técnico en Redes", institucion: "Fundacion Carlos Slim", fecha: "2026", link: "/Certificaciones/TecnicoEnRedesDeDatos.pdf" },
            { titulo: "Fundamentos de Electrónica", fecha: "2026", link: "/Certificaciones/FundamentosElectronica.pdf" }
        ]
    ];

    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="py-20 flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-2 text-white">Certificaciones</h2>
            <p className="text-[#888] text-sm mb-12">Validaciones técnicas y académicas</p>

            <div className="relative w-full max-w-6xl px-12">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-1000 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {slides.map((slide, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full p-4">
                                {slide.map((cert, j) => (
                                    <CardCertificacion key={j} {...cert} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={prev} className="w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-[#111] border border-[#222] rounded-full text-white hover:bg-[#222] z-10">❮</button>
                <button onClick={next} className="w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[#111] border border-[#222] rounded-full text-white hover:bg-[#222] z-10">❯</button>
            </div>
        </section>
    );
}

function CardCertificacion({ titulo, institucion, fecha, link }) {
    return (
        <div className="bg-[#111] border border-[#1a1a1a] rounded-3xl p-8 flex flex-col h-[280px] hover:border-[#333] transition-all hover:scale-105">
            <h3 className="text-white text-xl font-semibold mb-3 leading-tight">{titulo}</h3>

            <p className="text-[#888] text-base mb-6">
                {institucion === "Fundacion Carlos Slim" ? "Fundación Carlos Slim" : "Platzi"}
            </p>

            <div className="mt-auto flex items-center justify-between">
                <span className="bg-[#1a1a1a] text-[#aaa] py-2 px-4 rounded-full text-sm">{fecha}</span>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#222] hover:bg-[#333] py-2 px-4 rounded-full text-xs font-medium transition-all flex items-center gap-1"
                >
                    Ver Certificación ↗
                </a>
            </div>
        </div>
    );
}
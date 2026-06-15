export function CarruselProyectos() {
  return (
    <section id="projects" className="py-[80px] flex flex-col items-center text-center">
      <h2 className="text-[32px] font-semibold mb-[8px]">Proyectos Destacados</h2>
      <p className="text-[#888] text-[14px] mb-[50px]">Una selección de mi trabajo técnico y desarrollo de sistemas</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
        
        <div className="bg-[#111] border border-[#1a1a1a] rounded-[16px] overflow-hidden flex flex-col text-left transition-transform duration-300 hover:-translate-y-2 hover:border-[#333]">
          
          <div className="w-full h-[250px] bg-[#1e1e1e] flex items-center justify-center text-[#555] border-b border-[#1a1a1a]">
            <span>Captura del ERP / CRM</span>
          </div>

          <div className="p-[30px] flex flex-col flex-grow">
            <h3 className="text-[22px] font-semibold mb-[12px] text-white">Módulo ERP Contable & DTE</h3>
            <p className="text-[#aaa] text-[15px] mb-[24px] flex-grow">
              Desarrollo e implementación de módulos críticos para el sistema financiero de Intersys. Lógica de negocio estructurada para la gestión de documentos tributarios electrónicos (DTE).
            </p>
            
            <div className="flex flex-wrap gap-[10px] mb-[24px]">
              <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaa] py-[4px] px-[12px] rounded-full text-[12px]">Laravel</span>
              <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaa] py-[4px] px-[12px] rounded-full text-[12px]">PHP</span>
              <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaa] py-[4px] px-[12px] rounded-full text-[12px]">MySQL</span>
            </div>

            <div className="flex gap-[15px]">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#222] text-white py-[8px] px-[16px] rounded-lg text-[14px] font-medium transition-colors hover:bg-[#333]">
                Ver Código ↗
              </a>
            </div>
          </div>
        </div>

        

        <div className="bg-[#111] border border-[#1a1a1a] rounded-[16px] overflow-hidden flex flex-col text-left transition-transform duration-300 hover:-translate-y-2 hover:border-[#333]">
          
          <div className="w-full h-[250px] bg-[#1e1e1e] flex items-center justify-center text-[#555] border-b border-[#1a1a1a]">
            <span>Captura de Datos/Dashboard</span>
          </div>

          <div className="p-[30px] flex flex-col flex-grow">
            <h3 className="text-[22px] font-semibold mb-[12px] text-white">Sistema de Análisis Académico</h3>
            <p className="text-[#aaa] text-[15px] mb-[24px] flex-grow">
              Herramienta basada en datos para procesar históricos y hacer ingeniería inversa de horarios universitarios, permitiendo predecir la asignación de docentes basada en patrones.
            </p>
            
            <div className="flex flex-wrap gap-[10px] mb-[24px]">
              <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaa] py-[4px] px-[12px] rounded-full text-[12px]">Data Analysis</span>
              <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaa] py-[4px] px-[12px] rounded-full text-[12px]">Algoritmos</span>
              <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaa] py-[4px] px-[12px] rounded-full text-[12px]">Backend</span>
            </div>

            <div className="flex gap-[15px]">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#222] text-white py-[8px] px-[16px] rounded-lg text-[14px] font-medium transition-colors hover:bg-[#333]">
                Ver Código ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
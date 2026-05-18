'use client';

import ServicesCard from "../ui/services-card";
import StatsItem from "../ui/stats";


const Services = () => {
    return (
        <section id="servicios" className="bg-[var(--services)] w-full h-full">
            <div className="flex flex-col pt-10 md:pt-18 px-6 md:px-28">
                <h1 className="text-5xl text-gray-700 uppercase font-semibold pb-4 overflow-hidden" style={{ fontFamily: 'var(--font-oswald)' }}>Nuestros Servicios</h1>
                <p className="text-gray-700" style={{ fontFamily: "Inter" }}>Mas de 10 años brindando los mejores servicios dentales</p>
            </div>
            <div className="flex justify-center py-10">
                <ServicesCard />
            </div>
            <div className="flex justify-center py-10">
                <button 
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-md hover:bg-blue-700 transition" 
                    style={{ fontFamily: 'Inter' }}
                >
                    Consultar servicios
                </button>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 w-full bg-slate-100 h-full py-6 mt-18 border-t-1 border-slate-400 ">
                <StatsItem title="+10" text="Años de experiencia" />
                <StatsItem title="+100" text="Pacientes atendidos" style={"border-l-2 border-gray-300 border-r-2 border-gray-300"} />
                <StatsItem title="+99%" text="Satisfaccion garantizada" />
            </div>
        </section>
    );
};

export default Services;
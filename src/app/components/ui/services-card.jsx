import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const card = [{
    img: "/services/limpieza.jpg",
    title: "Limpieza Dental",
    description: "Limpieza dental profesional"
}, {
    img: "/services/ortodoncia.jpg",
    title: "Ortodoncia",
    description: "Tratamiento con brackets para alinear los dientes"
}, {
    img: "/services/caries.jpg",
    title: "Endodoncia",
    description: "Tratamiento para salvar el diente"
}, {
    img: "/services/implantes.jpg",
    title: "Implantes Dentales",
    description: "Reemplazo de dientes perdidos con implantes dentales"
}
]


const ServicesCard = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 w-full max-w-5xl mx-auto">
            {card.map((item, index) => (
                <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    className="group relative w-full h-[400px] rounded-[2rem] shadow-xl overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_24px_48px_rgba(0,0,0,0.38)] hover:-translate-y-3"
                >
                    <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"


                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-3">
                            {item.description}
                        </p>

                        <button className="w-full py-2 bg-black/30 text-white font-bold rounded-2xl">
                            Ver más
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default ServicesCard;
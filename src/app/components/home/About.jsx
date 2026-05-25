import Image from "next/image";
import AnimatedContent from "../ui/AnimatedContent";

const About = () => {
    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50/40 py-20 flex items-center border-b border-gray-200" id="about">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                {/* Header Section */}
                <AnimatedContent
                    direction="vertical"
                    distance={40}
                    duration={0.9}
                    ease="power3.out"
                    animateOpacity
                    threshold={0.2}
                >
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <h1 className="text-4xl md:text-5xl text-gray-700 font-semibold mb-4 uppercase tracking-tight"
                            style={{ fontFamily: 'var(--font-oswald)' }}>
                            Conócenos
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-medium" style={{ fontFamily: "Inter" }}>
                            El equipo profesional detrás de tu sonrisa
                        </p>
                    </div>
                </AnimatedContent>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <AnimatedContent
                        direction="horizontal"
                        reverse={true}
                        distance={80}
                        duration={1}
                        ease="power3.out"
                        animateOpacity
                        threshold={0.15}
                        delay={0.1}
                        className="w-full md:w-1/2 order-2 md:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-6" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>
                            Dr. y Dra. García
                        </h2>

                        <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>

                        <div className="text-gray-600 text-lg leading-relaxed space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <p>
                                Somos un equipo de odontólogos con más de 10 años de experiencia en el cuidado dental.
                                Nuestro equipo está conformado por dos profesionales apasionados por la salud y estética dental,
                                comprometidos en brindar una atención cercana, moderna y personalizada para cada paciente.
                            </p>
                            <p>
                                Trabajamos combinando experiencia, tecnología y un enfoque humano para ofrecer tratamientos seguros,
                                cómodos y adaptados a cada necesidad. Nuestro objetivo es que cada persona se sienta acompañada
                                durante todo el proceso, logrando sonrisas saludables y resultados de calidad.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Image Content */}
                    <AnimatedContent
                        direction="horizontal"
                        distance={80}
                        duration={1}
                        ease="power3.out"
                        animateOpacity
                        threshold={0.15}
                        delay={0.2}
                        className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
                    >
                        <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100">
                            <Image
                                src="/profesional.jpg"
                                alt="Profesionales de la clínica"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                            {/* Decorative gradient over the image for a premium feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>
                    </AnimatedContent>

                </div>
            </div>
        </section>
    );
};

export default About;

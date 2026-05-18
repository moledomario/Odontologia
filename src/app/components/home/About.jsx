import Image from "next/image";

const About = () => {
    return (
        <section className="w-full min-h-screen bg-white py-10" id="about">
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-5xl text-gray-700 font-semibold pb-4 uppercase pt-6"
                    style={{ fontFamily: 'var(--font-oswald)' }}>
                    Conocenos
                </h1>
                <p className="text-gray-700 mb-6" style={{ fontFamily: "Inter" }}>
                    El equipo detrás de tu sonrisa
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 px-6 md:px-12 mt-4">
                <div className="w-full md:w-[40%] rounded-xl">
                    <h2 className="text-3xl text-gray-700" style={{ fontFamily: 'Oswald' }}>Dr y Dra. Garcia</h2>
                    <span className="w-[80%] h-1 bg-blue-700 my-2 block"></span>
                    <p className="text-black text-justify" style={{ fontFamily: 'Inter' }}>
                        Somos un equipo de odontólogos con más de 10 años de experiencia en el cuidado dental.
                        Nuestro equipo está conformado por dos profesionales apasionados por la salud y estética dental,
                        comprometidos en brindar una atención cercana, moderna y personalizada para cada paciente.

                        Trabajamos combinando experiencia, tecnología y un enfoque humano para ofrecer tratamientos seguros, cómodos y adaptados a cada necesidad.
                        Nuestro objetivo es que cada persona se sienta acompañada durante todo el proceso, logrando sonrisas saludables y resultados de calidad.
                    </p>
                </div>
                <div className="w-full md:w-[40%] h-72 md:h-96 relative">
                    <Image
                        src="/profesional.jpg"
                        alt="Profesionales de la clinica"
                        fill
                        className="object-cover object-top rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;

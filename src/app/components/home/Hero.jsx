import ButtonAppointment from "../ui/button-appointment";
import WhatsappButton from "../ui/whatsapp-button";
import { WordRotate } from "../ui/word-rotate";

const Hero = () => {
    return (
        <section id="hero" className="relative w-full overflow-hidden">

            <div className="relative w-full h-[700px] md:h-[650px] bg-[url('/hero-img.jpg')] bg-cover bg-center flex items-center">

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20">
                    <div className="max-w-[700px]">
                        <h1 className="mt-[100px] md:mt-0 text-6xl md:text-6xl text-white tracking-[0.06em]" style={{ fontFamily: 'Oswald' }}>
                            Clinica Dental San Isídro
                            <br />
                            <span className="tracking-tight block mt-2 ">
                                <WordRotate
                                    words={["Cuidado", "Limpieza", "Estética"]}
                                    className="bg-gradient-to-r from-[#008ecc] to-[#00b4d8] bg-clip-text text-transparent"
                                />
                                <span className="bg-gradient-to-r from-[#008ecc] to-[#00b4d8] bg-clip-text text-transparent ml-2">
                                    Dental
                                </span>
                            </span>
                        </h1>
                        <p className="text-gray-200 mt-6 text-md md:text-md font-medium leading-relaxed max-w-[400px] opacity-90" style={{ fontFamily: "Inter" }}>
                            Transformá tu sonrisa con los mejores profesionales.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <ButtonAppointment sizes={'text-sm w-[200px] md:w-auto justify-center'} />
                            <WhatsappButton sizes={'w-[200px] md:w-auto justify-center'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
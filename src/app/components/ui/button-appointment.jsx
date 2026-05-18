import Image from "next/image";
const ButtonAppointment = ({ sizes = '' }) => {
    return (
        <button style={{ fontFamily: 'Inter' }} className={`px-6 py-4 bg-white border border-gray-200 text-gray-700  rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${sizes} `}>
            <div className="flex items-center">
                <span className="mr-2">Reserva un turno</span>
                <Image src="/icons/arrow.svg" alt="appointment" width={20} height={20} className="color-black" />
            </div>
        </button>
    );
};

export default ButtonAppointment;
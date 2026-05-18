'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ButtonAppointment from '../ui/button-appointment';

const navLinks = [
    { id: "hero", label: "Inicio" },
    { id: "servicios", label: "Tratamientos" },
    { id: "about", label: "Nosotros" },
    { id: "contacto", label: "Contacto" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="h-20 w-full fixed top-0 z-50 bg-white flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-200">
            <div>
                <Image src="/logo1.png" alt="logo" width={100} height={100} priority />
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center">
                <ul className="flex gap-6 text-gray-700">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button 
                                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })} 
                                className="text-lg hover:text-gray-500 transition-all duration-200 hover:border-b-2 border-blue-300"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="hidden md:block">
                <ButtonAppointment sizes="text-sm" />
            </div>

            {/* Mobile hamburger */}
            <button
                className="md:hidden p-2 text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50">
                    <ul className="flex flex-col py-4 px-6 gap-2 text-gray-700">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    className="block text-left w-full text-lg py-2 hover:text-gray-500 transition-colors"
                                    onClick={() => {
                                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                        setMenuOpen(false);
                                    }}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                        <li className="pt-3 pb-1">
                            <ButtonAppointment sizes="text-sm w-full justify-center" />
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;

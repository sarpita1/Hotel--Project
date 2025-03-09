import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter(); // Initialize router

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation('/')}> 
                    <img
                        src="/images/logo2.jpg"
                        alt="logo"
                        height={80}
                        width={200}
                        loading="lazy" // Optional: Use lazy loading
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <MenuItem icon={"🏅"} title="Become A Member" subtitle="Additional 10% off on stays" />
                    <MenuItem icon={"📞"} title="011-4000612" subtitle="Call us to book now" />
                    <MenuItem icon={"🌍"} title="English" dropdown />
                    <div className="flex ">
                        <button 
                            className="font-bold px-4 py-2 border-none  hover:bg-gray-200"
                            onClick={() => handleNavigation('/login')} 
                        >
                            Login
                        </button>
                        <button 
                            className="font-bold px-4 py-2 border-none  hover:bg-gray-200"
                            onClick={() => handleNavigation('/signup')} 
                        >
                            Signup
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex ">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg flex flex-col px-4 space-y-4 py-4">
                    <MenuItem icon={"🏅"} title="Become A Member" subtitle="Additional 10% off on stays" />
                    <MenuItem icon={"📞"} title="011-4000612" subtitle="Call us to book now" />
                    <MenuItem icon={"🌍"} title="English" dropdown />
                    <div className="flex flex-col space-y-3">
                        <button 
                            className="font-bold px-4 py-2 border rounded-lg hover:bg-gray-200"
                            onClick={() => handleNavigation('/login')} 
                        >
                            Login
                        </button>
                        <button 
                            className="font-bold px-4 py-2 border rounded-lg hover:bg-gray-200"
                            onClick={() => handleNavigation('/signup')} 
                        >
                            Signup
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

const MenuItem = ({ icon, title, subtitle, dropdown }:any) => (
    <div className="flex items-center space-x-2">
        <span className="text-xl">{icon}</span>
        <div>
            <p className="font-semibold">{title}</p>
            {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
        {dropdown && <span className="text-xl">▼</span>}
    </div>
);
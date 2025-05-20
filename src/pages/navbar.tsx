import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <Image src="/images/logo.webp" alt="logo" height={52} width={52} />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <MenuItem icon={"🏅"} title="Become A Member" subtitle="Additional 10% off on stays" />
                    <MenuItem icon={"🏠"} title="List Your Property" subtitle="Start earning in 30 mins" />
                    <MenuItem icon={"💼"} title="OYO for Business" subtitle="Trusted by 5000 Corporates" />
                    <MenuItem icon={"📞"} title="011-4000612" subtitle="Call us to book now" />
                    <MenuItem icon={"🌍"} title="English" dropdown={true} />
                    <div className="relative">
                        <button 
                            className="font-bold px-4 py-2 border-none hover:bg-gray-200"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Account ▼
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40">
                                <button 
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    onClick={() => handleNavigation('/login')} 
                                >
                                    Login
                                </button>
                                <button 
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    onClick={() => handleNavigation('/signup')} 
                                >
                                    Signup
                                </button>
                                <button 
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    onClick={() => handleNavigation('/signup')} 
                                >
                                    User Profile
                                </button>
                                <button 
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    onClick={() => handleNavigation('/payment-history')} 
                                >
                                    Transaction history
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg flex flex-col px-4 space-y-4 py-4">
                    <MenuItem icon={"🏅"} title="Become A Member" subtitle="Additional 10% off on stays" />
                    <MenuItem icon={"🏠"} title="List Your Property" subtitle="Start earning in 30 mins" />
                    <MenuItem icon={"💼"} title="OYO for Business" subtitle="Trusted by 5000 Corporates" />
                    <MenuItem icon={"📞"} title="011-4000612" subtitle="Call us to book now" />
                    <MenuItem icon={"🌍"} title="English" dropdown={true} />
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

const MenuItem = ({ icon, title, subtitle, dropdown }: { icon: string; title: string; subtitle?: string; dropdown?: boolean }) => (
    <div className="flex items-center space-x-2">
        <span className="text-xl">{icon}</span>
        <div>
            <p className="font-semibold">{title}</p>
            {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
        {dropdown && <span className="text-xl">▼</span>}
    </div>
);

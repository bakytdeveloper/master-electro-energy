import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Главная" },
        { path: "/services", label: "Услуги" },
        { path: "/projects", label: "Проекты" },
        { path: "/about", label: "О нас" },
        { path: "/contact", label: "Контакты" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-warm-500">
                    <span className="hidden md:inline">ОсОО "Энерго-Экспресс"</span>
                    <span className="md:hidden">Энерго-Экспресс</span>
                </h1>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-4 text-warm-500 font-medium">
                    {navItems.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`hover:text-warm-600 transition ${
                                location.pathname === path ? "font-semibold underline" : ""
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile burger */}
                <button
                    className="md:hidden text-warm-500 text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Меню"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-3 text-warm-600 font-medium">
                    {navItems.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className={`block hover:text-warm-700 transition ${
                                location.pathname === path ? "font-semibold underline" : ""
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
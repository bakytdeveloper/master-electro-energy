import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

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
                <h1 className="text-2xl font-bold text-warm-500">ОсОО "Энерго-Экспресс"</h1>
                <nav className="space-x-4 text-warm-500 font-medium">
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
            </div>
        </header>
    );
};

export default Header;

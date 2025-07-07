const Footer = () => {
    return (
        <footer className="bg-warm-100 text-gray-800 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-sm">
                    © {new Date().getFullYear()} ElectroEnergy. Все права защищены.
                </p>
                <div className="space-x-4 text-sm">
                    <a
                        href="https://wa.me/996701152020"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-600 hover:underline"
                    >
                        WhatsApp: +996 701 15 20 20
                    </a>
                    <span>|</span>
                    <a
                        href="mailto:info@electro-energy.kg"
                        className="text-warm-600 hover:underline"
                    >
                        info@electro-energy.kg
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
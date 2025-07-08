const Footer = () => {
    return (
        <footer className="bg-sand text-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-sm">
                    © {new Date().getFullYear()} ОсОО "Энерго-Экспресс".
                    {/*Все права защищены.*/}
                </p>
                <div className="space-x-4 text-sm">
                    <a
                        href="https://wa.me/996701152020"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:underline"
                    >
                        WhatsApp: +996 701 15 20 20
                    </a>
                    {/*<span>|</span>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
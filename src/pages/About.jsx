import aboutBg from "../assets/about-energy.jpg";

const About = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-fixed text-white"
            style={{ backgroundImage: `url(${aboutBg})` }}
        >
            {/* Затемнённый оверлей */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Контент с относительным позиционированием */}
            <div className="relative z-10 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-warm-500 mb-6">О нас</h2>
                    <p className="text-lg mb-6">
                        Мы — команда профессионалов в сфере электроэнергетики. Наша цель — создавать надёжные, безопасные и эффективные решения для объектов любой сложности.
                    </p>
                    <p className="text-md mb-4 font-semibold">
                        Мы специализируемся на:
                        <br />
                        — монтаже и наладке электрооборудования<br />
                        — строительстве ЛЭП и подстанций<br />
                        — лабораторных испытаниях и технической диагностике<br />
                        — разработке проектно-сметной документации
                    </p>
                    <p className="text-md mb-8">
                        Наш опыт, ответственность и внимание к деталям позволяют нам реализовывать проекты, соответствующие самым высоким стандартам.
                    </p>
                    <a
                        href="https://wa.me/996701152020"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block group"
                    >
                        <div className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-md hover:bg-white/20 transition-all duration-300 transform group-hover:scale-[1.02]">
                            <h3 className="text-xl font-semibold text-white mb-2">Связаться с нами</h3>
                            <p className="text-md">
                                <span className="md:hidden">
                                    📞 Телефон / WhatsApp:<br />
                                </span>
                                <span className="hidden md:inline">
                                    📞 Телефон / WhatsApp:{" "}
                                </span>
                                <span className="text-warm-200 underline font-semibold group-hover:text-white">
                                    +996 701 15 20 20
                                </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};


export default About;
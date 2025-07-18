import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import montageIcon from "../assets/icons/montage.png";
import testingIcon from "../assets/icons/testing.png";
import powerlineIcon from "../assets/icons/powerline.png";
import docsIcon from "../assets/icons/docs.png";

const services = [
    {
        icon: montageIcon,
        title: "Монтаж и наладка",
        description: "Профессиональный монтаж и пусконаладка электрооборудования любой сложности.",
    },
    {
        icon: testingIcon,
        title: "Лабораторные испытания",
        description: "Проведение измерений, испытаний и диагностики для обеспечения безопасности.",
    },
    {
        icon: powerlineIcon,
        title: "Строительство ЛЭП и подстанций",
        description: "Проектирование и реализация объектов энергетической инфраструктуры.",
    },
    {
        icon: docsIcon,
        title: "Проектно-сметная документация",
        description: "Разработка ПСД в соответствии с нормативами и техническими требованиями.",
    },
];

const Services = () => {

    return (
        <motion.section
            className="bg-sand py-4 px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <section className="bg-sand py-4 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-warm-500 mb-8 mt-10">Наши услуги</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        </motion.section>
    );
};

export default Services;

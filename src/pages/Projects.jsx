import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import powerline from "../assets/projects/powerline.png";
import substation from "../assets/projects/substation.png";
import testing from "../assets/projects/testing.png";

const projects = [
    {
        id: 1,
        title: "Монтаж подстанции 110 кВ",
        category: "Подстанции",
        image: substation,
        description: "Полный цикл монтажа и наладки оборудования подстанции.",
    },
    {
        id: 2,
        title: "Строительство ЛЭП 35 кВ",
        category: "ЛЭП",
        image: powerline,
        description: "Возведение линии электропередач в горной местности.",
    },
    {
        id: 3,
        title: "Испытания трансформаторов",
        category: "Испытания",
        image: testing,
        description: "Лабораторные испытания и диагностика оборудования.",
    },
];

const categories = ["Все", "Подстанции", "ЛЭП", "Испытания"];

const Projects = () => {
    const [filter, setFilter] = useState("Все");

    const filtered = useMemo(() => {
        return filter === "Все"
            ? projects
            : projects.filter((p) => p.category === filter);
    }, [filter]);

    return (
        <section className="bg-sand py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold text-warm-500 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.5 }}
                >
                    Наши проекты
                </motion.h2>

                <motion.div
                    className="flex justify-center gap-4 mb-8 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full border transition ${
                                filter === cat
                                    ? "bg-warm-400 text-white"
                                    : "bg-white text-warm-500"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-white/90 rounded-lg shadow-md overflow-hidden will-change-transform"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                whileHover={{ scale: 1.01 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="relative pt-[56.25%] bg-gray-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-0"
                                        loading="lazy"
                                        decoding="async"
                                        onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                                    />
                                </div>
                                <div className="p-4 text-left">
                                    <h3 className="text-xl font-semibold text-warm-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-700">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
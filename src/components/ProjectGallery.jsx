import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

const categories = ["Все", "Подстанции", "ЛЭП", "Испытания"];

const ProjectGallery = () => {
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Наши проекты
                </motion.h2>

                <motion.div
                    className="flex justify-center gap-4 mb-8 flex-wrap"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
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
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
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

export default ProjectGallery;

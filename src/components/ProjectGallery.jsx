import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";

const categories = ["Все", "Подстанции", "ЛЭП", "Испытания"];

const ProjectGallery = () => {
    const [filter, setFilter] = useState("Все");

    const filtered = filter === "Все"
        ? projects
        : projects.filter((p) => p.category === filter);

    return (
        <section className="bg-sand py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-warm-500 mb-6">Наши проекты</h2>

                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full border ${
                                filter === cat
                                    ? "bg-warm-400 text-white"
                                    : "bg-white text-warm-500"
                            } transition`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white/90 rounded-lg shadow-md overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-left">
                                <h3 className="text-xl font-semibold text-warm-500">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;

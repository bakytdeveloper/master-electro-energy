import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <motion.div
            className="bg-white/90 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
        >
            <img src={icon} alt={title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-warm-500 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
        </motion.div>
    );
};

export default ServiceCard;

import { motion } from "framer-motion";
import Services from "../pages/Services";

const ServicesSection = () => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <Services />
    </motion.section>
);

export default ServicesSection;

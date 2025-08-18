"use client";
import { motion } from "framer-motion";
import { projectLinks } from "../constants";
import ProjectGrid from "../components/ProjectGrid";

export default function BrigadePage() {
    const brigade = projectLinks.find((p) => p.href === "/brigade");

    if (!brigade) return null;

    return (
        <section id="brigade" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Heading */}
                <motion.h1
                    className="text-4xl font-goudy font-bold text-center text-gray-900 mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {brigade.label}
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-serif leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {brigade.description}
                </motion.p>

                {/* Project Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ProjectGrid projects={brigade.projects} />
                </motion.div>
            </div>
        </section>
    );
}

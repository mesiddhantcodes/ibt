"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectLinks } from "../constants";

export default function BrigadePage() {
    const brigade = projectLinks.find((p) => p.href === "/brigade");
    if (!brigade || !brigade.cases) return null;

    return (
        <section id="brigade" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main Heading */}
                <motion.h1
                    className="text-4xl font-goudy font-bold text-center text-gray-900 mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {brigade.label}
                </motion.h1>

                {/* Main Description */}
                <motion.p
                    className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16 font-merri leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {brigade.description}
                </motion.p>

                {/* Project Cases */}
                <div className="space-y-20">
                    {brigade.cases.map((projCase, caseIdx) => (
                        <motion.div
                            key={caseIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: caseIdx * 0.2 }}
                            className="space-y-8"
                        >
                            {/* Case Title */}
                            <h2 className="text-2xl font-bold font-goudy text-gray-900 text-center">
                                {projCase.title}
                            </h2>
                            <p className="text-center text-gray-600 font-merri max-w-2xl mx-auto ">
                                {projCase.description}
                            </p>

                            {/* Grid of images */}
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {projCase.projects.map((project, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={600}
                                            height={400}
                                            className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center ">
                                            <p className="text-white text-lg font-goudy font-bold">{project.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

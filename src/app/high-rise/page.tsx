"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { residentalsLink } from "../constants";

export default function BrigadePage() {
    const brigade = residentalsLink.find((p) => p.href === "/high-rise");
    if (!brigade || !brigade.cases) return null;

    return (
        <section id="brigade" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h1
                    className="text-4xl font-goudy font-bold text-center text-gray-900 mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {brigade.label}

                </motion.h1>


                <motion.p
                    className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16 font-merri leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {brigade.description}

                </motion.p>

                <div className="space-y-20 ">
                    {brigade.cases.map((projCase, caseIdx) => {
                        const count = projCase.projects.length;
                        return (
                            <motion.div
                                key={caseIdx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: caseIdx * 0.2 }}
                                className="space-y-2"
                            >

                                <h2 className="text-2xl font-bold font-goudy text-gray-900 text-center">
                                    {projCase.title}

                                </h2>

                                <p className="text-center font-goudy text-lg md:text-xl text-gray-600  max-w-2xl mx-auto ">
                                    {projCase.description}
                                    {/* <TitleLine w="w-24" h="h-1" /> */}

                                </p>

                                <div className={`p-4 gap-8 grid ${count === 1
                                    ? "grid-cols-1 justify-items-center max-w-md mx-auto"
                                    : count === 2
                                        ? "grid-cols-1 sm:grid-cols-2 justify-items-center max-w-5xl mx-auto"
                                        : "sm:grid-cols-2 lg:grid-cols-3"
                                    }`}>
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
                                                <p className="text-white text-md text-center font-goudy font-bold">{project.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

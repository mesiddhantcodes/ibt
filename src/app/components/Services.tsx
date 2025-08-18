"use client";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaDraftingCompass, FaFileContract, FaSearchLocation, FaChartLine, FaShieldAlt } from "react-icons/fa";
import Divider from "./Divider";

export default function Services() {
    const items = [
        { icon: <FaProjectDiagram className="text-teal-500 text-3xl" />, title: "Development Management", text: "Complete development and monitoring services from initiation to completion with efficiency and transparency." },
        { icon: <FaDraftingCompass className="text-teal-500 text-3xl" />, title: "Master Planning & Design", text: "Comprehensive master planning and architectural design for all real estate asset classes." },
        { icon: <FaFileContract className="text-teal-500 text-3xl" />, title: "Cost & Contract Management", text: "Expertise in budgeting, procurement, and contract management to ensure timely and cost-effective execution." },
        { icon: <FaSearchLocation className="text-teal-500 text-3xl" />, title: "Technical Due Diligence", text: "Analysis and feasibility studies for land and property acquisitions and developments." },
        { icon: <FaChartLine className="text-teal-500 text-3xl" />, title: "Asset Management", text: "Lifecycle asset management and value enhancement strategies tailored to stakeholder objectives." },
        { icon: <FaShieldAlt className="text-teal-500 text-3xl" />, title: "Quality & Safety", text: "Uncompromising attention to construction quality, safety measures, and site management practices." }
    ];

    return (
        <section id="services" className="py-28 pb-0 bg-gradient-to-b ">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl font-goudy font-bold text-center text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Services
                </motion.h2>
                <motion.p
                    className="mt-4 text-center 
                     text-gray-600 max-w-2xl mx-auto font-merri"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Delivering excellence through innovation, expertise, and unwavering commitment to quality.
                </motion.p>

                {/* Services Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((s, idx) => (
                        <motion.div
                            key={s.title}
                            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <div className="mb-4">{s.icon}</div>
                            <h3 className="font-semibold text-xl text-gray-800 font-merri">{s.title}</h3>
                            <p className="mt-3 text-gray-600 font-serif leading-relaxed">{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Divider />
            </motion.div>
        </section>
    );
}

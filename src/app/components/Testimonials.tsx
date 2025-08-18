"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Divider from "./Divider";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Rajiv Sharma",
            role: "Real Estate Developer",
            quote:
                "IBT provided us with complete clarity and professional handling of our project. Their team is incredibly knowledgeable and passionate.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Anita Verma",
            role: "Architect & Consultant",
            quote:
                "From planning to execution, the entire process was managed seamlessly. We highly recommend IBT for any construction or design needs.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Dr. Sandeep Gupta",
            role: "Hospital Administrator",
            quote:
                "Their commitment to quality and safety helped us deliver our hospital project ahead of schedule.",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-b pb-0 ">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                {/* Heading */}
                <motion.h2
                    className="text-4xl font-goudy font-bold text-center text-gray-900 mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What Our Clients Say
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Our clients’ satisfaction is at the heart of everything we do.
                </motion.p>

                {/* Testimonials Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Profile Image */}
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Quote */}
                            <p className="mt-4 text-gray-700 italic leading-relaxed">
                                “{t.quote}”
                            </p>

                            {/* Name */}
                            <h3 className="mt-6 font-semibold text-gray-900 text-lg">
                                {t.name}
                            </h3>
                            <span className="text-sm text-gray-500">{t.role}</span>

                            {/* Decorative underline */}
                            <span className="mt-4 block w-12 h-[3px] bg-teal-500 rounded-full"></span>
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

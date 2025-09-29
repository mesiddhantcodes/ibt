"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Divider from "./Divider";

export default function Showcase() {
    const images = [
        // { src: "/images/century/bolli1.jpg", label: "BOLLINENI COUNTY" },
        { src: "/images/brigade/zion1.jpg", label: "Bollineni Zion Phase 1" },
        { src: "/images/brigade/zion2.jpg", label: "Bollineni Zion " },
        { src: "/images/mantri/biiion.jpg", label: "Bollineni Hillside" },
        { src: "/images/mantri/bion1.jpg", label: "Bollineni Hillside" },
        { src: "/images/mantri/bion4.jpg", label: "Bollineni Hillside" },
        // { src: "/images/brigade/woodrose.jpg", label: "Corporate Office Design" },
        // { src: "/images/brigade/techpark.jpg", label: "Premium Retail Interior" },
        // { src: "/images/brigade/metropolis3.jpg", label: "Clubhouse & Amenities" },
    ];

    const list = [...images, ...images];

    return (
        <section id="showcase" className="py-28 pb-0">
            {/* Heading */}
            <motion.h2
                className="text-4xl font-goudy font-bold text-center text-gray-900 mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Our Work in Action
            </motion.h2>

            {/* Subheading */}
            <motion.p
                className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                A glimpse into the projects we’ve passionately crafted with precision and creativity.
            </motion.p>

            {/* Scrolling Gallery */}
            <div className="overflow-hidden relative">
                <motion.div
                    className="flex gap-6 scrolling-track"
                    initial={{ x: 0 }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {list.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className="relative min-w-[320px] md:min-w-[420px] rounded-lg overflow-hidden shadow-lg group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.label}
                                width={900}
                                height={500}
                                className="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-white text-lg font-semibold text-center">{img.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Note */}
            <p className="mt-8 text-sm text-center text-gray-500 italic">
                All visuals represent our delivered and ongoing projects.
            </p>
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

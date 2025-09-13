"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return (
        <motion.footer
            className="bg-[#39DFCB] shadow-md text-white py-6 sm:py-8 md:py-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-sm sm:text-base">

                {/* Left text */}
                <p className="font-serif text-center md:text-left">
                    © {year ?? ""} Infinite Buildings Technologies
                </p>

                {/* Right text */}
                <p className="italic font-serif text-center md:text-right">
                    Powered by{" "}
                    <span className="not-italic font-semibold">
                        Infinite Building Technologies
                    </span>
                </p>
            </div>
        </motion.footer>
    );
}

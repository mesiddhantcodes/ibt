"use client";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="bg-ibtTeal shadow-md text-white bg-[#39DFCB] py-10 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-base">
                {/* Left text */}
                <p className="font-serif">
                    Copyright © {new Date().getFullYear()} Infinite Buildings Technologies
                </p>

                {/* Right text */}
                <p className="italic font-serif mt-2 md:mt-0">
                    Powered by{" "}
                    <span className="not-italic font-semibold">
                        Infinite Building Technologies
                    </span>
                </p>
            </div>
        </motion.footer>
    );
}

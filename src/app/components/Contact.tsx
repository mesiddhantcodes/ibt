"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt size={24} />,
            title: "Address",
            text: `Embassy WeWork Galaxy, 1st Floor, 43, Residency Rd,
Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025`,
        },
        {
            icon: <FaCalendarAlt size={24} />,
            title: "Working Hours",
            text: "Weekdays ...... 10 AM to 7 PM",
        },
        {
            icon: <FaPhoneAlt size={24} />,
            title: "Phone",
            text: "+91 97403 23934",
        },
        {
            icon: <FaEnvelope size={24} />,
            title: "Email",
            text: "shobha@infinitebuildingtechnologies.com",
        },
    ];

    return (
        // <div className="max-w-7xl mx-auto px-6 lg:px-0">

        <section id="contact" className="py-20 max-w-7xl mx-auto px-6 lg:px-0  ">
            <motion.h2
                className="text-4xl font-goudy font-bold text-center mb-12 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Contact Us
            </motion.h2>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
                {contactInfo.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-ibtTeal text-white bg-[#39DFCB] rounded-full shadow-md mb-4">
                            {item.icon}
                        </div>

                        {/* Text */}
                        <p className="text-gray-700 font-serif whitespace-pre-line">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

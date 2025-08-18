"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion"
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
    const images = [
        "/images/ascendas.jpg",
        "/images/gateway8.jpg",
        "/images/CENTRAL.jpg",
    ]


    return (
        <section className="relative w-full h-[80vh] mt-12">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop
                className="w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${src})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <motion.div
                className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-16 z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg max-w-3xl">
                    Infinite Building Technologies
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow">
                    Your Partner in End-to-End Real Estate Design, Monitoring, and Development Management
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#services"
                        className="bg-ibtTeal text-ibtBlue px-6 py-2 rounded font-semibold hover:opacity-90 transition"
                    >
                        Explore Our Services
                    </a>
                    <a
                        href="#contact"
                        className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-ibtBlue transition"
                    >
                        Contact Us
                    </a>
                </div>
            </motion.div>
        </section>
    );
}


// <div className="absolute inset-0 flex flex-col justify-center items-center text-left px-4 z-10">
//                 <h1 className="text-4xl font-goudy md:text-6xl font-bold text-white drop-shadow-lg">
//                     Infinite Building Technologies
//                 </h1>
//                 <p className="mt-4 text-lg md:text-xl font-merri text-gray-200 max-w-2xl drop-shadow">
//                     Your Partner in End-to-End Real Estate Design, Monitoring, and Development Management
//                 </p>
//                 <div className="mt-8 flex flex-wrap justify-center gap-4">
//                     <a
//                         href="#services"
//                         className="bg-ibtTeal text-ibtBlue px-6 py-2 rounded font-semibold hover:opacity-90 transition"
//                     >
//                         Explore Our Services
//                     </a>
//                     <a
//                         href="#contact"
//                         className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-ibtBlue transition"
//                     >
//                         Contact Us
//                     </a>
//                 </div>
//             </div>
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

interface Project {
    name: string;
    description: string;
    image: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    const isTwoOrLess = projects.length <= 2;

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={25}
                slidesPerView={isTwoOrLess ? "auto" : 1}
                centeredSlides={isTwoOrLess}
                navigation={!isTwoOrLess}
                pagination={{ clickable: true }}
                autoplay={
                    !isTwoOrLess
                        ? { delay: 3500, disableOnInteraction: false }
                        : false
                }
                breakpoints={
                    !isTwoOrLess
                        ? {
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }
                        : {}
                }
                className="pb-12"
            >
                {projects.map((proj, idx) => (
                    <SwiperSlide
                        key={proj.name}
                        className={isTwoOrLess ? "max-w-md" : ""} // 👈 restrict width when 2
                    >
                        <ParallaxCard project={proj} index={idx} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function ParallaxCard({ project, index }: { project: Project; index: number }) {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * 10;
        const rotateY = ((x / rect.width) - 0.5) * -10;
        setTransform({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                transition: "transform 0.2s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl"
        >
            <div className="relative w-full h-64 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
                    <h2 className="text-lg font-bold text-white">{project.name}</h2>
                    <p className="text-gray-200 text-sm mt-1">{project.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

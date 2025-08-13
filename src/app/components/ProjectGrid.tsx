"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
    name: string;
    description: string;
    image: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {projects.map((proj) => (
                    <SwiperSlide key={proj.name}>
                        <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <Image
                                src={proj.image}
                                alt={proj.name}
                                width={500}
                                height={300}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-bold text-lg text-ibtBlue">{proj.name}</h2>
                                <p className="text-gray-600 text-sm mt-2">{proj.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
    const slides = [
        {
            image: "/images/ascendas.jpg",
            title: "Infinite Building Technologies",
            subtitle:
                "Your Partner in End-to-End Real Estate Design, Monitoring, and Development Management",
            button1: { text: "Explore Our Services", link: "#services" },
            button2: { text: "Contact Us", link: "#contact" },
        },
        {
            image: "/images/gateway8.jpg",
            title: "Sustainable Design Solutions",
            subtitle:
                "We deliver economical and sustainable designs for all real estate asset classes.",
            button1: { text: "Learn More", link: "#about" },
            button2: { text: "Get in Touch", link: "#contact" },
        },
        {
            image: "/images/CENTRAL.jpg",
            title: "Quality and Safety First",
            subtitle:
                "Committed to unmatched construction quality and safety standards.",
            button1: { text: "Our Projects", link: "#showcase" },
            button2: { text: "Work With Us", link: "#contact" },
        },
    ];

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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-white">
                                    {slide.title}
                                </h1>
                                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
                                    {slide.subtitle}
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <a
                                        href={slide.button1.link}
                                        className="bg-ibtTeal text-ibtBlue px-6 py-2 rounded font-semibold hover:opacity-90 transition"
                                    >
                                        {slide.button1.text}
                                    </a>
                                    <a
                                        href={slide.button2.link}
                                        className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-ibtBlue transition"
                                    >
                                        {slide.button2.text}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

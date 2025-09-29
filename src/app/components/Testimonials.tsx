"use client";
import { motion } from "framer-motion";
import Divider from "./Divider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Vivek Uthaiah",
      role: "Partner, Studio30 Architects and Planners",
      quote:
        "I have been professionally associated with Shobha N V over two decades in a wide range of projects. She brings innovative Real estate trends, Project adaptive processes which are grounded and sustainable.",
    },
    {
      name: "Manjunath Tv",
      role: "Chief Executive Officer at BSCPL Infrastructure Ltd",
      quote:
        "She is a highly committed and capable leader who ensures quality results with courage and conviction. With expertise across the entire real estate development cycle.",
    },
    {
      name: "BO Prasanna Kumar",
      role: "Jt. Managing Director, DesignTree Service Consultants Pvt Ltd",
      quote:
        "Shobha consistently demonstrates professionalism, attention to detail, and a remarkable ability to manage complex projects. Knowledge on MEPF systems & sustainable design is exceptional.",
    },
    {
      name: "Gururaj Thali",
      role: "CMD Innotech Engineering Consult Pvt Ltd",
      quote:
        "Ms. Shobha is a well-organized engineer with vast talent and a zeal to work effectively with all stakeholders. A dynamic and proactive leader.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
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

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          speed={1200} // slow transition like Amazon
          className="pb-10"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-white rounded-2xl p-8 mb-6 shadow-md border border-gray-100 flex flex-col items-center text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  “{t.quote}”
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {t.name}
                  </h3>
                  <span className="text-sm text-gray-500">{t.role}</span>
                  <span className="mt-3 block w-12 h-[3px] bg-teal-500 rounded-full mx-auto"></span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <Divider />
      </motion.div>
    </section>
  );
}

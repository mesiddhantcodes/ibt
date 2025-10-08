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
      name: "BO Prasanna Kumar",
      role: "Jt. Managing Director, DesignTree Service Consultants Pvt Ltd",
      quote:
        "Shobha consistently demonstrates professionalism, attention to detail, and a remarkable ability to manage complex projects. Her friendly demeanour and excellent communication skills make her a joy to work with. Knowledge on MEPF systems & standards is exceptional, focus on sustainable design is an added advantage. Process driven approach towards coordination with all stakeholders. Rare combination of practical and design know how with focus on quality is commendable. Her exceptional project coordination skills have been invaluable to success of project."
    },
    {
      name: "Vivek Uthaiah",
      role: "Partner, Studio30 Architects and Planners",
      quote:
        "I have been professionally associated with Shobha N V over two decades in a wide range of projects. She brings innovative Real estate trends, Project adaptive processess which are grounded and sustainable. These aspects are beneficial for all stakeholder of our projects."
    },
    {
      name: "Manjunath Tv",
      role: "Chief Executive Officer at BSCPL Infrastructure Ltd",
      quote:
        [
          "Highest commitment is shown on any work which is taken up.",
          "A good leader who can get the work done with parameters, assures the quality of work to a great extent, and handles people with courage. Convincing capabilities are strong.",
          "Takes information and knowledge from one and all, incorporating modifications to get better results.",
          "She can handle total real estate development starting from business development to project completion — excellent in designing, coordination, contracts, purchase, and execution.",
          "Thorough in regulatory requirements.",
          "In a nutshell, she can spearhead any organization. Having started her own consulting firm, it is a pleasure working with her. Desired results are assured."
        ]
    },

    {
      name: "Gururaj Thali",
      role: "CMD Innotech Engineering Consult Pvt Ltd",
      quote: [
        "Ms Shobha is a very well organised engineer with vast talent and zeal to work effectively with all the stakeholders.",
        "Capable leader who can handle Urban Planning / Master planning.",
        "Ability to connect the design with costing is an added advantage.",
        "The structural systems knowledge is good and effective, open to new ideas.",
        "Coordination with all consultants is smooth and result oriented.",
        "A very dynamic, proactive approach to managing the work environment and a successful one too in the male dominated industry.",
        "Wishing her all the best."
      ]
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-goudy font-bold text-center text-gray-900 mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our clients’ satisfaction is at the heart of everything we do.
        </motion.p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          speed={1200}
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
                {Array.isArray(t.quote) ? (
                  <ul className="list-disc text-gray-700 text-left ml-6 space-y-2">
                    {t.quote.map((point, i) => (
                      <li key={i} className="italic color-teal-500">{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 italic leading-relaxed text-lg">
                    “{t.quote}”
                  </p>
                )}

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

"use client";
import { motion } from "framer-motion";
import Divider from "./Divider";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Vivek Uthaiah",
      role: "Partner, Studio30 Architects and Planners",
      quote:
        "I have been professionally associated with Shobha N V over two decades in a wide range of projects. She brings innovative Real estate trends, Project adaptive processes which are grounded and sustainable. These aspects are beneficial for all stakeholders of our projects.",
    },
    {
      name: "Manjunath Tv",
      role: "Chief Executive Officer at BSCPL Infrastructure Ltd",
      quote:
        "She is a highly committed and capable leader who ensures quality results with courage and conviction. With expertise across the entire real estate development cycle — from business development to project completion — and thorough knowledge of regulatory requirements, she can confidently spearhead any organization or consulting firm.",
    },
    {
      name: "BO Prasanna Kumar",
      role: "Jt. Managing Director, DesignTree Service Consultants Pvt Ltd",
      quote:
        "Shobha consistently demonstrates professionalism, attention to detail, and a remarkable ability to manage complex projects. Her friendly demeanour and excellent communication skills make her a joy to work with. Knowledge on MEPF systems & standards is exceptional, focus on sustainable design is an added advantage.",
    },
    {
      name: "Gururaj Thali",
      role: "CMD Innotech Engineering Consult Pvt Ltd",
      quote:
        "Ms. Shobha is a well-organized engineer with vast talent and a zeal to work effectively with all stakeholders. She is a capable leader who can handle Urban Planning and Master Planning, with the added ability to connect design with costing for better efficiency.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        {/* Static Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed text-base">
                “{t.quote}”
              </p>

              {/* Person */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {t.name}
                </h3>
                <span className="text-sm text-gray-500">{t.role}</span>
                <span className="mt-3 block w-12 h-[3px] bg-teal-500 rounded-full"></span>
              </div>
            </motion.div>
          ))}
        </div>
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

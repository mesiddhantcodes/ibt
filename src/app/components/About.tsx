"use client";
import { motion } from "framer-motion";
import Divider from "./Divider";

export default function About() {
    return (
        <section id="about" className="relative py-28 bg-gradient-to-b pb-0 ">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">

                {/* Heading */}
                <motion.h2
                    className="text-4xl font-goudy font-bold text-center text-gray-900 mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Who We Are
                </motion.h2 >

                {/* Subheading */}
                <motion.h6
                    className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Building excellence with innovation, experience, and trust.
                </motion.h6>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Paragraphs */}
                    <motion.div
                        className="space-y-6 text-gray-700 leading-relaxed font-serif"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        {[
                            `Infinite Building Technologies (IBT) is a professionally managed real estate services company with expertise in the design of Residential, Commercial, IT, Retail, Hotel, and Hospital buildings. We provide complete development management and monitoring services from start to finish, delivering economical and sustainable design solutions with a strong focus on quality and safety.`,
                            `Our expertise covers master planning, architecture, structural, MEP, and landscape works. Established by professionals with over 75+ years of combined experience in land development, design and cost management, IBT is driven by transparency, efficiency, and a personalized approach to project delivery.`,
                            `We strive to be the trusted partner for landowners, helping unlock the full potential of their land with optimal cost and sustainable design backed by expert project monitoring.`
                        ].map((para, idx) => (
                            <motion.p key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                {para}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* Right Column - Services List */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <ul className="space-y-3 text-gray-700 font-serif">
                            {[
                                "Technical Due Diligence of Land and Properties",
                                "Feasibility and Market Studies",
                                "Master Planning and Design Services",
                                "Budgeting and Budget Control",
                                "Contracts and Procurement Management",
                                "Billing & Certification",
                                "Development and Asset Management"
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                >
                                    <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        {/* <p className="mt-6 text-sm text-gray-500 italic text-center">
                            This section is based on the official IBT consultancy profile.
                        </p> */}
                    </motion.div>
                </div>
            </div>

            {/* Animated Divider */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Divider />
            </motion.div>
        </section>
    );
}



// import Divider from "./Divider";

// export default function About() {
//     return (
//         <section id="about" className="relative py-20 bg-gradient-to-b ">
//             <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                 <h2 className="text-4xl font-bold font-goudy text-center text-gray-900 mb-4 tracking-tight">
//                     Who We Are
//                 </h2>
//                 <h6 className="font-goudy text-center text-xl text-gray-600 max-w-2xl mx-auto mb-12">
//                     Building excellence with innovation, experience, and trust.
//                 </h6>

//                 <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <div className="font-merri italic
//                      space-y-6 text-gray-700 leading-relaxed">
//                         <p className="text-base">
//                             <strong>Infinite Building Technologies (IBT)</strong> is a professionally managed real estate services company
//                             with expertise in the design of Residential, Commercial, IT, Retail, Hotel, and Hospital buildings.
//                             We provide complete development management and monitoring services from start to finish, delivering
//                             economical and sustainable design solutions with a strong focus on quality and safety.
//                         </p>
//                         <p className="text-base">
//                             Our expertise covers master planning, architecture, structural, MEP, and landscape works.
//                             Established by professionals with over <strong>75+ years of combined experience</strong> in land development,
//                             design and cost management, IBT is driven by transparency, efficiency, and a personalized
//                             approach to project delivery.
//                         </p>
//                         <p className="text-base">
//                             We strive to be the trusted partner for landowners, helping unlock the full potential of their
//                             land with optimal cost and sustainable design backed by expert project monitoring.
//                         </p>
//                     </div>

//                     {/* Right Column */}
//                     <div className="bg-white p-6 rounded-xl ">
//                         <ul className="space-y-3 font-merri text-gray-700">
//                             <li className="flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
//                                 Technical Due Diligence of Land and Properties
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
//                                 Feasibility and Market Studies
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
//                                 Master Planning and Design Services
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
//                                 Budgeting and Budget Control
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
//                                 Contracts and Procurement Management
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
//                                 Billing & Certification
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
//                                 Development and Asset Management
//                             </li>
//                         </ul>
//                         <p className="mt-6 font-merri text-sm text-gray-500 italic text-center">
//                             This section is based on the official IBT consultancy profile.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Decorative Bar at Bottom */}
//             <Divider />
//         </section >
//     );
// }

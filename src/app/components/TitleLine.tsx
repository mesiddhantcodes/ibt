// "use client";
// import { motion } from "framer-motion";

// export default function TitleLine({ }) {
//     return (
//         <motion.div
//             initial={{ scaleX: 0, opacity: 0 }}
//             whileInView={{ scaleX: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="w-16 h-[3px] bg-[#2AB8A7] mx-auto mt-2 rounded-full"
//         />
//     );
// }
"use client";
import { motion } from "framer-motion";

interface TitleLineProps {
  w?: string;
  h?: string; 
  align?: "left" | "center"; 
  color?: string; 
}

export default function TitleLine({
  w = "w-16",
  h = "h-[3px]",
  align = "center",
  color = "bg-[#2AB8A7]",
}: TitleLineProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${w} ${h} ${color} ${
        align === "center" ? "mx-auto" : "ml-0"
      } mt-2 rounded-full`}
    />
  );
}

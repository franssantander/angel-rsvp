"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Person = {
  name: string;
};

const chunkArray = (arr: Person[], size: number) => {
  const result: Person[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// Container for stagger animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Fade-in effect on scroll
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Parts({
  title,
  img,
  data,
}: {
  title: string;
  img: string;
  data: Person[];
}) {
  const columns = chunkArray(data || [], 6);

  return (
    <section className="relative h-full py-24 w-full md:py-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={img}
          fill
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-y-14 items-center justify-center min-h-screen text-center px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#FFCC00] text-2xl font-bold mb-8 lg:text-[4rem] font-dancing-script"
        >
          {title}
        </motion.h1>

        {/* Names */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`grid gap-6 max-w-4xl mx-auto w-full text-center
        ${columns.length === 1 ? "grid-cols-1" : ""}
        ${columns.length === 2 ? "grid-cols-2" : ""}
        ${columns.length >= 3 ? "md:grid-cols-3" : ""}`}
        >
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map((dat, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ x: 8, color: "#FFCC00" }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="max-w-xs mx-auto cursor-pointer"
                >
                  <h1 className="text-base text-white md:text-lg font-medium transition-colors duration-300">
                    {dat.name}
                  </h1>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

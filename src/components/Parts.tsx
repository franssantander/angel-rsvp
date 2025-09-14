"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PartsCard from "./PartsCard";

export default function Parts({ parts }: { parts: any }) {
  return (
    <section className="relative h-full py-20 lg:h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/parts-img.jpg"
          alt="Attire Image"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 bg-black/60"
      />

      {/* Content */}
      <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-14 justify-center h-full text-center text-white">
        {/* Intro Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl max-w-2xl"
        >
          We are overjoyed to share this special occasion with the people who
          mean the most to us. It will be a day of joy, laughter, and lasting
          memories, and we would love for you to be part of it. Your presence
          will truly make the celebration complete.
        </motion.h1>

        {/* Categories + Cards */}
        <div className="w-full flex flex-col lg:flex gap-y-3 md:flex-row gap-x-24 justify-center">
          {[
            { title: "Steps with gentlemen", data: parts.gentlemens },
            { title: "Candle of Wisdom", data: parts.candles },
            {
              title: "Treasures",
              data: [...parts.Treasures_1, ...parts.Treasures_2],
              grid: true,
            },
            { title: "Bills", data: parts.bills },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h1 className="text-xl font-dancing-script text-yellow-500">
                {section.title}
              </h1>

              <motion.div
                className={section.grid ? "grid grid-cols-2 gap-x-7" : ""}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {section.data.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <PartsCard name={item.name} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

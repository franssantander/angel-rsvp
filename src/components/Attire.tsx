"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Attire() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/attire-img.jpg"
          alt="Attire Image"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-black/60"
      />

      {/* Content */}
      <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-4 justify-center h-full text-center text-white">
        <div className="grid gap-y-14">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-bold text-4xl"
          >
            ATTIRE
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl text-2xl/12"
          >
            The dress code is Semi-formal / Smart casual. All 18 Special is
            required to wear semi-formal attire. We’d love for you to come
            dressed in something that makes you feel confident, comfortable,
            and ready to celebrate. Feel free to add your personal style!
          </motion.p>
        </div>
      </div>
    </section>
  );
}

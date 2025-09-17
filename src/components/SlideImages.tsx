"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MotionImage = motion(Image);

const images = [
  "/assets/angel_1.webp", // 👈 first image = default background
  "/assets/angel_2.webp",
  "/assets/attire-img.jpg",
  "/assets/bills-img.jpg",
];

export default function SlideImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      {/* Default background image (always visible) */}
      <Image
        src={images[0]}
        alt="Default background"
        fill
        className="absolute object-cover"
        priority
      />

      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden">
        {images.slice(1).map((src, i) => {
          const translateX = useTransform(
            scrollYProgress,
            [i / (images.length - 1), (i + 1) / (images.length - 1)],
            ["100%", "0%"]
          );

          return (
            <MotionImage
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="absolute object-cover"
              style={{ x: translateX }}
            />
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MotionImage = motion(Image);

const images = [
  "/assets/hero-img.jpeg",
  "/assets/SCM-1.jpeg",
  "/assets/SCM-2.jpeg",
  "/assets/SCM-0.jpg",
  "/assets/SCM-3.jpeg",
  "/assets/SCM-4.jpeg",
];

// ✅ custom hook (no map inside)
function useImageTransforms(
  scrollYProgress: MotionValue<number>,
  count: number
) {
  const transforms: MotionValue<string>[] = [];

  for (let i = 0; i < count; i++) {
    transforms.push(
      useTransform(
        scrollYProgress,
        [i / (count + 0), (i + 1) / (count + 1)],
        ["100%", "0%"]
      )
    );
  }

  return transforms;
}

export default function SlideImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ safe usage of hook
  const transforms = useImageTransforms(scrollYProgress, images.length - 1);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      {/* Default background image */}
      <Image
        src={images[0]}
        alt="Default background"
        fill
        quality={100}
        className="absolute object-cover"
      />

      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden">
        {images.slice(1).map((src, i) => (
          <MotionImage
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            sizes="100vw"
            quality={100}
            className="absolute object-cover"
            style={{ x: transforms[i] }}
          />
        ))}
      </div>
    </div>
  );
}

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


interface SlidingImageProps {
  src: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalImages: number;
}

function SlidingImage({
  src,
  index,
  scrollYProgress,
  totalImages,
}: SlidingImageProps) {
  const x = useTransform(
    scrollYProgress,
    [index / totalImages, (index + 1) / totalImages],
    ["100%", "0%"],
    { clamp: true }
  );

  return (
    <MotionImage
      src={src}
      alt={`Slide ${index + 1}`}
      fill
      sizes="100vw"
      quality={100}
      className="absolute object-cover"
      style={{ x }}
    />
  );
}

export default function SlideImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <Image
        src={images[0]}
        alt="Default background"
        fill
        quality={100}
        className="absolute object-cover"
      />

      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden">
        {images.slice(1).map((src, i) => (
          <SlidingImage
            key={i}
            src={src}
            index={i}
            scrollYProgress={scrollYProgress}
            totalImages={images.length - 1}
          />
        ))}
      </div>
    </div>
  );
}


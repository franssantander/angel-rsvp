"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/hero-img.jpeg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="absolute inset-0 bg-black/50"
        />

        {/* Content */}
        <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-4 justify-center h-full text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 },
              },
            }}
            className="flex flex-col gap-y-3 w-full items-center"
          >
            {/* Title */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1 className="font-playfair text-4xl md:text-3xl font-black">
                You’re Invited!
              </h1>
              <span className="text-lg font-dancing-script">
                Angel’s 18th Birthday
              </span>
            </motion.div>

            <Separator className="max-w-96" />

            {/* Date + Location */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="flex items-center gap-x-6 font-geist"
            >
              <h1 className="text-xs text-neutral-200">September 28, 2025</h1>
              <Icon icon="material-symbols:circle" fontSize={6} />
              <h1 className="text-xs text-neutral-200">
                Lancaster Hotel Manila
              </h1>
            </motion.div>

            {/* Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, delay: 1 }}
              className="py-3"
            >
              <Button className="animate-glow flex items-center gap-2">
                <Icon icon="tabler:mail-heart" />
                RSVP Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Photos */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.4 } },
            }}
            className="flex items-center gap-x-2"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50, rotate: -3 },
                visible: { opacity: 1, x: 0, rotate: 0 },
              }}
              transition={{ duration: 1 }}
              className="hidden sm:block sm:relative w-[24rem] h-[26rem]"
            >
              <Image
                src="/assets/angel_1.webp"
                alt="Angel Photo 1"
                fill
                priority
                className="object-cover rounded-md border-2"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50, rotate: 3 },
                visible: { opacity: 1, x: 0, rotate: 0 },
              }}
              transition={{ duration: 1 }}
              className="relative w-[24rem] h-[26rem]"
            >
              <Image
                src="/assets/angel_2.webp"
                alt="Angel Photo 2"
                fill
                priority
                className="object-cover rounded-md border-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

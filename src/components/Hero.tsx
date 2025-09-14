import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <>
      <section className="relative h-screen w-full">
        <Image
          src="/assets/hero-img.jpeg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/44" />

        {/* Content */}
        <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-4 justify-center h-full text-center text-white">
          <div className="flex flex-col gap-y-4 w-full items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-4xl font-black">
                You’re Invited!
              </h1>
              <span className="text-lg font-dancing-script">
                Angel’s 18th Birthday
              </span>
            </div>
            <Separator className="max-w-96" />
            <div className="flex items-center gap-x-6 font-geist">
              <h1 className="text-xs text-neutral-200">September 28, 2025</h1>
              <Icon icon="material-symbols:circle" fontSize={6} />
              <h1 className="text-xs text-neutral-200">
                Lancaster Hotel Manila
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="hidden sm:block sm:relative w-64 h-64">
              <Image
                src="/assets/angel_1.webp"
                alt="Angel Photo 1"
                fill
                priority
                className="object-cover rounded-md border-2"
              />
            </div>
            <div className="relative w-64 h-64">
              <Image
                src="/assets/angel_2.webp"
                alt="Angel Photo 2"
                fill
                priority
                className="object-cover rounded-md border-2"
              />
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-lg md:text-2xl">
            We are overjoyed to share this special occasion with the people who
            mean the most to us. Your presence will truly make the celebration
            complete.
          </p>
          <Button className="animate-glow flex items-center gap-2">
            <Icon icon="tabler:mail-heart" />
            RSVP Now
          </Button>
        </div>
      </section>
    </>
  );
}

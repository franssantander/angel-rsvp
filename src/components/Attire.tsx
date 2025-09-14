import Image from "next/image";
import React from "react";

export default function Attire() {
  return (
    <>
      <section className="relative h-screen w-full">
        <Image
          src="/assets/attire-img.jpg"
          alt="Attire Image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-4 justify-center h-full text-center text-white">
          <div className="grid grid-cols gap-y-14">
            <h1 className="font-bold text-4xl">ATTIRE</h1>
            <p className="max-w-2xl text-2xl/12">
              The dress code is Semi-formal / Smart casual. All 18 Special is
              required to wear semi-formal attire. We’d love for you to come
              dressed in something that makes you feel confident, comfortable,
              and ready to celebrate. Feel free to add your personal style!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

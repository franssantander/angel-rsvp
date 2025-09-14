import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <section className="relative h-72 w-full">
      <Image
        src="/assets/welcome-img.jpg"
        alt="Attire Image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-4 justify-center h-full text-center text-white">
        <div className="grid grid-cols gap-y-4">
          <h1 className="font-bold text-4xl">WELCOME</h1>
          <p className="max-w-2xl text-lg">
            We can’t wait to welcome you with open arms and celebrate together.
            Come ready to enjoy, connect, and create beautiful memories with us!
          </p>
        </div>
      </div>
    </section>
  );
}

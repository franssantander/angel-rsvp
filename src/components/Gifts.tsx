import Image from "next/image";
import React from "react";

export default function Gifts() {
  return (
    <>
      <section className="relative h-screen w-full">
        <Image
          src="/assets/gifts-img.jpg"
          alt="Attire Image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-4 justify-center h-full text-center text-white">
          <div className="grid grid-cols gap-y-14">
            <h1 className="font-bold text-4xl">GIFTS</h1>
            <p className="max-w-2xl text-2xl/12">
              Your presence is already the most meaningful gift to us, and we
              are truly grateful just to have you there. Should you wish to
              share more, a small token or contribution would be warmly
              appreciated. What matters most is celebrating together and
              creating beautiful memories.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

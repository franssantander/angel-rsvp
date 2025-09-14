import React from "react";
import RvspForm from "./RvspForm";

export default function Attending() {
  return (
    <section className="relative h-full w-full py-10 md:py-24">
      <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center gap-y-4 justify-center h-full text-center">
        <div className="grid grid-cols gap-y-14">
          <h1 className="text-4xl font-bold">ARE YOU ATTENDING?</h1>
          <p className="font-geist max-w-2xl text-neutral-500">
            Please let us know if you’ll be able to join us by September 18.
            Your response will help us make sure everything is prepared to
            welcome you with comfort and care. We’ll be delighted to reserve
            your place at this special celebration.
          </p>
        </div>
        <RvspForm />
      </div>
    </section>
  );
}

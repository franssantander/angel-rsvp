import Attire from "@/components/Attire";
import Gifts from "@/components/Gifts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhenWhere from "@/components/WhenWhere";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Attire />
        <Gifts />
        <WhenWhere />
      </div>
    </>
  );
}

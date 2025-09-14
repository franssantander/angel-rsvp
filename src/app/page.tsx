"use client";

import Attending from "@/components/Attending";
import Attire from "@/components/Attire";
import Footer from "@/components/Footer";
import Gifts from "@/components/Gifts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Parts from "@/components/Parts";
import Welcome from "@/components/Welcome";
import WhenWhere from "@/components/WhenWhere";
import React from "react";
import parts from "@/data/parts.json";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="h-screen overflow-y-scroll scroll-smooth scroll-snap-y scroll-snap-mandatory">
        <section id="home" className="h-screen scroll-snap-start">
          <Hero />
        </section>
        <section id="parts" className="h-screen scroll-snap-start">
          <Parts parts={parts} />
        </section>
        <section id="attire" className="h-screen scroll-snap-start">
          <Attire />
        </section>
        <section id="gifts" className="h-screen scroll-snap-start">
          <Gifts />
        </section>
        <section id="location" className="h-screen scroll-snap-start">
          <WhenWhere />
        </section>
        <section id="rvsp" className="h-screen scroll-snap-start">
          <Attending />
        </section>
        <Welcome />
        <Footer />
      </main>
    </>
  );
}

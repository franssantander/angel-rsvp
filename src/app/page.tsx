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
  const gentleMensData = parts.gentlemens;
  const treasuresData = parts.treasures;
  const blueBillsData = parts.blue_bills;
  const candlesData = parts.candles;
  return (
    <>
      <Navbar />
      <main className="h-screen overflow-y-scroll scroll-smooth scroll-snap-y scroll-snap-mandatory">
        <section id="home" className="h-screen scroll-snap-start">
          <Hero />
        </section>
        <section id="parts" className="min-h-screen lg:h-screen scroll-snap-start">
          <Parts
            title="Steps With Gentlemen"
            img="/assets/parts-img.jpg"
            data={gentleMensData}
          />
        </section>
        <section className="min-h-screen lg:h-screen scroll-snap-start">
          <Parts
            title="Treasures"
            img="/assets/treasures-img.jpg"
            data={treasuresData}
          />
        </section>
        <section className="min-h-screen lg:h-screen scroll-snap-start">
          <Parts
            title="Blue Bills"
            img="/assets/bills-img.jpg"
            data={blueBillsData}
          />
        </section>
        <section className="min-h-screen lg:h-screen scroll-snap-start">
          <Parts
            title="Candle of Wisdom"
            img="/assets/candles-img.jpeg"
            data={candlesData}
          />
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
        <section id="rsvp" className="h-screen scroll-snap-start">
          <Attending />
        </section>
        <Welcome />
        <Footer />
      </main>
    </>
  );
}

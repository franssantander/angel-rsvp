import Attending from "@/components/Attending";
import Attire from "@/components/Attire";
import Footer from "@/components/Footer";
import Gifts from "@/components/Gifts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
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
        <Attending />
        <Welcome />
        <Footer />
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { supabase } from "@/lib/supabaseClient";
// import { toast } from "sonner";

type Leaf = {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
};

// const leaves = Array.from({ length: 8 }).map((_, i) => ({
//   id: i,
//   left: `${Math.random() * 100}%`,
//   delay: Math.random() * 1,
//   duration: 2 + Math.random() * 4,
//   size: 24 + Math.random() * 20,
//   rotate: Math.random() * 360,
// }));

export default function Hero() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    attending: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 1,
      duration: 1 + Math.random() * 4,
      size: 24 + Math.random() * 20,
      rotate: Math.random() * 360,
    }));
    setLeaves(generated);
  }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const validate = () => {
  //   const newErrors: { [key: string]: string } = {};

  //   if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
  //   if (!form.email.trim()) {
  //     newErrors.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(form.email)) {
  //     newErrors.email = "Please enter a valid email.";
  //   }

  //   if (!form.attending) {
  //     newErrors.attending = "Please select an option.";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validate()) return;

  //   setLoading(true);

  //   try {
  //     // 🔍 Check if full name already exists
  //     const { data: existing, error: fetchError } = await supabase
  //       .from("rsvps")
  //       .select("id")
  //       .eq("full_name", form.fullName)
  //       .single();

  //     if (fetchError && fetchError.code !== "PGRST116") {
  //       console.error("Error checking RSVP:", fetchError.message);
  //       toast.error("Oops! Something went wrong. Please try again.");
  //       setLoading(false);
  //       return;
  //     }

  //     if (existing) {
  //       const { error: updateError } = await supabase
  //         .from("rsvps")
  //         .update({ attending: form.attending === "true" })
  //         .eq("id", existing.id);

  //       if (updateError) {
  //         console.error("Error updating RSVP:", updateError.message);
  //         toast.error("Oops! Something went wrong. Please try again.");
  //       } else {
  //         toast.success("✅ RSVP updated successfully!");
  //       }
  //     } else {
  //       const { error: insertError } = await supabase.from("rsvps").insert([
  //         {
  //           full_name: form.fullName,
  //           email: form.email,
  //           attending: form.attending === "true",
  //         },
  //       ]);

  //       if (insertError) {
  //         console.error("Error inserting RSVP:", insertError.message);
  //         toast.error("Oops! Something went wrong. Please try again.");
  //       } else {
  //         toast.success(
  //           "🎉 Thank you for your RSVP! We can’t wait to celebrate with you."
  //         );
  //       }
  //     }

  //     // Reset form
  //     setForm({ fullName: "", email: "", attending: "" });
  //     setErrors({});
  //   } catch (err) {
  //     console.error("Unexpected error:", err);
  //     alert("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const leafElements = useMemo(
    () =>
      leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ y: -100, opacity: 0, rotate: leaf.rotate }}
          animate={{
            y: "100vh",
            opacity: [0, 1, 1, 0],
            rotate: leaf.rotate + 180,
          }}
          transition={{
            delay: leaf.delay,
            duration: leaf.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            left: leaf.left,
            top: 0,
            width: leaf.size,
            height: leaf.size,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/assets/leaf.png"
            alt="leaf"
            width={leaf.size}
            height={leaf.size}
            className="opacity-80"
          />
        </motion.div>
      )),
    [leaves]
  );

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Falling leaves layer */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {leafElements}
        </div>

        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 hidden sm:block"
        >
          <Image
            src="/assets/main-invitation.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Mobile Fullscreen Image */}
        <div className="absolute inset-0 block sm:hidden">
          <Image
            src="/assets/main-invitation.jpg"
            alt="Angel Mobile Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-transparent to-transparent md:hidden" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="absolute inset-0 md:bg-black/50"
        />

        {/* Content */}
        <div className="px-4 max-w-7xl m-auto relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          {/* Centered text overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 transform translate-y-24 sm:translate-y-24 ">
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
              className="space-y-6"
            >
              {/* Title */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="text-2xl font-black font-dancing-script drop-shadow-lg text-[#ECC91D]">
                  A decade and eight
                </span>
                <h1 className="font-playfair text-5xl sm:text-6xl font-black drop-shadow-lg text-[#ECC91D]">
                  You’re Invited!
                </h1>
                <span className="text-2xl md:text-2xl drop-shadow-md font-playfair font-black text-[#ECC91D]">
                  Angel Beatriz
                </span>
              </motion.div>

              <Separator className="max-w-96 mx-auto my-3" />

              {/* Date + Location */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex items-center justify-center gap-x-3 font-geist"
              >
                <h1 className="text-xs md:text-sm text-neutral-200 drop-shadow-md">
                  September 28, 2025
                </h1>
                <Icon icon="material-symbols:circle" fontSize={5} />
                <h1 className="text-xs md:text-sm text-neutral-200 drop-shadow-md">
                  Lancaster Hotel Manila
                </h1>
              </motion.div>
            </motion.div>
          </div>

          {/* Photos */}
        </div>
      </section>
    </>
  );
}

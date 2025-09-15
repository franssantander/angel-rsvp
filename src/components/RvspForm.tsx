"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function RvspForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    guests: "",
    attending: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.guests.trim()) newErrors.guests = "Number of guests is required.";
    if (!form.attending) newErrors.attending = "Please select an option.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      // 🔍 Check if full name already exists
      const { data: existing, error: fetchError } = await supabase
        .from("rsvps")
        .select("id")
        .eq("full_name", form.fullName)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        console.error("Error checking RSVP:", fetchError.message);
        toast.error("Oops! Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      if (existing) {
        // ✏️ Update attending only
        const { error: updateError } = await supabase
          .from("rsvps")
          .update({ attending: form.attending === "true" })
          .eq("id", existing.id);

        if (updateError) {
          console.error("Error updating RSVP:", updateError.message);
          toast.error("Oops! Something went wrong. Please try again.");
        } else {
          toast.success("✅ RSVP updated successfully!");
        }
      } else {
        const { error: insertError } = await supabase.from("rsvps").insert([
          {
            full_name: form.fullName,
            email: form.email,
            guests: parseInt(form.guests, 10),
            attending: form.attending === "true",
          },
        ]);

        if (insertError) {
          console.error("Error inserting RSVP:", insertError.message);
          toast.error("Oops! Something went wrong. Please try again.");
        } else {
          toast.success(
            "🎉 Thank you for your RSVP! We can’t wait to celebrate with you."
          );
        }
      }

      // Reset form
      setForm({ fullName: "", email: "", guests: "", attending: "" });
      setErrors({});
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-10 space-y-7">
      <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2">
        {/* Full Name */}
        <div className="grid w-xs items-center gap-2 font-geist">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm text-left">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="grid w-xs items-center gap-2 font-geist">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm text-left">{errors.email}</p>
          )}
        </div>

        {/* Guests */}
        <div className="grid w-xs items-center gap-2 font-geist">
          <Label htmlFor="guests">Number of guests</Label>
          <Input
            type="number"
            id="guests"
            name="guests"
            placeholder="Enter number of guests"
            value={form.guests}
            onChange={handleChange}
          />
          {errors.guests && (
            <p className="text-red-500 text-sm text-left">{errors.guests}</p>
          )}
        </div>

        {/* Attending */}
        <div className="grid w-xs items-center gap-2 font-geist">
          <Label htmlFor="attending">Will you attend?</Label>
          <Select
            value={form.attending}
            onValueChange={(value) => setForm({ ...form, attending: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select" />
            </SelectTrigger>
            <SelectContent className="font-geist">
              <SelectItem value="true">Yes, I&apos;ll be there!</SelectItem>
              <SelectItem value="false">No, I can&apos;t make it.</SelectItem>
            </SelectContent>
          </Select>
          {errors.attending && (
            <p className="text-red-500 text-sm text-left">{errors.attending}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading && (
            <>
              <Icon
                icon="radix-icons:reload"
                className="mr-1 animate-spin"
                fontSize={14}
              />
              Submitting...
            </>
          )}
          {!loading && "Submit RSVP"}
        </Button>
      </div>
    </form>
  );
}

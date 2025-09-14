import React from "react";
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
        <form className="pt-10 space-y-7">
          <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2">
            <div className="grid w-xs items-center gap-2 font-geist">
              <Label htmlFor="email">Full name</Label>
              <Input type="text" placeholder="Enter your full name" />
            </div>

            <div className="grid w-xs items-center gap-2 font-geist">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            <div className="grid w-xs items-center gap-2 font-geist">
              <Label htmlFor="email">Number of guests</Label>
              <Input type="text" placeholder="Enter number of guest" />
            </div>
            <div className="grid w-xs items-center gap-2 font-geist">
              <Label htmlFor="email">Will you attend?</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent className="font-geist">
                  <SelectItem value="true">Yes, I&apos;ll be there!</SelectItem>
                  <SelectItem value="false">
                    No, I can&apos;t make it.
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

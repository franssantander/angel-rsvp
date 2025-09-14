import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-7 space-y-3 font-geist">
      <div className="flex items-center justify-center">
        <a
          href="https://fransbeam-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:underline text-sm"
        >
          Made with <span className="text-rose-500 mx-1">❤️</span> by
          <Avatar className="ml-2 size-6">
            <AvatarImage src="/assets/me.jpg" />
            <AvatarFallback>Frans</AvatarFallback>
          </Avatar>
        </a>
      </div>

      <p className="mt-1 text-gray-400 text-center text-xs">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

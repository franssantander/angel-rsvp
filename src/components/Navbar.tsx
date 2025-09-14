"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Attire", link: "/atire" },
    { name: "Gifts", link: "/gifts" },
    { name: "Location", link: "/location" },
    { name: "Rvsp", link: "/rvsp" },
  ];

  return (
    <div className="my-6 absolute z-30 justify-center items-center mx-auto w-full">
      <nav>
        <ul className="flex items-center space-x-6 justify-center lg:space-x-14">
          {navLinks.map((navlink) => (
            <li
              key={navlink.name}
              className={`lg:text-lg ease-in-out duration-200 
            ${pathname === navlink.link ? "text-rose-500" : "text-white"} 
            hover:text-rose-500`}
            >
              <a href={navlink.link}>{navlink.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import logo from "../assets/logo.png";

// Define the type for navigation items
interface NavItem {
  path: string;
  label: string;
}

// Navigation items list
const navItems: NavItem[] = [
  { path: "/tints-shades", label: "About" },
  { path: "/gradient-generator", label: "Services" },
  { path: "/features", label: "Blogs" },
  { path: "/about", label: "Youtube" },
  { path: "/about", label: "Testimonials" },
];

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const twtlink =
    "https://twitter.com/intent/tweet?text=Checkout%20gradientify.com%20by%20@thenitinsingh7%0A%0AGradientify%20is%20a%20web-based%20all-in-one%20gradient%20editor%20that%20provides%20100+%20trendy,%20beautiful,%20carefully%20crafted%20gradients%20for%20your%20next%20projects.%20Copy%20CSS%20Snippet,%20Download%20PNGs,%20generates%20a%20nice%20color%20gradient,%20and%20much%20more";

  return (
    <div className="bg-hero1 min-h-[5vh]">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              {/* <Image src={logo} alt="Logo" width={34} height={34} /> */}
              <span className="text-[20px] font-Epilogue font-bold  text-[#4361EE] ">
                Prime Home Propmart
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex xl:flex flex-auto items-center justify-center md:space-x-6">
          {navItems.map(({ path, label }) => (
            <Link key={path} href={path}>
              <p className="text-[16px] font-medium continuous-line font-Epilogue text-black cursor-pointer">
                {label}
              </p>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-[12px]">
          <a
            href="#"
            className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
          >
            Contact Us
          </a>
        </div>

        <button
          className="rounded-md block lg:hidden xl:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          <div
            className={`dark:text-white duration-500 px-3 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-toggle ${
              showNav ? "menu-toggle-active" : ""
            }`}
          >
            <span></span>
          </div>
        </button>
      </div>

      {showNav && (
        <div className="flex lg:hidden xl:hidden md:hidden flex-col w-full text-center mt-3 p-[16px]">
          {navItems.map(({ path, label }) => (
            <Link key={path} href={path}>
              <p
                className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px] cursor-pointer"
                onClick={() => setShowNav(false)}
              >
                <h3 className="text-[16px] font-medium text-center text-white dark:text-[#82828a]">
                  {label}
                </h3>
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

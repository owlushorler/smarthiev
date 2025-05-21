"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/shslogo 1.png";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="  ">
      <nav className=" .body_bg flex items-center    bg-[#F6FBF8] justify-between pt-[65px] mx-[21px] max-h-[34px]   md:max-w-[1247px] sm:max-w-[719px] sm:mx-[25px] sm:pt-[57px] sm:h-[37.48]  md:mx-[97px] md:pt-[78px] ">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className=" w-[90px] h-[34px] sm:w-[136px] sm:h-[51px]"
          />
        </Link>
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-8 text-gray-700 font-medium items-center">
          <Link href="/">
            <div className="hover:text-blue-600 transition">Discover</div>
          </Link>
          <Link href="/service">
            <div className="hover:text-blue-600 transition">Services</div>
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onClick={() =>
              isDropdownOpen
                ? setIsDropdownOpen(false)
                : setIsDropdownOpen(true)
            }
          >
            <button
              className="flex items-center hover:text-blue-600 transition focus:outline-none"
              type="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Resources <span className="ml-1">▾</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link href="faq">
                  <div className="block px-4 py-2 hover:bg-gray-100">Fax</div>
                </Link>
                <Link href="blog">
                  <div className="block px-4 py-2 hover:bg-gray-100">Blog</div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Get Started Button */}
        <div>
          <Link href="contactUs">
            <Button className="hidden sm:flex bg-teal-700  text-white px-4 py-2 rounded hover:bg-teal-800 transition">
              Get Started
            </Button>
          </Link>
          <div
            onClick={() => {
              setMenuOpen(true);
            }}
            className=" sm:hidden text-teal-700 text-2xl"
          >
            &#9776;
          </div>
        </div>

        {/**mobile setion */}
      </nav>
      {menuOpen && (
        <div className=" sm:hidden fixed inset-0 bg-white z-50 flex flex-col p-6">
          {/* Close Button */}
          <div
            className="self-start p-2 border border-dashed border-gray-300 rounded"
            onClick={() => setMenuOpen(false)}
          >
            X
          </div>

          {/* Menu Box */}
          <div className="mt-4 p-4 border-dashed  rounded space-y-3">
            <Link href="/">
              <p className="cursor-pointer text-gray-700 hover:text-gray-900">
                Discover
              </p>
            </Link>
            <Link href="service">
              <p className="cursor-pointer text-gray-700 hover:text-gray-900">
                Services
              </p>
            </Link>
            {/* Resources Dropdown */}
            <div
              className="relative"
              onClick={() =>
                isDropdownOpen
                  ? setIsDropdownOpen(false)
                  : setIsDropdownOpen(true)
              }
            >
              <div
                className="flex items-center hover:text-blue-600 transition focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Resources <span className="ml-1">▾</span>
              </div>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link href="faq">
                    <div className="block px-4 py-2 hover:bg-gray-100">Fax</div>
                  </Link>
                  <Link href="blog">
                    <div className="block px-4 py-2 hover:bg-gray-100">
                      Blog
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Get Started Button */}
          <Link href="ContactUs">
            <Button className="  bg-teal-700  text-white px-4 py-2 rounded hover:bg-teal-800 transition">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

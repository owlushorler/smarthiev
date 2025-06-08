"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/shslogo 1.png";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

const routes = [
  {
    label: "Discover",
    href: "/",
  },
  {
    label: "Service",
    href: "/service",
  },
  {
    label: "Resources",
    subItems: [
      {
        label: "Faq",
        href: "faq",
      },
      {
        label: "Blog",
        href: "blog",
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div>
      <nav className="flex md:px-16 px-5 py-3 items-center justify-between shadow">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className=" w-[90px] h-[34px] sm:w-[136px] sm:h-[51px]"
          />
        </Link>
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-8 text-gray-700 font-medium items-center">
          {routes.map((route, index) =>
            route.subItems ? (
              <div key={index}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer flex items-center justify-between flex-row gap-x-2 text-sm lg:text-base">
                      <span>{route.label}</span>
                      <ChevronDown size={16} />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col gap-2 mt-2 min-w-[200px] p-3">
                    {route.subItems.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex}>
                        <Link href={subItem.href} className="w-full">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                href={route.href as string}
                className="transition-transform duration-300 ease-in-out hover:scale-105 text-sm lg:text-base"
                key={index}
              >
                {route.label}
              </Link>
            )
          )}
        </div>

        {/* Get Started Button */}
        <div>
          <Link href="contactUs">
            <Button className="hidden sm:flex">Get Started</Button>
          </Link>
          <div onClick={toggleMenu} className=" sm:hidden text-teal-700">
            <Menu size={26} />
          </div>
        </div>

        {/**mobile setion */}
        <MobileSidebar open={open} setOpen={toggleMenu} routes={routes} />
      </nav>
    </div>
  );
}

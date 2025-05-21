// components/HeroSection.js

import Image from "next/image";
import { Button } from "./ui/button";
import heroImage from "../public/images/Hero Image@4x.png";

import Link from "next/link";

export default function HeroSection() {
  return (
    <nav className="flex mt-6 justify-center">
      <section
        style={{ backgroundImage: `url("../public/images/Group 107.png")` }}
        className=" max-w-[355px]    pt-[30px]   bg-[#F6FBF8] flex flex-col  items-center  md:max-w-[1274px] md:mt-[78px] md:mx-[97px] sm:max-w-[712px] sm:mt-[56px] sm:mx-[29px]  sm:flex sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Left Content */}
        <div className="  lg:max-w-[719px] lg:h-[479px] lg:gap-[44px] sm:max-w-[347px]">
          <h1 className="text-3xl px-[21px] sm:text-4xl font-bold leading-tight  text-[#28656A]">
            From Idea to Impact:
            <br />
            We <span className="text-orange-600">Build</span> <br />
            Your <span className="text-orange-600">Digital Product</span>
          </h1>

          <p className="mt-6  px-[21px] text-teal-800 max-w-md">
            Whether you need to validate an MVP, optimize your product strategy,
            or manage complex projects we deliver solutions that drive real
            results.
          </p>

          <div className=" hidden mt-8 sm:flex gap-4">
            <Link href="contactUs">
              <Button className="bg-teal-700 hover:cursor-pointer text-white px-5 py-3 rounded-md font-semibold hover:bg-teal-800 transition">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="service">
              <Button className="border hover:cursor-pointer border-gray-700 text-gray-700 px-5 py-3 rounded-md font-semibold bg-gray-100 transition">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="">
          <div className="rounded-lg overflow-hidden w-full max-w-sm mx-auto ">
            <Image
              src={heroImage}
              alt="Woman holding laptop"
              objectFit="cover"
              className="rounded-lg md:w-[455px] md:h-[622px] sm:w-[330px] sm:h-[391px] w-[355px] h-[350px]"
            />
            <div className=" sm:hidden mt-8 flex gap-1 px-3">
              <Link href="contactUs">
                <Button className="bg-teal-700 text-sm hover:cursor-pointer text-white px-3 py-3 rounded-md font-semibold hover:bg-teal-800 transition">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="service">
                <Button className="border text-sm  hover:cursor-pointer border-gray-700 text-gray-700 px-3 py-3 rounded-md font-semibold bg-gray-100 transition">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative Dots */}
        </div>
      </section>
    </nav>
  );
}

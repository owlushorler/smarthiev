// components/HeroSection.js

import Image from "next/image";
import { Button } from "./ui/button";
import heroImage from "../public/images/Hero Image@4x.png";

import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex mt-6 justify-center">
      <section className="flex h-full mt-5 md:mt-0 p-5 md:px-16 px-5 w-full flex-col md:flex-row gap-5 md:gap-0">
        {/* Left Content */}
        <div className="flex items-start md:w-[50%] w-full flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight  text-[#28656A]">
            From Idea to Impact:
            <br />
            We <span className="text-orange-600">Build</span> <br />
            Your <span className="text-orange-600">Digital Product</span>
          </h1>

          <p className="mt-6 text-teal-800">
            Whether you need to validate an MVP, optimize your product strategy,
            or manage complex projects we deliver solutions that drive real
            results.
          </p>

          <div className=" hidden mt-8 sm:flex gap-4">
            <Link href="contactUs">
              <Button className="">Book a Free Consultation</Button>
            </Link>
            <Link href="service">
              <Button className="" variant={"outline"}>
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-[50%] w-full h-full ">
          <div className="rounded-lg overflow-hidden w-full">
            <Image
              src={heroImage}
              alt="Woman holding laptop"
              objectFit="cover"
              className="rounded-lg md:h-[500px] h-[350px] w-full"
            />
            <div className=" sm:hidden mt-8 flex gap-3 px-3 flex-col">
              <Link href="contactUs">
                <Button className="w-full">Book a Free Consultation</Button>
              </Link>
              <Link href="service">
                <Button className="w-full" variant={"outline"}>
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative Dots */}
        </div>
      </section>
    </div>
  );
}

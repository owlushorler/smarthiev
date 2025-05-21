import HowWeWork from "@/components/homeCustomerJorney";
import ExperienceAndTestimonials from "@/components/homeExperimentalandTestimony";
import HeroSection from "@/components/homeHeroSection";
import ServicesGrid from "@/components/homeServiceGrid";
import FAQ from "@/components/homfaq";

import ResourcesInsights from "@/components/resourcesInsights";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Smarthieve Home",
};

export default function Homepage() {
  return (
    <div className=" bg-[#F6FBF8] ">
      <HeroSection />
      <div className="md:max-w-[1245px]  md:mx-[98px] sm:max-w-[719px] sm:mx-[25px] md:h-[833px] mt-2.5 flex items-center justify-center bg-gradient-to-r from-[#28656A] via-teal-800 to-teal-900 p-10 text-white font-serif rounded-2xl">
        <div className="md:max-w-[1245px] md:h-[833px] flex-col-reverse sm:flex-col-reverse flex md:flex-row items-center gap-16">
          {/* Left Illustration */}
          <div className="flex justify-center md:justify-start w-full md:w-1/2 relative">
            {/* Large white arrow/bridge shape */}
            <svg
              className="w-80 h-80 drop-shadow-lg"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 170 L40 80 L80 50 L95 75 L125 60 L165 80"
                stroke="white"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M130 120 L190 120"
                stroke="white"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="30" cy="160" r="10" fill="#065f46" />{" "}
              {/* silhouette head */}
              <rect x="27" y="165" width="6" height="15" fill="#065f46" />{" "}
              {/* silhouette body */}
            </svg>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold">Who We Are</h1>
            <p className="italic max-w-xl">
              &quot;Bridging the gap between great ideas and great
              execution&quot;
            </p>

            <p className="max-w-xl text-gray-200">
              At <span className="font-semibold">SmarthiveTech</span>, we
              don&apos;t just build products—we help businesses{" "}
              <span className="text-rose-500 font-semibold">launch</span>,{" "}
              <span className="text-rose-500 font-semibold">scale</span>, and{" "}
              <span className="text-rose-500 font-semibold">thrive</span> in the
              digital landscape.
            </p>

            <div className="max-w-xl">
              <h2 className="font-bold text-xl mb-4">
                Why Smarthive Tech Solutions?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  {/* Icon: up arrow inside circle */}
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-12l3 4h-2v4h-2v-4H7l3-4z" />
                  </svg>
                  <span>Start-up Focused</span>
                </li>

                <li className="flex items-center gap-3">
                  {/* Icon: target */}
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <span>Strategic Execution</span>
                </li>

                <li className="flex items-center gap-3">
                  {/* Icon: gear with check */}
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51z" />
                  </svg>
                  <span>End-to-End Expertise</span>
                </li>
              </ul>
            </div>

            <p className="italic max-w-xs">Need clarity on your next steps?</p>
            <Link href="service">
              <Button className="w-36 border border-white px-4 py-2 rounded bg-[#26656A] hover:bg-white hover:text-teal-900 transition">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <HowWeWork />
      <ServicesGrid />
      <ExperienceAndTestimonials />
      <ResourcesInsights />

      <FAQ />
    </div>
  );
}

import Image from "next/image";
import Step1 from "../public/images/step1.png";
import Step2 from "../public/images/step2.png";
import Step3 from "../public/images/5.png";
import Step4 from "../public/images/step4.png";
import work from "../public/images/How we work png (1) 2.png";

import { Button } from "./ui/button";
import Link from "next/link";
// pages/how-we-work.js
export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-white py-16 px-5 md:px-10 lg:px-20 font-sans text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content: Steps */}
        <div className="w-full">
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-2">
            Customer Journey
          </p>
          <h1 className="text-4xl font-extrabold mb-8">How We Work</h1>
          <p className="mb-10 max-w-xl text-gray-700">
            A clear, step-by-step process to turn ideas into a scalable product
          </p>

          {/* Step 1 */}
          <div className="flex gap-4 mb-8">
            <div className="flex-shrink-0">
              <Image
                src={Step1}
                alt="step1"
                className="   w-15 h-15 flex items-center justify-center  "
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                <span className="text-red-500">Step 1</span>Book a Free{" "}
                <span className="text-rose-500">Consultation</span>
              </h3>
              <p className="text-gray-700">
                Tell us your vision. We analyze your needs, challenges and goals
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 mb-8">
            <div className="flex-shrink-0">
              <Image
                src={Step2}
                alt="step1"
                className="   w-15 h-15 flex items-center justify-center  "
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                <span className="text-red-500">Step 2</span> Strategy & Roadmap
              </h3>
              <p className="text-gray-700">
                We build a custom execution plan roadmap to define scope, budget
                and project requirements.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 mb-8">
            <div className="flex-shrink-0">
              <Image
                src={Step3}
                alt="step1"
                className="   w-15 h-15 flex items-center justify-center  "
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                <span className="text-red-500">Step 3</span> Build & Execute
              </h3>
              <p className="text-gray-700">
                We bring ideas to life with agile development, constant
                management and a clear shared vision.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 mb-8">
            <div className="flex-shrink-0">
              <Image
                src={Step4}
                alt="step1"
                className="   w-15 h-15 flex items-center justify-center  "
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                <span className="text-red-500">Step 4</span> Launch, Scale &{" "}
                <span className="text-rose-600">Optimize</span>
              </h3>
              <p className="text-gray-700">
                We don&apos;t just launch—we help you scale, fix bugs, and
                maximize product growth potential.
              </p>
            </div>
          </div>
        </div>

        {/* Right content: Image and call-to-action */}
        <div className="flex flex-col w-full">
          <Image
            src={work}
            alt="Person working on laptop"
            className="rounded-xl shadow-lg object-cover w-full h-80 mb-8"
          />
          <p className="mb-4 italic text-gray-600">
            Need guidance? Let&apos;s map out your journey
          </p>
          <Link href="contactUs">
            <Button className="bg-[#28656A] hover:bg-teal-700 transition text-white font-semibold py-3 rounded-md w-full md:w-auto px-10">
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

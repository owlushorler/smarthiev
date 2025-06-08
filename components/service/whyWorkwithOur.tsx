import Link from "next/link";
import { Button } from "../ui/button";

// components/WhyWorkWithUs.js
export default function WhyWorkWithUs() {
  return (
    <section className="w-full justify-center mx-auto p-8  rounded-lg flex flex-col md:flex-row items-center gap-8">
      {/* Left: Red circle */}
      <div className="flex items-center justify-center bg-[#EF6C57] text-white rounded-full w-56 h-56 text-center px-6">
        <h2 className="text-xl font-semibold leading-relaxed">
          Why <span className="font-bold">work with</span>
          <br />
          Smarthive Tech?
        </h2>
      </div>

      {/* Right: Bullet points and button */}
      <div className="flex flex-col  space-y-6">
        <ul className="space-y-4 text-gray-700">
          {[
            "Dedicated Free Member - We focus on execution, not just ideas",
            "Results & Relationships Driven - We don't send fluff, that's for social",
            "Agile & Effect Focused - Upscale without compromising quality",
            "Beyond Code - We care about business impact - Total service + Dry success",
          ].map((item, index) => (
            <li key={index} className="  flex items-start gap-3">
              <span className=" md:text-[15px] text-sm  inline-block mt-1 w-4 h-4 rounded-full bg-[#EF6C57]"></span>
              <p className="md:text-[15px] text-sm ">{item}</p>
            </li>
          ))}
        </ul>
        <Link href="contactUs">
          <Button>Get a Free Refinishing Quote</Button>
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "../ui/button";
import img from "../../public/images/Rectangle 106.png";

export default function WhoWeAre() {
  return (
    <section className="max-w-[354px] md:max-w-[1248px] sm:max-[709px]   text-[#28656A] mx-auto px-6 py-12 ">
      <h2 className="text-5xl font-semibold mb-4 text-center ">Who We Are</h2>

      <p className="max-w-4xl mx-auto text-center md:text-left mb-12  text-[#28656A]">
        We’re a <strong>development-first</strong> company with a laser focus on
        building, launching, and scaling digital products. Whether you’re a
        start-up building an MVP or an established business looking to refine
        and scale your product, we provide the technical expertise and strategic
        guidance to bring your vision to life—fast, lean, and optimized for
        growth.
      </p>

      <div className=" md:h-[458px] sm:h-[470px]   body_bg md:flex md:gap-12 items-start max-w-7xl mx-auto">
        {/* Left side: Image */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg mb-10 md:mb-0">
          <Image
            src={img} // Replace with your own image path
            alt="Developer working on code"
            className="md:h-458px"
          />
        </div>

        {/* Right side: Text content */}
        <div className="md:h-[458px] h-[829px] sm:h-[470px] justify-between  flex flex-col items-center md:w-1/2 space-y-6">
          <h3 className="text-xl font-semibold text-center mb-4">
            Why Smarthive Tech?
          </h3>

          <ul className="    flex flex-col justify-between list-disc list-inside space-y-3  text-[#28656A]">
            <li>
              <strong>Development-First Mindset</strong> – We don’t just “build
              software”; we build solutions that drive growth.
            </li>
            <li>
              <strong>Speed Without Compromising Quality</strong> – Fast, lean
              MVPs with long-term scalability in mind.
            </li>
            <li>
              <strong>Real Start-up & Business Experience</strong> – We’ve
              helped businesses validate, launch, and scale successfully.
            </li>
            <li>
              <strong>Beyond Code</strong> – We Focus on Market Impact – Because
              a great product is more than just features.
            </li>
          </ul>

          <Button className="mt-4 px-6 py-3  bg-[#28656A] text-white rounded hover:bg-teal-800 transition">
            Let's Get to Work
          </Button>
        </div>
      </div>
    </section>
  );
}

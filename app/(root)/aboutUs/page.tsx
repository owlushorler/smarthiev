import Image from "next/image";
import frame from "../../../public/images/Frame 209.png";
import frame2 from "../../../public/images/Frame 211.png";
import frame3 from "../../../public/images/Frame 210.png";
import frame4 from "../../../public/images/Frame 212.png";
import WhoWeAre from "@/components/aboutcomponent/hero";

import MeetOurTeam from "@/components/aboutcomponent/meetOurTeam";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
const images = [frame, frame2, frame3, frame4];

export const metadata: Metadata = {
  title: "about",
  description: "Smarthieve About",
};

export default function AboutUs() {
  return (
    <nav>
      <section className="body_bg flex flex-col text-[#28656A]  max-w-7xl mx-auto px-6 py-12 text-center gap-3">
        <h2 className="text-4xl font-semibold mb-2">About Us</h2>
        <p className="text-3xl font-semibold mb-4">
          From Idea to Scalable Product – We Build What Matters
        </p>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Brilliant ideas fail without execution. That’s why we don’t just write
          code — we engineer high-performance digital products with the right
          strategy, execution, and scalability in mind.
        </p>

        <div className="flex items-center  h-[110px]  md:max-w-[1247px] md:h-[284px] sm:max-w-[699px] sm:h-[158px] justify-center gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-72 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`About us image ${index + 1}`}
                className=""
                priority={index === 0} // optional, for faster load of the first image
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <WhoWeAre />
        <MeetOurTeam />
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Build Smarter</h2>
          <p className="text-gray-700 mb-8">
            You need more than just developers—you need a development partner
            who ensures your product thrives. From MVP to scalable product—let’s
            build something game-changing.
          </p>
          <Button className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800 transition">
            Book a Free Consultation
          </Button>
        </section>
      </section>
    </nav>
  );
}

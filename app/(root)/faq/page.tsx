"use client";
import FaqAccordion from "@/components/faq/faq";

import FAQAccordion2 from "@/components/faq/faq2";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FAQHeader() {
  const [question, setquestion] = useState(true);
  return (
    <div className="body_bg">
      <div className="body_bg flex justify-center">
        <section className="w-full lg:p-15 md:p-10 p-5 flex justify-between space-x-8">
          <div>
            <h2 className="text-4xl text-[#28656A]  font-light mb-2">
              <span>Frequently </span>
              <span className="font-semibold text-rose-600">
                Asked Questions
              </span>
            </h2>
            <p className="text-gray-600 text-2xl max-w-md">
              Everything you need to know about our services and how we can help
              your business grow.
            </p>
          </div>
          <div>
            {/* Large question mark icon */}
            <span className="text-9xl font-bold text-rose-700 select-none">
              ?
            </span>
          </div>
        </section>
      </div>
      {question && <FaqAccordion />}
      {!question && <FAQAccordion2 />}

      <div className="mt-8 text-center">
        <Button
          onClick={() => (question ? setquestion(false) : setquestion(true))}
        >
          {question ? "See More" : "Back"}
        </Button>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

import SupportSection from "./support";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    id: 1,
    question: "Can you help me refine my product idea before development?",
    answer:
      "Yes! We offer consultation and product strategy sessions to validate your idea, define key features, and build a solid roadmap..",
  },
  {
    id: 2,
    question: "Do you offer ongoing maintenance after launch?",
    answer:
      "Absolutely! We provide post-launch support, updates, and performance optimizations to keep your product running smoothly.",
  },
  {
    id: 3,
    question: "How much does it cost to work with you?",
    answer:
      "Pricing varies based on the project scope. Contact us for a free consultation, and we'll provide a tailored quote..",
  },
  {
    id: 4,
    question: "How do I get started?",
    answer:
      "It's easy! Schedule a free call to discuss your project. Get a custom proposal based on your needs. Kick off development with a dedicated team.Launch & iterate for long-term success.",
  },
];

export default function FaqAccordion2() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <section className="body_bg w-full lg:p-15 md:p-10 p-5 ">
        <div className="space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <div key={id} className="bg-[#EF6C57] rounded-md">
              <button
                onClick={() => toggle(id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 focus:outline-none"
                type="button"
                aria-expanded={openId === id}
                aria-controls={`faq-answer-${id}`}
              >
                <span>{question}</span>
                <span className="text-2xl">{openId === id ? "-" : "+"}</span>
              </button>
              {openId === id && (
                <div
                  id={`faq-answer-${id}`}
                  className="px-6 pb-4 text-gray-800"
                >
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <SupportSection />
    </div>
  );
}

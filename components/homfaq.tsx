"use client";
import { useState } from "react";
import { Button } from "./ui/button";

import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What does Smarthive Tech Solutions do?",
      answer:
        "We specialize in website development, web and mobile app development, MVP building, IT consultation, and product/project management. We also offer revamps for existing digital products.",
    },
    {
      id: 2,
      question: "How long does it take to develop a website or app?",
      answer:
        "Timelines vary based on complexity: Basic websites – 2–4 weeks.Custom web apps – 6–12 weeks.Mobile apps – 8–16 weeks.MVPs – 4–8 weeks for a quick market launch",
    },
    {
      id: 3,
      question: "Can you manage my existing website or app?",
      answer:
        "Yes! Whether it’s a UI/UX redesign, performance improvement, or adding new features, we help modernize and optimize your digital product.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav>
      <section className="max-w-[1246px] h-[504px] px-14 mx-auto ">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Common customer? Check out our FAQ.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-md">
              <button
                onClick={() => toggleIndex(idx)}
                className={`w-full text-left px-6 py-4 rounded-md focus:outline-none flex justify-between items-center ${
                  openIndex === idx ? "bg-[#EF6C57]" : "bg-[#EF6C57]"
                } font-semibold text-white transition`}
              >
                <span>{faq.question}</span>
                <span className="text-2xl select-none">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <p className="px-6 py-4 bg-red-100 text-red-900 border-l-4 border-red-400 rounded-b-md">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="faq">
            <Button
              type="button"
              className="bg-teal-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-800 transition"
            >
              See More
            </Button>
          </Link>
        </div>
      </section>
      <section>
        <section
          className="content_bg relative  bg-cover bg-center h-96 flex items-center justify-center"
          aria-label="Let's get started hero section"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-xl text-white">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Let's Get Started
            </h1>
            <p className="mb-6 text-sm md:text-base">
              The difference between an idea and a successful product? The right
              execution.
            </p>
            <Link href="contactUs">
              <Button className="bg-[#28656A] hover:bg-teal-800 transition px-6 py-3 rounded-md font-semibold">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </section>
    </nav>
  );
}

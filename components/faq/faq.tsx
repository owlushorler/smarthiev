"use client";
import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
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
  {
    id: 4,
    question: "What industry do you work with?",
    answer:
      "We’ve built solutions for tech start-ups, e-commerce, finance, healthcare, logistics, and more. No matter your industry, we ensure a seamless digital experience.",
  },
  {
    id: 5,
    question: "What is an MVP, and do I need one?",
    answer:
      "An MVP (Minimum Viable Product) is a streamlined version of your product with core features. It helps test ideas, gather feedback, and attract investors before scaling.",
  },
];

export default function FaqAccordion() {
  // openId is number or null (using number since IDs are numbers)
  const [openId, setOpenId] = useState<number | null>(null);

  // Toggle openId based on question id (number)
  const toggle = (id: number): void => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="body_bg w-full lg:p-15 md:p-10 p-5 ">
      <div className="space-y-4">
        {faqs.map(({ id, question, answer }) => (
          <div key={id} className="bg-[#EF6C57]  rounded-md">
            <button
              onClick={() => toggle(id)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 focus:outline-none"
            >
              <span>{question}</span>
              <span className="text-2xl">{openId === id ? "-" : "+"}</span>
            </button>
            {openId === id && (
              <div className="px-6 pb-4 text-gray-800">{answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

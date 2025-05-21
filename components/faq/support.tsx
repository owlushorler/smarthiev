"use client";
import { ArrowPathIcon } from "@heroicons/react/24/outline"; // Optional: For button icon

import { Button } from "../ui/button";

import Link from "next/link";

export default function SupportSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Button */}

      {/* Still Have Questions */}
      <div className="text-center text-xl font-light">
        <span>Still Have </span>
        <span className="font-semibold text-rose-500 cursor-default select-none">
          Questions?
        </span>
      </div>

      {/* Contact Support Card */}
      <div className="bg-emerald-100 rounded-lg p-6 flex items-center space-x-6 shadow-md">
        {/* Icon */}
        <div className="text-rose-400">
          {/* Headphone Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 1v4m-6 4a6 6 0 0112 0v7a3 3 0 11-6 0v-7a3 3 0 00-6 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">Contact Support</h3>
          <p className="text-gray-700">
            Our support system is ready to answer any additional questions you
            might have
          </p>
        </div>
        <Link href="ContactUs">
          <Button className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition">
            Contact Us
          </Button>
        </Link>
      </div>

      {/* Let's Get Started */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-light">
          Let&apos;s Get{" "}
          <span className="font-semibold text-rose-500">Started</span>
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          The difference between an idea and a successful product? The right
          execution.
        </p>
        <Link href="contactus">
          <Button className="inline-flex items-center bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition">
            Book a Free Consultation
            {/* Optional icon */}
            <ArrowPathIcon className="h-5 w-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

"use client";
import { ArrowPathIcon } from "@heroicons/react/24/outline"; // Optional: For button icon

import { Button } from "../ui/button";

import Link from "next/link";

export default function SupportSection() {
  return (
    <section className="w-full lg:p-15 md:p-10 p-5">
      {/* Back Button */}

      {/* Still Have Questions */}
      <div className="text-center text-xl font-light">
        <span>Still Have </span>
        <span className="font-semibold text-rose-500 cursor-default select-none">
          Questions?
        </span>
      </div>

      {/* Contact Support Card */}
      <div className="bg-green-100 rounded-lg p-6 flex items-center space-x-6 shadow-md">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">Contact Support</h3>
          <p className="text-gray-700">
            Our support system is ready to answer any additional questions you
            might have
          </p>
        </div>
        <Link href="ContactUs">
          <Button>Contact Us</Button>
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
          <Button>
            Book a Free Consultation
            {/* Optional icon */}
            <ArrowPathIcon className="h-5 w-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import image2 from "../public/images/Pexels Photo by Tima Miroshnichenko.png";
import image3 from "../public/images/Pexels Photo by luis gomes.png";
import image1 from "../public/images/Pexels Photo by Christina Morillo.png";

import Image from "next/image";
// components/ResourcesInsights.js
export default function ResourcesInsights() {
  const posts = [
    {
      id: 1,
      title: "How to Build & Validate your MVP the Smart Way",
      excerpt:
        "Learn simple steps to turn ideas into usable, testable products quickly.",
      image: image1,
      url: "blog",
    },
    {
      id: 2,
      title: "Mastering Products & Project Management for Tech Success",
      excerpt:
        "Discover tools and tips for managing your product from idea to launch.",
      image: image2,

      url: "blog",
    },
    {
      id: 3,
      title: "Building Scalable Platforms; What every Start-up should Know",
      excerpt:
        "We break down how to build reliable, user-focused web & mobile platforms.",
      image: image3,
      url: "blog",
    },
  ];

  return (
    <section className="lg:px-16 md:px-10 px-5 py-16">
      <div className="flex justify-between items-start md:items-center mb-12 flex-col md:flex-row gap-5">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Resources & Insights
          </h2>
          <p className="text-gray-600 mt-1 text-sm">Latest from Our Blog</p>
        </div>
        <Link
          href="blog"
          className="  flex items-center font-semibold text-teal-600 hover:text-teal-800"
          aria-label="Explore all blog posts"
        >
          Explore All
          <svg
            className="ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      <div className=" grid bg-[#F6FBF8] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(({ id, title, excerpt, image, url }) => (
          <article
            key={id}
            className="flex  flex-col border items-center w-full h-full border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <Image
              src={image}
              alt={title}
              className="rounded-t-lg w-full md:h-[206px] object-cover"
            />
            <div className="md:p-6 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-700 text-sm">{excerpt}</p>
              <Link
                href={url}
                className="mt-4 inline-block text-teal-600 font-semibold hover:underline"
                aria-label={`Read more about ${title}`}
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

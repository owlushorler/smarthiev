"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../../public/images/Mockup.png";
import Link from "next/link";
import { Button } from "../ui/button";

// Sample topic filters
const topics = [
  "All Topics",
  "Product Strategy",
  "Product Development",
  "Strategic Business Planning",
];

// Sample articles data with topic tagging
const articles = [
  {
    id: 1,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Review development steps to transform ideas into launching, validated products quickly.",
    imageSrc: image,
    url: "#",
    topics: ["Product Strategy", "Product Development"],
  },
  {
    id: 2,
    title: "Excelling in Product & Project Management for Team Success",
    description:
      "Ensure focus and strategic prioritizing to product team on large scale projects.",
    imageSrc: image,
    url: "#",
    topics: ["Product Development", "Strategic Business Planning"],
  },
  {
    id: 3,
    title: "Creating Reusable Platform Essential Insights for Every Startup",
    description:
      "We discuss how to develop and implement reusable software and product planning.",
    imageSrc: image,
    url: "#",
    topics: ["Strategic Business Planning"],
  },
  {
    id: 4,
    title: "Top Hustles in MVP Development and How to Tackle Them",
    description:
      "Common challenges in MVP development and how to resolve them efficiently.",
    imageSrc: image,
    url: "#",
    topics: ["Product Development"],
  },
  {
    id: 5,
    title: "Major Obstacles in Creating a Minimum Viable Product and Solutions",
    description:
      "Understand typical blockers and ways to overcome them to launch fast.",
    imageSrc: image,
    url: "#",
    topics: ["Product Strategy", "Product Development"],
  },
  {
    id: 6,
    title: "Challenges in MVP Development and Effective Solutions",
    description:
      "Tackling common issues faced by early-stage start-ups during MVP creation.",
    imageSrc: image,
    url: "#",
    topics: ["Product Strategy"],
  },
];

export default function RecentArticles() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics");

  // Filter articles by selected topic
  const filteredArticles =
    selectedTopic === "All Topics"
      ? articles
      : articles.filter((article) => article.topics.includes(selectedTopic));

  return (
    <section className="w-full lg:p-15 md:p-10  p-5 ">
      <h2 className="text-xl font-semibold text-[#26656A] mb-6">
        Recent Articles
      </h2>

      {/* Topics filter */}
      <nav
        aria-label="Topics"
        className="mb-8 flex flex-wrap gap-4 text-sm font-medium"
      >
        {topics.map((topic) => {
          const isActive = topic === selectedTopic;
          return (
            <Button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:bg-[#26656A] ${
                isActive
                  ? "bg-[#26656A] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {topic}
            </Button>
          );
        })}
      </nav>

      {/* Articles grid */}
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {filteredArticles.map(({ id, title, description, imageSrc, url }) => (
          <article
            key={id}
            className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
          >
            <div className="relative h-44 w-full overflow-hidden rounded-t-lg">
              <Image
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
                priority={id <= 3}
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 flex-grow">{description}</p>
              <Link
                href={url}
                className="mt-4 text-[#26656A]  text-sm font-medium"
                aria-label={`Learn more about ${title}`}
              >
                Learn More &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

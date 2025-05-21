"use client";
import { useState } from "react";
import image from "../../public/images/Mockup.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Text, Box, Card, Inset, Strong } from "@radix-ui/themes";

const articles = [
  {
    id: 1,
    title: "How to Build & Validate Your MVP Effectively",
    excerpt:
      "Discover important steps to transform ideas into functional viable products quickly.",
    image: image,
    topic: "Product Strategy",
  },
  {
    id: 2,
    title: "Excelling in Product & Project Management for Tech Success",
    excerpt:
      "Uncover tools and strategies for managing your product from concept to launch.",
    image: image,
    topic: "Product Development",
  },
  {
    id: 3,
    title: "Creating Scalable Platforms: Essential Insights for Every Startup",
    excerpt:
      "We outline how to develop dependable, user-centric web and mobile platforms.",
    image: image,
    topic: "Product Development",
  },
  {
    id: 4,
    title: "Top Hurdles in MVP Development and How to Tackle Them",
    excerpt: "Common pitfalls to MVP launches and tips to avoid them.",
    image: image,
    topic: "Product Strategy",
  },
  {
    id: 5,
    title: "Major Obstacles in Creating a Minimum Viable Product and Solutions",
    excerpt: "Key focus in strategy when launching your MVP.",
    image: image,
    topic: "Strategic Business Planning",
  },
  {
    id: 6,
    title: "Challenges in MVP Development and Effective Strategies",
    excerpt: "Mistakes to avoid during your MVP launch.",
    image: image,
    topic: "Product Strategy",
  },
];

const topics = [
  "All Topics",
  "Product Strategy",
  "Product Development",
  "Strategic Business Planning",
];

export default function RecentArticles() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics");

  const filteredArticles =
    selectedTopic === "All Topics"
      ? articles
      : articles.filter((article) => article.topic === selectedTopic);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Recent Articles</h2>

      {/* Topics Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-4 py-2 rounded-md font-medium transition
              ${
                selectedTopic === topic
                  ? "bg-teal-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-teal-100"
              }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid justify-center  place-items-center grid-cols-1 sm:grid-cols-3 gap-4 ">
        {filteredArticles.map(({ id, title, excerpt, image }) => (
          <article key={id} className="">
            <Box maxWidth="240px">
              <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <Image
                    src={image}
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Text as="p" size="2">
                  <Strong>{title}</Strong>
                  <br /> {excerpt}
                </Text>
                <Button className="bg-white text-black mt-3 hover:cursor-pointer">
                  Learn More
                </Button>
              </Card>
            </Box>
          </article>
        ))}
      </div>
    </section>
  );
}

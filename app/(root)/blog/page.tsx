// components/InsightsSection.js
import RecentArticles from "@/components/blog/RecentArticles";
import TrendingArticles from "@/components/blog/trendinArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
  description: "Smarthieve Bog",
};

export default function InsightsSection() {
  return (
    <nav>
      <section className="max-w-6xl body_bg mx-auto px-6 py-12 flex  md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#28656A] mb-4">
            Smarthivetech Insights - Trends, Innovations & Best Practices
          </h2>
          <p className="text-[#28656A]">
            Stay updated with comprehensive articles on product management, web
            development, and business strategies.
          </p>
        </div>

        {/* Decorative dots on the right */}
        <div className="flex flex-col items-center space-y-4 ml-6">
          <span className="w-4 h-4 rounded-full border-2 border-gray-400"></span>
          <span className="w-5 h-5 rounded-full bg-[#28656A]"></span>
          <span className="w-3 h-3 rounded-full bg-gray-500"></span>
        </div>
      </section>
      <RecentArticles />
      <TrendingArticles />
    </nav>
  );
}

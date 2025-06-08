import Image from "next/image";
import image from "../../public/images/Mockup.png";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, validated products quickly.",
    imageSrc: image, // Replace with your images
    url: "#",
  },
  {
    id: 2,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, validated products quickly.",
    imageSrc: image,
    url: "#",
  },
  {
    id: 3,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, validated products quickly.",
    imageSrc: image,
    url: "#",
  },
  {
    id: 4,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, validated products quickly.",
    imageSrc: image,
    url: "#",
  },
];

export default function TrendingArticles() {
  return (
    <section
      aria-labelledby="trending-articles-title"
      className="w-full lg:p-15 md:p-10 p-5"
    >
      <h2
        id="trending-articles-title"
        className="text-xl font-semibold text-gray-900 mb-8"
      >
        Discover Trending Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map(({ id, title, description, imageSrc, url }) => (
          <article
            key={id}
            className="flex flex-row  bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative w-[50%]  shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 hover:scale-105"
                priority={id <= 2}
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
              <Link
                href={url}
                className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
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

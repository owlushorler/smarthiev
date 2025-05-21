import Image from "next/image";
import image from "../../public/images/Mockup.png";

const articles = [
  {
    id: 1,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, testable products swiftly.",
    imgSrc: image, // Replace this path with your image path
    link: "#",
  },
  {
    id: 2,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, testable products swiftly.",
    imgSrc: image,
    link: "#",
  },
  {
    id: 3,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, testable products swiftly.",
    imgSrc: image,
    link: "#",
  },
  {
    id: 4,
    title: "How to Build & Validate Your MVP Effectively",
    description:
      "Discover straightforward steps to transform ideas into functional, testable products swiftly.",
    imgSrc: image,
    link: "#",
  },
];

export default function TrendingArticles() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold mb-8">
        Discover Trending Articles
      </h2>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map(({ id, title, description, imgSrc, link }) => (
          <a
            key={id}
            href={link}
            className="flex lg:max-w-[609px] lg:h-[322px] max-w-[350px] h-[185px] border border-[#CEDFD9] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 items-center p-2 "
          >
            <div className="relative lg:w-[279px] lg:h-[266px] h-[153px] w-[161px] flex-shrink-0">
              <Image
                src={imgSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="p-4 flex flex-col  justify-between h-full py-6">
              <h3 className="text-sm  font-semibold leading-snug">{title}</h3>
              <p className="mt-1 text-xs text-gray-600">{description}</p>
              <span className="mt-2 text-xs font-medium text-black underline">
                Learn More
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

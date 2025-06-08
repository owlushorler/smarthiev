import { Button } from "./ui/button";
import Link from "next/link";

// components/ServicesGrid.js
export default function ServicesGrid() {
  interface serviceDto {
    id: number;
    title: string;
    description: string;
    icon: string;
  }

  const services = [
    {
      id: 1,
      title: "MVP Development",
      description: "From idea to prototype, you invest",
      icon: "🛠️",
    },
    {
      id: 2,
      title: "Consulting & Product Strategy",
      description:
        "Roadmaps, market positioning, and business validation for start-ups & enterprises.",
      icon: "📊",
    },
    {
      id: 3,
      title: "Product & Project Management",
      description:
        "We handle the entire execution lifecycle so you can focus on growth.",
      icon: "📋",
    },
    {
      id: 4,
      title: "Software & Platform Development",
      description:
        "Web, mobile & SaaS products built for scalability & efficiency.",
      icon: "💻",
    },
  ];

  return (
    <section className="p-6 max-w-screen justify-center mt-2  bg-gradient-to-br from-[#CEDFD9] via-teal-50 to-[#CEDFD9] bg-[#CEDFD9] gap-5 flex flex-col items-center py-10">
      <h2 className="text-4xl font-semibold mb-8">What We Do Best</h2>
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ id, title, description, icon }: serviceDto) => (
          <div
            key={id}
            className="bg-[#28656A] w-full h-full md:p-5 p-3 text-green-200 rounded-lg 
             flex flex-col gap-4 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-3xl w-14 h-14 rounded-2xl">{icon}</div>
            <div className="w-[303px] flex flex-col gap-5">
              {" "}
              <h3 className="font-bold text-white text-lg">{title}</h3>
              <p className="text-sm">{description}</p>
              <Link
                href="service"
                className="text-green-00 hover:text-green-100 text-xs mt-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link href="service">
        <Button>Explore All Services &rarr;</Button>
      </Link>
    </section>
  );
}

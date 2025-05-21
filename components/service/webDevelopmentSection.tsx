// components/WebDevelopmentSection.js
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export interface YourDataDTO {
  topic: string;
  content: string;
  list1?: string;
  list2?: string;
  list3?: string;
  list4?: string;
  list5?: string;
  button: string;
  img: string;
  style: string;
}

export default function WebDevelopmentSection({
  topic,
  content,
  list1,
  list2,
  list3,
  list4,
  list5,
  button,
  img,
  style,
}: YourDataDTO) {
  return (
    <section className="max-w-7xl mx-auto px-6 ">
      <div className={style}>
        <ul className="space-y-5 flex-1 max-w-md">
          <h2 className="md:text-3xl text-xl font-semibold  mb-4">{topic}</h2>
          <p className="text-[#28656A]  mb-10">{content}</p>

          <ul className="flex flex-col items-left gap-3 text-[#28656A]">
            {/* Bullet icon */}
            <li>
              {" "}
              <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-yellow-400"></span>
              <span className="p-3 md:text-[15px] text-sm  ">{list1}</span>
            </li>
            <li>
              {" "}
              <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-yellow-400"></span>
              <span className="p-3 md:text-[15px] text-sm  ">{list2}</span>,
            </li>
            <li>
              {" "}
              <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-yellow-400"></span>
              <span className="p-3 md:text-[15px] text-sm  ">{list3}</span>
            </li>
            <li>
              {" "}
              <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-yellow-400"></span>
              <span className="p-3 md:text-[15px] text-sm  ">{list4}</span>
            </li>
            {list5 && (
              <li>
                {" "}
                <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-yellow-400"></span>
                <span className="p-3 md:text-[15px] text-sm  ">{list5}</span>
              </li>
            )}
          </ul>

          <div className="mt-12 text-center">
            <Link href="contactUs">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-md  hover:cursor-pointer shadow-md transition">
                {button}
              </Button>
            </Link>
          </div>
        </ul>

        <div className="flex-1 max-w-xl w-full relative rounded-lg ">
          <Image
            src={img}
            alt="Laptop showing custom website"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

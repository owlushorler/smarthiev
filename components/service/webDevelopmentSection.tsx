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
    <section className="w-full mt-5 md:px-10 lg:px-15 px-5   ">
      <div className={style}>
        <ul className="w-full md:w-[50%] flex flex-col  gap-6   ">
          <h2 className="md:text-3xl text-xl font-semibold  mb-4">{topic}</h2>
          <p className="text-[#28656A]  ">{content}</p>

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

          <div className=" text-center">
            <Link href="contactUs">
              <Button>{button}</Button>
            </Link>
          </div>
        </ul>

        <div className="w-full md:w-[50%] px-5 md:px-10 relative rounded-lg ">
          <Image
            src={img}
            alt="Laptop showing custom website"
            width={200}
            height={200}
            className="rounded-lg   w-full"
          />
        </div>
      </div>
    </section>
  );
}

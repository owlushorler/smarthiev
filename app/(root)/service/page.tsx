import WebDevelopmentSection from "@/components/service/webDevelopmentSection";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import WhyWorkWithUs from "@/components/service/whyWorkwithOur";
const book: string = "/images/Laptop Mockups.png";
export default function CreativeSolutions() {
  return (
    <nav>
      <section
        className="content2_bg relative bg-cover bg-center flex items-center justify-start"
        aria-label="Let's get started hero section"
      >
        {/* Overlay */}
        <div className="absolute inset-0    bg-black opacity-20"></div>

        {/* Content */}
        <nav className="px-10">
          <div className=" grid grid-cols-1 md:grid-cols-2    mx-auto text-left  md:text-left">
            <h2 className="text-4xl font-semibold leading-snug text-gray-900">
              We create{" "}
              <span className="text-red-500 font-semibold">
                innovative solutions
              </span>{" "}
              that helps{" "}
              <span className="text-red-500 font-semibold">your business</span>{" "}
              grow and enhances{" "}
              <span className="text-red-500 font-semibold">
                your digital presence
              </span>
            </h2>
            <div></div>
          </div>
        </nav>
      </section>
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-[#28656A] mb-4 ">
          {" "}
          At Smarthive, we specialise in designing and developing custom
          websites and mobile apps that are tailored to your business needs. Our
          team of experienced developers, designers, and project managers works
          closely with you to understand your unique requirements and deliver
          solutions that exceed your expectations.
        </p>
      </div>
      <WebDevelopmentSection
        topic="Web Development &amp; Revamp"
        content="  A powerful website isn’t just an online presence - it’s your brand’s first impression. Whether you need a brand new site or a complete revamp, we create websites that engage, convert, and scale.
"
        list1="Custom website design & development."
        list2="Website revamp for outdated or underperforming sites."
        list3="SEO optimized, fast-loading & mobile-responsive views."
        list4="E-commerce, landing pages & corporate sites."
        list5="Upgrade your online presence!"
        button=" Get a Free Quote"
        img={book}
        style=" body_bg flex flex-col-reverse  lg:flex-row  justify-center items-center gap-10"
      />
      <WebDevelopmentSection
        topic="Web  &amp; Mobile App Developer"
        content="We build robust, user-friendly web and mobile applications tailored to your business needs. From MVPs to full scale products, our apps are built for performance, security & growth."
        list1="Custom website & mobile applications (Android, iOS, PWA)"
        list2=" MVP development for start-ups & enterprises"
        list3="Scalable architectures with modern frameworks."
        list4="API integrations & cloud development"
        list5="Turn your idea into reality!"
        button=" Get a Free Quote"
        img="/images/Mockup.png"
        style=" body_bg flex flex-col-reverse  lg:flex-row-reverse justify-center items-center gap-10"
      />
      <WebDevelopmentSection
        topic="MVP Development"
        content=" Your Minimum Viable Product (MVP) is your fastest way to validate ideas
      and attract users. We help you launch fast, iterate smart, and scale
      strategically."
        list1="  Rapid MVP development (4-12 weeks)"
        list2="  Learn, scalable, and investor-ready solutions"
        list3="  Market validation & early user testing."
        list4="   Validate your idea!"
        button=" Let's Build"
        img="/images/mvp-what-is-an-mvp-mvp-design-minimum-viable-product-ux-design-protoype 3.png"
        style=" body_bg flex flex-col-reverse  lg:flex-row justify-center items-center gap-10"
      />

      <WebDevelopmentSection
        topic="  IT Consultation  &amp; Product Management"
        content="Tech decisions can make or break your business.
         We guide start-ups and businesses in building the right digital products, the right way."
        list1="IT strategy and technology consultation"
        list2="Product & project management for agile teams"
        list3="Tech audits, process optimization & scaling guidance"
        list4="Need expert guidance?"
        button="Schedule a Free Call"
        img="/images/Laptop Mockups.png"
        style=" body_bg flex flex-col-reverse  lg:flex-row-reverse justify-center items-center gap-10"
      />

      <div className="max-w-4xl mx-auto px-6 py-8 text-center flex items-center justify-center gap-3">
        <p className="text-gray-800 text-3xl font-medium">
          Want to see our work? Check out our portfolio
        </p>
        <Link href="/">
          <div className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition">
            View Projects
            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-1" />
          </div>
        </Link>
      </div>

      <WhyWorkWithUs />
    </nav>
  );
}

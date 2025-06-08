import ContactInfo from "@/components/contactUs/contactInfo";
import ContactForm from "@/components/contactUs/form";

export default function BuildTogether() {
  return (
    <div>
      <div className="content3_bg">
        <section className=" w-full lg:p-15 md:p-10 p-5 ">
          <h2 className="text-4xl font-light  text-[#28656A] leading-tight">
            <span className="font-semibold text-rose-500">Let’s</span>{" "}
            <span>Build </span>
            <span className="font-semibold">Something</span>{" "}
            <span>Great Together</span>
          </h2>
          <p className="text-2xl text-gray-600 ">
            Have a <span className="font-medium text-[#28656A] ">project</span>{" "}
            in mind? Need guidance? Fill out the form, and our team will get
            back to you within{" "}
            <span className="font-semibold text-black">24 hours</span>.
          </p>
        </section>
      </div>
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

import { Button } from "../ui/button";

export default function MeetOurTeam() {
  return (
    <section
      className="content_bg relative  bg-cover bg-center w-full h-full flex items-center justify-center"
      aria-label="Let's get started hero section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4  flex flex-col items-center text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Meet Our Team
        </h1>
        <p className="mb-6 text-sm md:text-base">
          We’re a team of experienced software engineers, product managers,
          designers, and business strategists who understand both the technical
          and business side of product development.
        </p>
        <div className=" text-black grid grid-cols-1 justify-between md:grid-cols-3 gap-4">
          <div className="bg-[#EF6C57]  w-full rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-lg mb-2">Full-Stack Engineers</h3>
            <p>Building powerful, high-performance applications.</p>
          </div>
          <div className="bg-[#EF6C57]  w-full rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-lg mb-2">
              Product Design Experts
            </h3>
            <p>Ensuring every feature aligns with business goals.</p>
          </div>
          <div className="bg-[#EF6C57]  w-full rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-lg mb-2">Product Managers</h3>
            <p>Keeping your development on track and aligned.</p>
          </div>
        </div>
        <div className="my-4">Want a team that gets it?</div>

        <Button>Schedule a call</Button>
      </div>
    </section>
  );
}

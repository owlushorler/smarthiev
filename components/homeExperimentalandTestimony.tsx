// components/ExperienceAndTestimonials.js
export default function ExperienceAndTestimonials() {
  const stats = [
    {
      subtitle: "Backed by Experience",
      title: "10+ Years",
      description: "Product development & consulting",
    },
    {
      subtitle: "Start-ups & Enterprises Trust Us",
      title: "20+",

      description: "Helping businesses across industries",
    },
    {
      subtitle: "Proven Results",
      title: "100+",

      description: "Successful launches, SMB + growth",
    },
  ];

  const testimonials = [
    {
      rating: 5,
      text: "SmarthriveTech helped us go from an idea to a fully operational product in just 3 months. Their strategic insights saved us from costly mistakes.",
      author: "Mr Frank",
      role: "Founder of Smorah 8",
    },
    {
      rating: 5,
      text: "SmarthriveTech helped us go from an idea to a fully operational product in just 3 months. Their strategic insights saved us from costly mistakes.",
      author: "Mr Frank",
      role: "Founder of Smorah 8",
    },
    {
      rating: 5,
      text: "SmarthriveTech helped us go from an idea to a fully operational product in just 3 months. Their strategic insights saved us from costly mistakes.",
      author: "Mr Frank",
      role: "Founder of Smorah 8",
    },
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-[#28656A] inline-block"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M9.049 2.927C9.349 2.011 10.651 2.011 10.951 2.927l.9 2.917a1 1 0 00.95.69h3.06c.969 0 1.371 1.24.588 1.81l-2.476 1.795a1 1 0 00-.364 1.118l.9 2.916c.3.914-.755 1.67-1.54 1.118L10 13.347l-2.456 1.823c-.784.552-1.838-.204-1.54-1.118l.9-2.916a1 1 0 00-.364-1.118L4.564 8.344c-.783-.57-.38-1.81.588-1.81h3.06a1 1 0 00.95-.69l.9-2.917z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-6 max-w-7xl mt-4 mx-auto">
      {/* Experience Stats */}
      <div className="flex  flex-col md:flex-row justify-center items-center gap-10 mb-20">
        {stats.map(({ title, subtitle, description }, idx) => (
          <div
            key={idx}
            className="bg-[#28656A] w-[348px] h-[134px] rounded-2xl px-[5px] sm:px-0 sm:pr-[5px]  "
          >
            <div className="flex flex-col bg-[#F6FBF8] py-[10px]  h-[134px] rounded-2xl items-center  text-center  justify-between  md:border-t-0 ">
              {" "}
              <p className="text-sm font-bold  text-[#28656A]">{subtitle}</p>
              <h3 className="text-3xl font-semibold text-red-400 mb-1">
                {title}
              </h3>
              {description && (
                <p className="mt-1 text-xs font-semibold  text-[#28656A]">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Client Testimonials */}
      <h2 className="text-xl font-semibold text-teal-900 mb-10 text-center">
        Client testimonials
      </h2>
      <div className="flex flex-col sm:px-10 md:px-8  md:flex  md:flex-row justify-between md:max-w-[1249px] sm:max-w-[718px]  items-center gap-6">
        {testimonials.map(({ rating, text, author, role }, idx) => (
          <div
            key={idx}
            className=" flex flex-col justify-between border max-w-[354px] h-[205px] sm:h-[153px] md:w-[395px] md:h-[266px] sm:w-[227px] border-teal-200 rounded-lg p-3 shadow-sm hover:shadow-md transition"
          >
            <div className="">{renderStars(rating)}</div>
            <p className="text-teal-700  text-[10px]">{text}</p>
            <p className=" text-[10px] font-semibold text-teal-900">{author}</p>
            <p className=" text-[10px] text-xs text-teal-600">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

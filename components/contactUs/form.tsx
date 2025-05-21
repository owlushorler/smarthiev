"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
      agree: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      company: Yup.string(),
      projectType: Yup.string(),
      message: Yup.string(),
      agree: Yup.boolean().oneOf([true], "You must accept before submitting"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // Here you can handle form submission, e.g., send data to API
    },
  });

  return (
    <div className="lg:max-w-[1247px] lg:h-[673px]   max-w-4xl mx-auto p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="body_bg space-y-6  lg:max-w-[1247px] lg:h-[673px] flex flex-col justify-between "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="lg:max-w-[607px] lg:h-[84px] ">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter your name"
              className={`body_bg   mt-1 block w-full h-[52px] bg-[#F6FBF8] rounded-md border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="mt-1 text-xs text-red-600">{formik.errors.name}</p>
            ) : null}
          </div>

          {/* Email Address */}
          <div className="lg:max-w-[607px] lg:h-[84px] ">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
              className={`mt-1 block w-full h-[52px] bg-[#F6FBF8] rounded-md border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-1 text-xs text-red-600">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Company Name */}
          <div className="lg:max-w-[607px] lg:h-[84px] ">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
              placeholder="Enter your company name"
              className="mt-1 block w-full h-[52px] bg-[#F6FBF8] rounded-md border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>

          {/* Project Type */}
          <div className="lg:max-w-[607px] lg:h-[84px] ">
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700"
            >
              Project Type
            </label>
            <input
              id="projectType"
              name="projectType"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectType}
              placeholder="E.g., Web Development"
              className="mt-1 block w-full rounded-md h-[52px] bg-[#F6FBF8] border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Message */}
        <div className="max-w-[1247px] h-[247px] ">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Write your message here..."
            className="mt-1 block w-full h-[197px] rounded-md border border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.agree}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="ml-2 block text-sm text-gray-600">
            I request kindly read to the before submission
          </label>
        </div>
        {formik.touched.agree && formik.errors.agree ? (
          <p className="text-xs text-red-600">{formik.errors.agree}</p>
        ) : null}

        {/* Submit Button */}
        <div className=" flex justify-center items-center ">
          <Button
            type="submit"
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

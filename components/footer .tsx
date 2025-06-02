// components/Footer.js
import Image from "next/image";
import logo from "../public/images/shslogo 1.png";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="">
      <div className="flex justify-center bg-[#F6FBF8]  border-t-8  border-[#28656A] lg:px-16 md:px-10 px-5 py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600 text-sm">
          {/* Services */}
          <div className="w-full">
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Web Development & E-commerce</li>
              <li>Web & Mobile App Development</li>
              <li>MVP Development</li>
              <li>IT Consultation & Product Management</li>
            </ul>
          </div>

          {/* Explore */}
          <div className="w-full">
            <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-teal-600">
                {" "}
                <Link href="/"> Resources </Link>
              </li>
              <li className="cursor-pointer hover:text-teal-600">
                {" "}
                <Link href="faq"> FAQ </Link>{" "}
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-full">
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-teal-600">
                {" "}
                <Link href="aboutus">About Us </Link>{" "}
              </li>
              <li className="cursor-pointer hover:text-teal-600">
                <Link href="service"> Our Services</Link>
              </li>
              <li className="cursor-pointer hover:text-teal-600">
                {" "}
                <Link href="blog"> Our Team </Link>
              </li>
              <li className="cursor-pointer hover:text-teal-600">
                {" "}
                <Link href="contactUs">Contact Us</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Logo & Copyright */}
      <div className="flex flex-col items-center not-[]:justify-center">
        <Image src={logo} alt="logo" />
        <p className="text-xs text-gray-500">
          © 2025 ABC. All rights reserved.
        </p>
        <div className="flex space-x-4 mb-7 text-gray-600">
          {/* Social icons */}
          <a href="#" aria-label="Facebook" className="hover:text-teal-600">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.12 8.44 9.87v-6.99h-2.54v-2.88h2.54v-2.2c0-2.5 1.48-3.89 3.75-3.89 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.85h2.77l-.44 2.88h-2.33v6.99C18.34 21.19 22 17.06 22 12.07" />
            </svg>
          </a>
          <a href="#" aria-label="X (Twitter)" className="hover:text-teal-600">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 19c7.732 0 11.964-6.41 11.964-11.964 0-.18 0-.358-.012-.535a8.56 8.56 0 002.106-2.176 8.198 8.198 0 01-2.355.647 4.11 4.11 0 001.804-2.268 8.191 8.191 0 01-2.6.982A4.099 4.099 0 0015.847 6c-2.266 0-4.102 1.835-4.102 4.1 0 .32.037.632.105.933-3.41-.172-6.433-1.803-8.46-4.29a4.094 4.094 0 00-.555 2.061c0 1.423.724 2.678 1.823 3.413a4.074 4.074 0 01-1.855-.513v.05c0 1.984 1.412 3.641 3.292 4.016a4.086 4.086 0 01-1.85.07c.52 1.616 2.03 2.791 3.817 2.823a8.212 8.212 0 01-5.078 1.75c-.33 0-.655-.02-.975-.057A11.588 11.588 0 008 19" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-teal-600">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-teal-600">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

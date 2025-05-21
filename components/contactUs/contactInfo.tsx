export default function ContactInfo() {
  return (
    <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200">
      <div className="flex flex-col justify-center sm:flex-row sm:justify-between text-sm text-gray-700">
        {/* Contact Us */}
        <div className="mb-4 sm:mb-0">
          <h3 className="font-semibold mb-1">Contact us</h3>
          <a
            href="mailto:smarthivetechsolution@gmail.com"
            className="text-blue-600 hover:underline break-all"
          >
            smarthivetechsolution@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="mb-4 sm:mb-0 text-center">
          <h3 className="font-semibold mb-1">Location</h3>
          <p>Lagos, Nigeria</p>
        </div>

        {/* Contact Number */}
        <div className="text-right">
          <h3 className="font-semibold mb-1">Contact Number</h3>
          <a
            href="tel:+2349024232473"
            className="text-blue-600 hover:underline"
          >
            +234 902 423 2473
          </a>
        </div>
      </div>
    </footer>
  );
}

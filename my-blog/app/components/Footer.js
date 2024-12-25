export default function Footer() {
  return (
    <footer className=" w-full bg-neutral-900 text-white bottom-0">
      {/* Footer content */}
      <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Company Name</h2>
          <p className="text-sm text-gray-400">
            Providing quality services since 2020.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">
            <i className="fas fa-envelope mr-2"></i>
            contact@company.com
          </p>
          <p className="text-sm">
            <i className="fas fa-phone-alt mr-2"></i>
            +123 456 7890
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full py-3 text-center text-sm bg-neutral-800"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        &copy; 2024 All rights reserved.
      </div>
    </footer>
  );
}

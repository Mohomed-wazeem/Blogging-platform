export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-950 via-gray-950 to-blue-950 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Branding Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold tracking-wide">Blog Loom</h2>
          <p className="text-sm text-gray-500 mt-2">
            Inspiring stories, insightful posts, and in-depth articles since 2020.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-400 transition-colors"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-400 transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm">
            <i className="fas fa-envelope mr-2 text-blue-400"></i>
            BlogLoom@company.com
          </p>
          <p className="text-sm mt-2">
            <i className="fas fa-phone-alt mr-2 text-blue-400"></i>
            +75-5158190
          </p>
        </div>
      </div>

      <div className="w-full py-4 text-center text-sm bg-blue-950">
        &copy; {new Date().getFullYear()} BlogLoom. All rights reserved. Created by Wazeem.
      </div>
    </footer>
  );
}

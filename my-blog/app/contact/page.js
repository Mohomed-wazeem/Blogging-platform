// "use client";

// import { useState } from "react";

// export default function ContactUs() {
//   const [agreed, setAgreed] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-6">
//       <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
//         {/* Left Section - Form */}
//         <div className="p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">
//             Please Feel Free to Contact Us
//           </h1>
//           <form className="space-y-6">
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Enter your message"
//                 required
//               />
//             </div>

//             {/* Newsletter Toggle */}
//             <div className="flex items-center justify-between">
//               <span className="text-sm text-gray-600">
//                 Subscribe to newsletter?
//               </span>
//               <button
//                 type="button"
//                 onClick={() => setAgreed(!agreed)}
//                 className={`${
//                   agreed ? "bg-indigo-600" : "bg-gray-200"
//                 } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
//               >
//                 <span
//                   className={`${
//                     agreed ? "translate-x-6" : "translate-x-1"
//                   } inline-block h-4 w-4 transform bg-white rounded-full transition`}
//                 />
//               </button>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Right Section - Image Gallery */}
//         <div className="bg-gradient-to-r  p-8 flex flex-col justify-center items-center gap-4">
         
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="/images/contactus.webp"
//               alt="Contact image 1"
//               className="w-250 h-250 "
//             />
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-6">
      <div className="relative max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Banner Section */}
        <div className="relative">
          <img
            src="/images/contactus_banner.webp"
            alt="Contact Us Banner"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative -mt-10 mx-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            We'd love to hear from you!
          </h2>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your message"
                required
              />
            </div>

            {/* Newsletter Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Subscribe to newsletter?
              </span>
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`${
                  agreed ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
              >
                <span
                  className={`${
                    agreed ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                />
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Image Gallery */}
        <div className="p-8 flex flex-col justify-center items-center gap-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/contactus.webp"
              alt="Contact image 1"
              className="w-24 h-24 rounded-full shadow-lg"
            />
            <img
              src="/images/contactus.webp"
              alt="Contact image 2"
              className="w-24 h-24 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

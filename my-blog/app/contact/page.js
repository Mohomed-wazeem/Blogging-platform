// "use client";
// import { useState } from "react";

// export default function ContactUs() {
//   const [inputs, setInputs] = useState({});
//   const [message, setMessage] = useState("");

//   const handleInput = (e) => {
//     setInputs((state) => {
//       return { ...state, [e.target.name]: e.target.value };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Fixed typo
//     fetch(process.env.NEXT_PUBLIC_API_URL + "/enquiry", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(inputs),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setMessage(res.message);
//         setInputs({});
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-start">
//       <div className="relative w-full">
//         <img
//           src="/images/contactusbnr.jpeg"
//           alt="Contact Us Banner"
//           className="w-full h-60 object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
//           <h1 className="text-4xl font-bold text-white drop-shadow-lg">
//             Contact Us
//           </h1>
//         </div>
//       </div>

//       <div className="relative -mt-14 bg-white w-4/5 sm:w-3/5 lg:w-2/5 p-8 rounded-lg shadow-lg mb-16">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//           We'd love to hear from you!
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Your Name
//             </label>
//             <input
//               onChange={handleInput}
//               type="text"
//               value={inputs.name ?? ""}
//               id="name"
//               name="name"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               onChange={handleInput}
//               type="email"
//               value={inputs.email ?? ""}
//               id="email"
//               name="email"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Message
//             </label>
//             <textarea
//               onChange={handleInput}
//               value={inputs.message ?? ""}
//               id="message"
//               name="message"
//               rows={3}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your message"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Send Message
//           </button>
//         </form>
//         {/* {message && <p>{message}</p>} */}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function ContactUs() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility

  const handleInput = (e) => {
    setInputs((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_API_URL + "/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message || "Thank you! Your message has been sent.");
        setInputs({});
        setShowPopup(true); // Show the popup
        setTimeout(() => setShowPopup(false), 3000); // Auto-hide after 3 seconds
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-start">
      {/* Popup message */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-3 px-5 rounded-lg shadow-lg z-50 transition duration-300 ease-in-out">
          {message}
        </div>
      )}

      <div className="relative w-full">
        <img
          src="/images/contactusbnr.jpeg"
          alt="Contact Us Banner"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="relative -mt-14 bg-white w-4/5 sm:w-3/5 lg:w-2/5 p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          We'd love to hear from you!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              onChange={handleInput}
              type="text"
              value={inputs.name ?? ""}
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              onChange={handleInput}
              type="email"
              value={inputs.email ?? ""}
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              onChange={handleInput}
              value={inputs.message ?? ""}
              id="message"
              name="message"
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

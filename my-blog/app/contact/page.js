"use client";

import { useState } from "react";

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-start">

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

      <div className="relative -mt-14 bg-white w-4/5 sm:w-3/5 lg:w-2/5 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          We'd love to hear from you!
        </h2>
        <form className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
        
      </div>
      

      <div className="mt-8 flex flex-col items-center gap-4">
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
  );
}

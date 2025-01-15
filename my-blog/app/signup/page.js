"use client";
import { useState } from "react";
import Link from 'next/link';

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        window.location.href = "/signin"; // Redirect to Sign In page
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong");
        alert(data.error); // Show the alert for duplicate user
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
      alert(error.message); // Show alert for other errors
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-32 text-center p-6 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link href="/signin" legacyBehavior>
            <a className="text-blue-500 hover:underline">Sign in</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

"use client";
import { useState } from "react";
import Link from 'next/link';

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.href = "/";
        const data = await response.json();
        console.log("Sign in successful:", data);
        alert("Sign in successful!");
        
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Invalid email or password");
        alert(errorData.error);
      }
    } catch (err) {
      console.error("Error during sign in:", err.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-32 text-center p-6 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      <form onSubmit={handleSignIn}>
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
          Sign In
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" legacyBehavior>
            <a className="text-blue-500 hover:underline">Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;


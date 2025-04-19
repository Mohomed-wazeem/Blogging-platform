"use client";

import { useEffect } from "react";

export default function Redirecting({ url }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = url;
    }, 1000); 

    return () => clearTimeout(timeout);
  }, [url]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
      <p className="text-gray-600 text-lg">Redirecting to sign in...</p>
    </div>
  );
}

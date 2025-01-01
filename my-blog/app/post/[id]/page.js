"use client";
import { useEffect, useState } from "react";
import { use } from "react";

export default function Post({ params }) {
  const { id } = use(params);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, [id]);

  return (
    <>
      {post ? (
        <main className="container mx-auto px-4 py-6">
          {/* Metadata Section */}
          <div className="text-center mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase">
              {post.category || "Blogging"}
            </span>
            <div className="flex justify-center space-x-3 text-gray-500 mt-2">
              <p>{post.created_at_formatted}</p>
              <p>{post.author || "Admin"}</p>
              <p>{post.reading_time || "5min Read"}</p>
            </div>
          </div>
          {/* Title */}
          <h1 className="text-5xl font-bold text-center mb-6">{post.title}</h1>
          {/* Image */}
          <div className="flex justify-center mb-6">
            <img
              src={post.image}
              alt="Post Image"
              className="rounded-lg shadow-md w-3/4 max-w-4xl h-auto"
            />
          </div>
          {/* Description */}
          <p className="text-lg leading-relaxed">{post.description}</p>
        </main>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <img src="/images/loading2.gif" alt="Loading" className="w-25 h-25" />
        </div>
      )}
    </>
  );
}

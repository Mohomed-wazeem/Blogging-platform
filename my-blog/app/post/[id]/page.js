"use client";
import { useEffect, useState } from "react";
import { use } from "react";

export default function Post({ params }) {
  // Use React.use to unwrap params since it's a promise
  const { id } = use(params);

  const [post, setPost] = useState(null);
  const [blogs, setBlogs] = useState([]); // State for related blogs

  useEffect(() => {
    // Check if id is valid before making the fetch request
    if (!id || typeof id !== "string" || id.length !== 24) {
      console.error("Invalid ID format");
      return;
    }

    // Fetch the specific blog post
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((error) => console.error("Failed to fetch post:", error));

    // Fetch related blogs based on category (or any other logic)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`)
      .then((res) => {
        if (!res.ok) {
          console.warn(`Failed to fetch related blogs for ID: ${id}`);
          return []; // Return an empty array as fallback if fetch fails
        }
        return res.json();
      })
      .then((res) => {
        if (Array.isArray(res)) {
          setBlogs(res.filter((p) => p._id !== id)); // Exclude the current blog
        } else {
          console.error("Unexpected response format for blogs:", res);
        }
      })
      .catch((error) => console.error("Failed to fetch related blogs:", error));
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

          <h1 className="text-5xl font-bold text-center mb-6">{post.title}</h1>

          <div className="flex justify-center mb-6">
            <img
              src={post.image}
              alt="Post Image"
              className="rounded-lg shadow-md w-3/4 max-w-4xl h-auto"
            />
          </div>

          <p className="text-lg leading-relaxed mb-8">{post.description}</p>

          {blogs && blogs.length > 0 ? (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Related Blogs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <a
                    href={`/api/blogs/${blog._id}`}
                    alt="blog Image"
                    key={blog._id}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={blog.image || "/placeholder.jpg"}
                      alt={blog.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-xl font-semibold">{blog.title}</h3>
                      <p className="text-sm text-gray-600">
                        {blog.short_description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <p>No related blogs found.</p>
          )}


          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Comments</h2>
            <div className="space-y-6">
              <textarea
                className="w-full border rounded-lg p-3"
                placeholder="Leave a comment..."
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                Submit Comment
              </button>
            </div>
          </div>

          {/* Back to Blogs Button */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back to Blogs
            </a>
          </div>
        </main>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <img src="/images/loading2.gif" alt="Loading" className="w-25 h-25" />
        </div>
      )}
    </>
  );
}

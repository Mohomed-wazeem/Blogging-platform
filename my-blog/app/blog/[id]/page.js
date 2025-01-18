'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // use navigation from next/navigation
import { useParams } from 'next/navigation';

export default function Blog() {
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  const params = useParams(); // Accessing route params
  const router = useRouter(); // Router for redirection (only client-side)

  // Ensure we are only using the router on the client-side
  useEffect(() => {
    setIsClient(true); // Mark as client-side once the component has mounted
  }, []);

  useEffect(() => {
    if (params.id) {
      // Fetch the blog post and related blogs using the `id`
      fetch(`/api/blog/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data.blog); // Blog data
          setBlogs(data.relatedBlogs); // Related blogs
          setLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch post:', error);
          setLoading(false);
        });
    }
  }, [params.id]);

  const handleRelatedBlogClick = (id) => {
    if (isClient) {
      // Redirect to the clicked related blog's page
      router.push(`/blog/${id}`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Blog not found</p>
      </div>
    );
  }

  return (
    <>
      <main className="container mx-auto px-4 py-6">
        {/* Blog metadata */}
        <div className="text-center mb-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {blog.category || 'Blogging'}
          </span>
          <div className="flex justify-center space-x-3 text-gray-500 mt-2">
            <p>{blog.created_at_formatted}</p>
            <p>{blog.author || 'Admin'}</p>
            <p>{blog.reading_time || '5min Read'}</p>
          </div>
        </div>

        {/* Blog title and content */}
        <h1 className="text-5xl font-bold text-center mb-6">{blog.title}</h1>

        <div className="flex justify-center mb-6">
          <img
            src={blog.image || '/placeholder.jpg'}
            alt="Post Image"
            className="rounded-lg shadow-md w-3/4 max-w-4xl h-auto"
          />
        </div>

        <p className="text-lg leading-relaxed mb-8">{blog.description}</p>

        {/* Related blogs */}
        {blogs.length > 0 && (
          <div>
            <h2 className="text-3xl font-semibold mb-4">Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((relatedBlog) => (
                <div
                  key={relatedBlog._id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleRelatedBlogClick(relatedBlog._id)} // Handle click to switch blog
                >
                  <img
                    src={relatedBlog.image || '/placeholder.jpg'}
                    alt={relatedBlog.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-semibold">{relatedBlog.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {relatedBlog.short_description || relatedBlog.description.substr(0, 250) + '...'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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


          <div className="mt-12 text-center">
            <a
              href="/"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back to Blogs
            </a>
          </div>
      </main>
      
    </>
  );
}



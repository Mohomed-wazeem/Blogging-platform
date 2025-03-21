'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Link from 'next/link'; 

export default function Blog() {
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]); // Related blogs
  const [comments, setComments] = useState([]); // Comments
  const [newComment, setNewComment] = useState({ author: '', content: '' }); // New comment state
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  const params = useParams(); // Accessing route params
  const router = useRouter(); // Router for redirection (only client-side)

  useEffect(() => {
    setIsClient(true); // Mark as client-side once the component has mounted
  }, []);

  useEffect(() => {
    fetch(`/api/blog/${params.id}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const contentType = res.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return res.json();
    } else {
      return res.text(); // Handle non-JSON responses
    }
  })
  .then((data) => {
    if (typeof data === 'string') {
      console.error('Received non-JSON response:', data);
      setLoading(false);
      return;
    }
    setBlog(data.blog);
    setBlogs(data.relatedBlogs);
    setComments(data.blog.comments);
    setLoading(false);
  })
  .catch((error) => {
    console.error('Failed to fetch post:', error);
    setLoading(false);
  });

  }, [params.id]);

  const handleRelatedBlogClick = (id) => {
    if (isClient) {
      // Redirect to the clicked related blog's page
      router.push(`/blog/${id}`);
    }
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.author || !newComment.content) {
      alert('Please fill in both fields');
      return;
    }
    fetch(`/api/blog/${params.id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then(() => {
        setComments((prev) => [...prev, newComment]);
        setNewComment({ author: '', content: '' });
      })
      .catch((error) => {
        console.error('Failed to add comment:', error);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin text-blue-500" role="status">
          <span className="sr-only">Loading...</span>
        </div>
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
        {Array.isArray(blogs) && blogs.length > 0 && (
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

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Comments</h2>
          <div className="space-y-6">
            <textarea
              className="w-full border rounded-lg p-3"
              placeholder="Leave a comment..."
              name="content"
              value={newComment.content}
              onChange={handleCommentChange}
            />
            <input
              className="w-full border rounded-lg p-3"
              placeholder="Your name..."
              name="author"
              value={newComment.author}
              onChange={handleCommentChange}
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Submit Comment
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold">All Comments</h3>
            <div className="space-y-6 mt-4">
              {comments.map((comment, index) => (
                <div key={index} className="border-t pt-4">
                  <p className="font-semibold">{comment.author}</p>
                  <p className="text-gray-600">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            Back to Blogs
          </Link>
        </div>
      </main>
    </>
  );
}

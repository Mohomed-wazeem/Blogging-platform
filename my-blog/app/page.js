'use client';
import Link from "next/link";
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState(false);
  const inputRef = useRef("/");

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        console.log("Blogs fetched successfully:", response.data); // Debugging log
        setBlogs(response.data.blogs || []); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const searchPost = async (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;
    setSearch(true);
    try {
      const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?q=${inputRef.current.value}`);
      const blogsResponse = await axios.get(`/api/blogs?q=${inputRef.current.value}`);
      setPosts(postsResponse.data);
      setBlogs(blogsResponse.data.blogs);
    } catch (error) {
      console.error("Error searching:", error);
    } finally {
      setSearch(false);
    }
  };

  return (
    <>
      <main className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="text-center px-8 py-4 z-10">
          <h1 className="text-5xl font-extrabold text-white mb-14 drop-shadow-lg">
            Welcome to Our Blog Platform
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed drop-shadow">
            Discover inspiring stories, insightful posts, and in-depth articles. Search for content that resonates with you and start exploring!
          </p>
          <div className="bg-gray-800 shadow-lg rounded-lg px-6 py-5 max-w-3xl mx-auto flex items-center gap-2">
            <input
              onKeyDown={searchPost}
              ref={inputRef}
              type="text"
              className="flex-grow px-4 py-2 border border-gray-600 rounded-md text-gray-300 bg-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search blogs here..."
            />
            <button
              onClick={searchPost}
              disabled={search}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold transition-all duration-300 ease-in-out"
            >
              {search ? "..." : "Search"}
            </button>
          </div>
        </div>
      </main>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Featured Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           
            {posts.map((post) => (
              <Link href={`/post/${post._id}`} key={post._id}>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <img className="w-full h-40 object-cover" src={post.image} alt="img" />
                  <div className="p-4 bg-white">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.short_description}</p>
                  </div>
                </div>
              </Link>
            ))}

            {blogs.map((blog) => (
              <Link href={`/blog/${blog._id}`} key={blog._id}>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <img
                    className="w-full h-40 object-cover"
                    src={blog.image || "/placeholder.jpg"}
                    alt={blog.title}
                  />
                  <div className="p-4 bg-white">
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {blog.short_description || blog.description.substr(0, 250) + '...'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

           
          </div>
        </div>
      </section>
    </>
  );
}

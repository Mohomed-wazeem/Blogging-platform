// "use client";
// import { useEffect, useState } from "react";
// import { use } from "react";

// export default function Post({ params }) {
//   // Use React.use to unwrap params since it's a promise
//   const { id } = use(params);

//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     if (!id || typeof id !== "string" || id.length !== 24) {
//       console.error("Invalid ID format");
//       return;
//     }

//     // Fetch the specific blog post
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
//       .then((res) => res.json())
//       .then((res) => setPost(res))
//       .catch((error) => console.error("Failed to fetch post:", error));
//   }, [id]);

//   return (
//     <>
//       {post ? (
//         <main className="container mx-auto px-4 py-6">
//           {/* Metadata Section */}
//           <div className="text-center mb-4">
//             <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase">
//               {post.category || "Blogging"}
//             </span>
//             <div className="flex justify-center space-x-3 text-gray-500 mt-2">
//               <p>{post.created_at_formatted}</p>
//               <p>{post.author || "Admin"}</p>
//               <p>{post.reading_time || "5min Read"}</p>
//             </div>
//           </div>

//           <h1 className="text-5xl font-bold text-center mb-6">{post.title}</h1>

//           <div className="flex justify-center mb-6">
//             <img
//               src={post.image}
//               alt="Post Image"
//               className="rounded-lg shadow-md w-3/4 max-w-4xl h-auto"
//             />
//           </div>

//           <p className="text-lg leading-relaxed mb-8">{post.description}</p>

//           {/* Comments Section */}
//           <div className="mt-12">
//             <h2 className="text-3xl font-semibold mb-4">Comments</h2>
//             <div className="space-y-6">
//               <textarea
//                 className="w-full border rounded-lg p-3"
//                 placeholder="Leave a comment..."
//               />
//               <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
//                 Submit Comment
//               </button>
//             </div>
//           </div>

//           {/* Back to Blogs Button */}
//           <div className="mt-12 text-center">
//             <a
//               href="/"
//               className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//             >
//               Back to Blogs
//             </a>
//           </div>
//         </main>
//       ) : (
//         <div className="flex items-center justify-center h-screen">
//           <img src="/images/loading2.gif" alt="Loading" className="w-25 h-25" />
//         </div>
//       )}
//     </>
//   );
// }




"use client";
import { useEffect, useState } from "react";
import { use } from "react";

export default function Post({ params }) {
  const { id } = use(params);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || typeof id !== "string" || id.length !== 24) {
      console.error("Invalid ID format");
      setLoading(false);
      return;
    }

    // Fetch the specific blog post
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Post Data:", res); // Log the entire post data to inspect the structure
        if (res) {
          setPost(res);
        } else {
          console.error("Post not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch post:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src="/images/loading2.gif" alt="Loading" className="w-25 h-25" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">Post not found</p>
      </div>
    );
  }

  // Check if relatedBlogs exists and is an array
  const relatedBlogs = Array.isArray(post.relatedBlogs) ? post.relatedBlogs : [];

  return (
    <>
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

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 ? (
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog._id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => window.location.href = `/post/${relatedBlog._id}`}
                >
                  <img
                    src={relatedBlog.image || '/placeholder.jpg'}
                    alt={relatedBlog.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-semibold">{relatedBlog.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {relatedBlog.short_description ||
                        relatedBlog.description.substr(0, 250) + "..."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p>No related blogs available.</p>
          </div>
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
    </>
  );
}

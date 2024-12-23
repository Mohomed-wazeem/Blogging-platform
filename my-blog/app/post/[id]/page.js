// 'use client'
// import { useEffect } from "react";

// export default function Post({params}) {
//     const id = params.id;

//     useEffect(() ={
//         fetch(process.env.NEXT_PUBLIC_API_URL+'/post/'+id)
//         .then(res => res.json())
//         .then(res. => setPost(res))
//     },[])

//     return <>
//      <main className="container mx-auto px-4 py-6">
//         <h2 className="text-4xl font-bold mb-4">Blog post</h2>
//         <p className="text-gray-600 text-sm">Published</p>
//         <img className="w-full h-40 object-cover mb-4" src={"post.image"} alt="img" />
//         <h2 className="text-xl font-semibold mb-2">{"post.title"}</h2>
//         <p className="text-gray-600 text-sm">{"post.short.description"}</p>
//     </main>
//     </>

//      <main className="container mx-auto px-4 py-6">
//         <h2 className="text-4xl font-bold mb-4">Blog post</h2>
//         <p className="text-gray-600 text-sm">Published</p>
//         <img className="w-full h-40 object-cover mb-4" src={"post.image"} alt="img" />
//         <h2 className="text-xl font-semibold mb-2">{"post.title"}</h2>
//         <p className="text-gray-600 text-sm">{"post.short.description"}</p>
//     </main>   
    
// }

'use client';
import { useEffect, useState } from "react";

export default function Post({ params }) {
  const { id } = params; // Destructure `id` from params
  const [post, setPost] = useState(null); // State for storing post data

  useEffect(() => {
    // Fetch the post data
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]); // Dependency array includes `id`

  // Show a loading state if `post` is not yet fetched
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-6">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-600 text-sm">Published: {post.publishedDate || "Unknown"}</p>
      <img
        className="w-full h-40 object-cover mb-4"
        src={post.image || "/placeholder.jpg"}
        alt={post.title || "Post image"}
      />
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 text-sm">{post.short?.description || "No description available."}</p>
    </main>
  );
}

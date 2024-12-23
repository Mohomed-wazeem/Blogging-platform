'use client';
import Image from "next/image";
import Link from "next/link";
import { useParams } from 'next/navigation'; 
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+'/posts')
    .then((res) => res.json() )
    .then(res => setPosts(res))
  },[]);

  return (
    <>
      <main className=" px-4 py-6 bg-blue-100">
      <div className="container mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to our blog post</h1>
      <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt doloribus, nostrum, asperiores assumenda non minima, minus aperiam nobis porro hic dolorem. Nulla hic itaque iste ipsum est voluptatem veniam.</p>
      <div className="container px-2 py-5 text-center">
        <input type="text" className="w-2/3 px-4 py-2 border border-gray mr-1 text-left" placeholder="Search blogs here" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded" >Search</button>
      </div>
      </div>
      </main>
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Featured Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {posts.map((post) => (
              <Link href={"/post/" + post._id} key={post._id}>
                <div className="border border-gray-200 p-4">
                <img className="w-full h-40 object-cover mb-4" src={post.image} alt="img" />
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.short_description}</p>
                </div>
              </Link>
            )
            )}

          </div>
        </div>
      </section>
     
    </>
  );
}


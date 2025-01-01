'use client';
import Image from "next/image";
import Link from "next/link";
import { useParams } from 'next/navigation'; 
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick"; // For the banner slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Home() {
  const [posts, setPosts] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] =  useState(false);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+'/posts')
    .then((res) => res.json() )
    .then(res => setPosts(res))
  },[]);

  const searchPost= (e) => {
    if(e.type == 'keydown' && e.key !== 'Enter'){
      return;
    }
    setSearch(true);
    fetch(process.env.NEXT_PUBLIC_API_URL+'/posts?q='+inputRef.current.value)
      .then((res) => res.json() )
      .then(res => setPosts(res))
      .finally(() => setSearch(false))
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
 

<main className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
  {/* Background Image Overlay with Fading Effect */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-in-out" style={{ backgroundImage: "url('/images/bnrimg1.jpg')" }}></div>
    <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-in-out animation-delay-4s" style={{ backgroundImage: "url('/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg-GfWyJgBfbbxtb_BxEn8krvETU1-0YrWA&s')" }}></div>
    <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-in-out animation-delay-8s" style={{ backgroundImage: "url('/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg-GfWyJgBfbbxtb_BxEn8krvETU1-0YrWA&s')" }}></div>
  </div>

  {/* Main Content Section */}
  <div className="text-center px-8 py-4 z-10">
    <h1 className="text-5xl font-extrabold text-white mb-14 drop-shadow-lg">
      Welcome to Our Blog Platform
    </h1>
    <p className="text-lg text-gray-300 mb-10 leading-relaxed drop-shadow">
      Discover inspiring stories, insightful posts, and in-depth articles. Search for content that resonates with you and start exploring!
    </p>

    {/* Search Section */}
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

  {/* Background Animation Styles */}
  <style jsx>{`
    @keyframes fade-in-out {
      0%, 100% { opacity: 0; }
      50% { opacity: 0.5; }
    }
    .animate-fade-in-out {
      animation: fade-in-out 12s linear infinite;
    }
    .animation-delay-4s {
      animation-delay: 4s;
    }
    .animation-delay-8s {
      animation-delay: 8s;
    }
  `}</style>
</main>


 
      {/* Banner Slider */}
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Featured Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {posts.map((post) => (
              <Link href={"/post/" + post._id} key={post._id}>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <div className="relative">
                    <img className="w-full h-40 object-cover" src={post.image} alt="img" />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-75" />
                  </div>
                  <div className="p-4 bg-white">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.short_description}</p>
                  </div>
                </div>
              </Link>
            ))}
            
            <div>
              {!posts.length > 0 && inputRef.current.value &&
              <div className="flex items-center justify-center flex-col text-center text-gray-500 w-full h-64">
                <p>Sorry, We couldn't find any results</p>
                <img src="/images/NoPost.gif" alt="No Results" className="mt-4" />
              </div>}
            </div>

          </div>
        </div>
      </section>
     
    </>
  );
}

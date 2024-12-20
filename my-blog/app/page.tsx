import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            {/* Blog Card */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">How to Start Blogging</h4>
              <p className="text-gray-600 mb-4">
                Tips and tricks to help you get started with your blogging journey.
              </p>
              <Link href="/"
               className="text-blue-500 hover:underline">Read More →
              </Link>
            </div>

            {/* Blog cards */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Tech Trends in 2024</h4>
              <p className="text-gray-600 mb-4">
                Explore the latest technologies shaping the blogging industry.
                Explore the latest technologies shaping the blogging industry.
                Explore the latest technologies shaping the blogging industry.
              </p>
              <Link href="/"
               className="text-blue-500 hover:underline">Read More →
              </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Top 10 Travel Blogs</h4>
              <p className="text-gray-600 mb-4">
                Get inspired by the most popular travel blogs of this year.
              </p>
              <Link href="/"
               className="text-blue-500 hover:underline">Read More →
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Top 10 Travel Blogs</h4>
              <p className="text-gray-600 mb-4">
                Get inspired by the most popular travel blogs of this year.
              </p>
              <Link href="/"
               className="text-blue-500 hover:underline">Read More →
              </Link>
            </div>
            
          </div>
        </div>
      </section>
     
    </>
  );
}

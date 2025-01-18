'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="bg-gray-900 pb-18">
      {/* Hero Section */}

<div className="bg-gradient-to-r from-[#0a0e0a] via-[#120a3a] to-[#0a0e0a] py-24">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Meet Blogloom
      </span>
    </h1>
    <p className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
      <i>
        Discover our mission, values, and the journey that drives us forward,
        empowering you to share your unique stories and insights with the world.
      </i>
    </p>
    <div className="mt-8 flex justify-center space-x-4">
      <Link
      href="#team"
      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
      Learn More
      </Link>
      <Link
      href="/contact"
      className="px-6 py-3 bg-gray-800 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
      Contact Us
      </Link>

    </div>
  </div>
</div>


      {/* "What is a Blog?" Section */}
      <section className="bg-white py-16 shadow-lg">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div
            ref={ref}
            className={`lg:w-1/2 transition-transform duration-700 ${
              inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <Image
              src="/images/toy-bricks-table.jpg"
              alt="What is a Blog?"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What is a Blog?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A blog is a platform where individuals or organizations share ideas, insights, and stories.
              It serves as a digital diary or a source of information for a global audience. Whether you're
              documenting your personal experiences or sharing professional expertise, blogging connects
              people and fosters community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Story, Values Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Mission */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-blue-400 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
              <i>"To empower individuals to share their unique stories and insights, fostering a diverse and inclusive community through accessible and innovative blogging tools."</i><br></br>

              This mission emphasizes your platform's commitment to user empowerment, diversity, inclusivity, and innovation, aligning with the core values that resonate with a broad audience.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/mission.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Story */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 order-last lg:order-first">
              <Image
                src="/images/story1.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-purple-400 mb-4">Our Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed">

              Our journey began with a simple observation: while many individuals have unique stories and insights to share, existing platforms often lacked the tools to make blogging accessible and engaging for everyone. Determined to bridge this gap, we set out to create a user-friendly blog platform that empowers voices from all walks of life.              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-pink-400 mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                <li>Integrity and honesty in all our dealings</li>
                <li>Commitment to excellence and quality</li>
                <li>Respect for individuals and communities</li>
                <li>Innovation and continuous improvement</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/values.jpg"
                alt="Our Values"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-gray-800 py-14">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-14">Meet Our Team</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {[
        { name: 'Mohomed Wazeem', role: 'Founder & CEO', image: '/images/wazeem1.jpg' },
        { name: 'Jane Smith', role: 'Lead Developer', image: '/images/men2.jpg' },
        { name: 'Michael Brown', role: 'Marketing Specialist', image: '/images/women3.jpg' },
        { name: 'Emily Davis', role: 'Customer Support', image: '/images/woman1.jpg' },
      ].map((member, idx) => (
        <div key={idx} className="flex flex-col items-center">
          
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-700 transition-transform transform hover:scale-110 duration-300">
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              
              className="object-cover w-full h-full"
            />
          </div>
          {/* Name and Role */}
          <h3 className="text-lg font-bold text-white mt-4">{member.name}</h3>
          <p className="text-sm text-gray-400">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}


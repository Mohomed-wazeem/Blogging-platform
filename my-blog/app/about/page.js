// import Image from 'next/image';

// export default function About() {
//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           <div className="lg:w-1/2 lg:pr-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
//             <p className="text-gray-600 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
//             </p>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
//             <p className="text-gray-600 mb-6">
//               Nunc ut sem vitae risus tristique posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quis libero vitae ligula molestie dictum. Etiam quis eros lorem.
//             </p>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
//             <ul className="list-disc list-inside text-gray-600">
//               <li>Integrity and honesty in all our dealings</li>
//               <li>Commitment to excellence and quality</li>
//               <li>Respect for individuals and communities</li>
//               <li>Innovation and continuous improvement</li>
//             </ul>
//           </div>
//           <div className="lg:w-1/2 mt-10 lg:mt-0">
//             <Image src="/images/Aboutimg.jpg" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
//           </div>
//         </div>
//         <div className="mt-12 text-center">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
//           <div className="flex flex-wrap justify-center">
//             <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <Image src="/images/Aboutimg.jpg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
//                 <h3 className="text-lg font-bold text-gray-800 mt-4">John Doe</h3>
//                 <p className="text-gray-600">CEO & Founder</p>
//               </div>
//             </div>
//             <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <Image src="/images/Aboutimg.jpg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
//                 <h3 className="text-lg font-bold text-gray-800 mt-4">Jane Smith</h3>
//                 <p className="text-gray-600">Chief Operating Officer</p>
//               </div>
//             </div>
//             <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <Image src="/images/Aboutimg.jpg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
//                 <h3 className="text-lg font-bold text-gray-800 mt-4">Michael Brown</h3>
//                 <p className="text-gray-600">Head of Development</p>
//               </div>
//             </div>
//             <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <Image src="/images/Aboutimg.jpg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
//                 <h3 className="text-lg font-bold text-gray-800 mt-4">Emily Davis</h3>
//                 <p className="text-gray-600">Marketing Manager</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">About Us</h1>
        
        {/* Mission, Story, Values Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 lg:pr-12">
            {/* Mission */}
            <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
            </p>

            {/* Story */}
            <h2 className="text-3xl font-semibold text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nunc ut sem vitae risus tristique posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quis libero vitae ligula molestie dictum. Etiam quis eros lorem.
            </p>

            {/* Values */}
            <h2 className="text-3xl font-semibold text-white mb-6">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-300">
              <li>Integrity and honesty in all our dealings</li>
              <li>Commitment to excellence and quality</li>
              <li>Respect for individuals and communities</li>
              <li>Innovation and continuous improvement</li>
            </ul>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image 
              src="/images/Aboutimg.jpg" 
              alt="About Us" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member Card */}
            {["John Doe", "Jane Smith", "Michael Brown", "Emily Davis"].map((name, idx) => (
              <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 duration-300">
                  <Image 
                    src="/images/Aboutimg.jpg" 
                    alt="Team Member" 
                    width={150} 
                    height={150} 
                    className="rounded-full mx-auto mb-4 shadow-md" 
                  />
                  <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                  <p className="text-gray-600">Role</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

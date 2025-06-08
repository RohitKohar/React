import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import UserContext from '../context/userDetailContext';
import ProfileCard from './ProfileCard';

const About = () => {
  const user = {
    name: "John Doe",
    bio: "A passionate developer with a love for creating intuitive user experiences.",
    avatar:
      "https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1453167464043-YWCO1KRYYH7SJNC3D1ZM/image-asset.jpeg",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
  };
  return (
    <UserContext.Provider value={user}>
      <div className='flex justify-center items-center min-h-[60vh] bg-gray-100 py-8'>
        <ProfileCard />
      </div>
  </UserContext.Provider>
);

  // return (
  //   // <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
  //   //   <div className="max-w-5xl mx-auto text-center">
  //   //     <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-800">
  //   //       Welcome to <span className="text-blue-600">Rohit Kohar</span>
  //   //     </h1>
  //   //     <p className="text-lg md:text-xl text-gray-600 mb-12">
  //   //       Where quality meets convenience. We’re more than just an online
  //   //       store—we're your trusted partner for a smarter shopping experience.
  //   //     </p>
  //   //   </div>

  //   //   <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
  //   //     <div className="space-y-6">
  //   //       <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
  //   //       <p className="text-gray-700 leading-relaxed">
  //   //         To redefine online shopping by offering carefully curated products,
  //   //         unbeatable prices, and a service-first approach that puts our
  //   //         customers at the heart of every decision.
  //   //       </p>

  //   //       <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
  //   //       <p className="text-gray-700 leading-relaxed">
  //   //         To become a globally trusted eCommerce brand known for innovation,
  //   //         customer-centric values, and an exceptional digital retail
  //   //         experience.
  //   //       </p>
  //   //     </div>

  //   //     <div className="bg-white shadow-xl rounded-2xl p-8 border-t-8 border-blue-600">
  //   //       <h3 className="text-xl font-semibold text-blue-700 mb-4">
  //   //         Why Choose Us?
  //   //       </h3>
  //   //       <ul className="space-y-3 text-gray-700 text-base">
  //   //         <li>✔️ Vast collection of top-quality products</li>
  //   //         <li>✔️ Fast & reliable nationwide delivery</li>
  //   //         <li>✔️ 100% secure payment options</li>
  //   //         <li>✔️ Friendly & responsive customer support</li>
  //   //         <li>✔️ Seasonal discounts and exclusive offers</li>
  //   //       </ul>
  //   //     </div>
  //   //   </div>

  //   //   <div className="mt-16 text-center">
  //   //     <p className="text-lg text-gray-600">
  //   //       Thank you for being a part of the{" "}
  //   //       <span className="font-semibold text-blue-700">Rohit Kohar</span>{" "}
  //   //       family. Your trust drives everything we do.
  //   //     </p>
  //   //   </div>
  //   // </section>
  // );
}

export default About

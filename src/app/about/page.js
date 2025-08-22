"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Editor-in-Chief",
      image: "/images/CEO-1.webp",
    },
    {
      name: "John Smith",
      role: "Senior Reporter",
      image: "/images/CEO-3.webp",
    },
    {
      name: "Emily Davis",
      role: "Digital Media Manager",
      image: "/images/CEO-2.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-black leading-tight">
          About Daily News
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Daily News is your trusted source for the latest headlines, in-depth
          stories, and breaking news from around the world. We bring you facts,
          insights, and stories that matter.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition transform hover:-translate-y-2">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
            At Daily News, our mission is to provide clear, accurate, and timely
            news to our readers. We aim to keep you informed and help you make
            better decisions in your daily life.
          </p>
        </div>
        <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition transform hover:-translate-y-2">
          <h2 className="text-3xl font-semibold text-black mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where people have access to trustworthy
            information that empowers them to stay aware, connected, and
            educated. Daily News strives to be the leading source of unbiased
            journalism.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-black">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl text-black">{member.name}</h3>
              <p className="text-gray-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Want to stay updated with the latest stories? Join our community now.
        </p>
        <Link
          href="/login"
          className="inline-block px-10 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      {/* Newspaper icon with 404 indication */}
      <div className="relative mb-6">
        <div className="w-16 h-20 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm shadow-lg transform rotate-3"></div>
        <div className="absolute top-0 left-0 w-16 h-20 border-2 border-gray-300 rounded-sm transform -rotate-3"></div>

        {/* 404 symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span className="text-gray-700 font-bold text-xl">404</span>
          </div>
        </div>
      </div>

      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-700 mb-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-gray-600 text-sm mb-8">
          Please check the URL or try one of the options below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 cursor-pointer bg-white text-gray-900 font-medium border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="px-6 py-3 cursor-pointer bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors text-center"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

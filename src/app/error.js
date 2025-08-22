"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      {/* Newspaper icon with error indication */}
      <div className="relative mb-6">
        <div className="w-16 h-20 bg-gradient-to-b from-red-600 to-red-800 rounded-sm shadow-lg transform rotate-3"></div>
        <div className="absolute top-0 left-0 w-16 h-20 border-2 border-red-300 rounded-sm transform -rotate-3"></div>

        {/* Error symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-xl">!</span>
          </div>
        </div>
      </div>

      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-700 mb-2">
          We encountered an issue while loading the page.
        </p>
        <p className="text-gray-600 text-sm mb-8">
          Error: {error.message || "Unknown error"}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 cursor-pointer bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 cursor-pointer bg-white text-gray-900 font-medium border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors"
          >
            Reload Page
          </button>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}

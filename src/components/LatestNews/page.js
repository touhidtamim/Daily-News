"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LatestNewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data.slice(0, 4));
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              Latest News
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Stay updated with our most recent stories and insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 animate-pulse border border-gray-100"
              >
                <div className="h-52 bg-gray-200"></div>
                <div className="p-5">
                  <div className="h-5 bg-gray-200 rounded-full w-1/3 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Latest News
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-700 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with our most recent stories and insights
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-gray-200"
            >
              {item.image && (
                <div className="overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {item.category && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white text-black text-xs font-semibold rounded-full z-20">
                      {item.category}
                    </span>
                  )}
                </div>
              )}

              <div className="p-5">
                <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    {item.author && (
                      <span className="text-xs text-gray-500 font-medium">
                        By {item.author}
                      </span>
                    )}
                    <span className="text-xs text-gray-500 mt-1">
                      {item.publishDate &&
                        new Date(item.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                    </span>
                  </div>
                  <button
                    onClick={() => router.push(`/news/${item._id}`)}
                    className="px-4 py-2 cursor-pointer text-xs font-semibold bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-md flex items-center"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <button
            onClick={() => router.push("/news")}
            className="px-8 py-3 cursor-pointer bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg flex items-center justify-center mx-auto"
          >
            View All News
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

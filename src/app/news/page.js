"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(news.map((item) => item.category).filter(Boolean)),
  ];

  // Filter news by selected category
  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen  bg-white text-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mb-4"></div>
          <p className="text-lg">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Latest News & Articles
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay informed with the latest stories and insights from our
            publication
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 pb-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No news articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div
                key={item._id}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                {item.image && (
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {item.category && (
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                      {item.category}
                    </span>
                  )}

                  <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">
                        {item.author && `By ${item.author}`}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        {item.publishDate &&
                          new Date(item.publishDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                      </span>
                    </div>
                    <button
                      onClick={() => router.push(`/news/${item._id}`)}
                      className="px-4 py-2 text-xs font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

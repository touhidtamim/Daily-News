"use client";

import { useState } from "react";

export default function AddNewsPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "",
    image: "",
    publishDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("News article published successfully");
        setForm({
          title: "",
          description: "",
          content: "",
          category: "",
          author: "",
          image: "",
          publishDate: "",
        });
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen mt-15 bg-white text-black flex justify-center items-start p-4 md:p-8">
      <div className="w-full max-w-2xl bg-white rounded-none md:rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-black text-white p-6">
          <h1 className="text-2xl font-bold tracking-tight">
            PUBLISH NEW ARTICLE
          </h1>
          <p className="text-gray-300 mt-1 text-sm">
            Fill in the details below to create a news article
          </p>
        </div>

        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">TITLE</label>
              <input
                type="text"
                name="title"
                placeholder="Enter news title"
                value={form.title}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                CATEGORY
              </label>
              <input
                type="text"
                name="category"
                placeholder="e.g. Politics, Technology"
                value={form.category}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium tracking-wide">
              DESCRIPTION
            </label>
            <input
              type="text"
              name="description"
              placeholder="Brief summary of the article"
              value={form.description}
              onChange={handleChange}
              className="w-full p-3 border-b border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium tracking-wide">CONTENT</label>
            <textarea
              name="content"
              placeholder="Write the full article content here..."
              value={form.content}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 bg-white text-black h-40 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                AUTHOR
              </label>
              <input
                type="text"
                name="author"
                placeholder="Author's name"
                value={form.author}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                PUBLISH DATE & TIME
              </label>
              <input
                type="datetime-local"
                name="publishDate"
                value={form.publishDate}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium tracking-wide">
              IMAGE URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={form.image}
              onChange={handleChange}
              className="w-full p-3 border-b border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-4 bg-black text-white hover:bg-gray-900 disabled:bg-gray-500 transition-all duration-300 font-medium tracking-wider text-sm uppercase rounded-none"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                PUBLISHING...
              </span>
            ) : (
              "PUBLISH ARTICLE"
            )}
          </button>

          {message && (
            <div
              className={`p-4 rounded-none border-l-4 ${
                message.includes("successfully")
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "bg-red-50 border-red-500 text-red-700"
              }`}
            >
              <p className="font-medium">{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

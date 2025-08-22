import React from "react";

export default async function NewsPage() {
  const res = await fetch("/api/news");
  const news = await res.json();

  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-4">
      {news.map((item) => (
        <div key={item._id} className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p>{item.description}</p>
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="mt-2 max-h-60 w-full object-cover rounded"
            />
          )}
          <p className="text-sm text-gray-500 mt-1">
            {item.category} | {item.author} | {item.date}
          </p>
        </div>
      ))}
    </div>
  );
}

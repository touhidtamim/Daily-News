export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Newspaper icon animation */}
      <div className="relative mb-6">
        <div className="w-16 h-20 bg-gradient-to-b from-gray-800 to-black rounded-sm shadow-lg transform rotate-3 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-16 h-20 border-2 border-gray-300 rounded-sm transform -rotate-3 animate-ping"></div>

        {/* Animated lines representing text */}
        <div className="absolute top-4 left-3 w-10 h-0.5 bg-gray-400 animate-pulse"></div>
        <div className="absolute top-6 left-3 w-8 h-0.5 bg-gray-400 animate-pulse"></div>
        <div className="absolute top-8 left-3 w-6 h-0.5 bg-gray-400 animate-pulse"></div>
      </div>

      {/* Text with typing animation */}
      <div className="text-center">
        <p className="text-gray-700 font-medium text-lg mb-3">
          Loading Daily News
        </p>
        <div className="flex justify-center space-x-1">
          <div
            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

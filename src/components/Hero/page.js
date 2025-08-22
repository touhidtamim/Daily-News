"use client";

export default function HeroSection() {
  return (
    <section className="relative bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Left content */}
          <div className="md:col-span-3">
            <div className="flex items-center mb-5">
              <div className="w-10 h-px bg-black mr-3"></div>
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                Trusted News Since 2024
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Daily News: Your Source for{" "}
              <span className="border-b-4 border-black">Clarity & Truth</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Daily News delivers timely, accurate reporting on the stories that
              matter most. In our first year, we've built a reputation for
              balanced journalism that cuts through the noise and provides
              clarity in a complex world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors">
                Read Latest News
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 font-medium border border-gray-400 rounded-sm hover:bg-gray-50 transition-colors">
                Subscribe Now
              </button>
            </div>

            <div className="mt-10 flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-black mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                24/7 News Updates
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-black mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Fact-Checked Content
              </div>
            </div>
          </div>

          {/* Right content - stats */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 p-8 border border-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Our Impact in Numbers
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-700">
                      Monthly Readers
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      50K+
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 h-1.5">
                    <div
                      className="bg-black h-1.5"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-700">
                      Articles Published
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      840+
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 h-1.5">
                    <div
                      className="bg-black h-1.5"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-700">
                      Countries Reached
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      30+
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 h-1.5">
                    <div
                      className="bg-black h-1.5"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-700 italic">
                  Rated 4.8/5 for accuracy and clarity by our readers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

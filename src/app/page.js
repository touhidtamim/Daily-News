import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-24">
        <h1 className="text-6xl font-bold text-black">Daily News</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
          Stay updated with the latest headlines and in-depth stories from
          around the world.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/news"
            className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Read News
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 border border-black text-black font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-10 text-black">
          Latest Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sample news cards */}
          <div className="card hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-black">
              Breaking: Economy Update
            </h3>
            <p className="text-gray-600 mt-3">
              Global stock markets see major changes this week as investors
              react to new policies...
            </p>
            <Link
              href="/news/1"
              className="mt-4 inline-block text-gray-800 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>

          <div className="card hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-black">
              Sports: World Cup Fever
            </h3>
            <p className="text-gray-600 mt-3">
              Exciting matches lined up as the World Cup continues. Fans are
              thrilled by unexpected results...
            </p>
            <Link
              href="/news/2"
              className="mt-4 inline-block text-gray-800 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>

          <div className="card hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-black">
              Technology: AI Trends
            </h3>
            <p className="text-gray-600 mt-3">
              Experts predict AI will reshape industries faster than expected.
              Innovations emerge every day...
            </p>
            <Link
              href="/news/3"
              className="mt-4 inline-block text-gray-800 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

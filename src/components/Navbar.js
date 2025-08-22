import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Daily News
        </Link>
        <div className="space-x-6">
          <Link href="/news" className="text-gray-700 hover:text-blue-600">
            News
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

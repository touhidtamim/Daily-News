export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 sm:py-10 text-center">
      <p className="text-gray-600 text-sm sm:text-base">
        © {new Date().getFullYear()} Daily News. All rights reserved.
      </p>
    </footer>
  );
}

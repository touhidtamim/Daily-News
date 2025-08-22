export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Daily News. All rights reserved.
      </p>
    </footer>
  );
}

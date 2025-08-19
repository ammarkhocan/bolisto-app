import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="flex items-center gap-10 border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">
        <Link to="/">📌BOlISTO</Link>
      </h1>

      <ul className="flex space-x-8">
        <li>
          <Link
            to="/"
            className="font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

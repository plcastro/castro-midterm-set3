import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-gray-900/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-3 px-6">
        <p className="whitespace-nowrap text-base font-bold text-white lg:text-xl ">
          <span className="p-2 rounded bg-teal-500 text-gray-900 ">Tech</span>{" "}
          Gadget Inventory Hub
        </p>

        <ul className="hidden items-center gap-4 md:flex border-gray-700 text-xs font-bold border rounded-lg p-2 ">
          <li>
            <Link
              to="/"
              className={`block whitespace-nowrap rounded-md px-2 py-2 transition hover:bg-gray-800 hover:text-teal-400 lg:px-4  ${
                location.pathname === "/"
                  ? "bg-teal-500 text-gray-900"
                  : "text-slate-400"
              }`}
            >
              Register Gadget
            </Link>
          </li>
          <li>
            <Link
              to="/view-table"
              className={`block whitespace-nowrap rounded-md px-2 py-2 transition hover:bg-gray-800 hover:text-teal-400 lg:px-4  ${
                location.pathname === "/view-table"
                  ? "bg-teal-500 text-gray-900"
                  : "text-slate-400"
              }`}
            >
              View Gadgets
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm text-slate-400 transition hover:bg-gray-800 hover:text-teal-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="mx-auto grid max-w-6xl gap-2 px-6 pb-4 md:hidden">
          <li>
            <Link
              to="/"
              className={`block whitespace-nowrap rounded-md px-2 py-2 transition hover:bg-gray-800 hover:text-teal-400 lg:px-4  ${
                location.pathname === "/"
                  ? "bg-teal-500 text-gray-900"
                  : "text-slate-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Register Gadget
            </Link>
          </li>
          <li>
            <Link
              to="/view-table"
              className={`block whitespace-nowrap rounded-md px-2 py-2 transition hover:bg-gray-800 hover:text-teal-400 lg:px-4  ${
                location.pathname === "/view-table"
                  ? "bg-teal-500 text-gray-900"
                  : "text-slate-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              View Gadgets
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;

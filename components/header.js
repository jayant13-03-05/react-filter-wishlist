"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="shadow-sm py-2 ">
      <nav className="flex flex-wrap items-center justify-between bg-white px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#ff3f6c]">
          Mintraa
        </Link>

        {/* Mobile Toggle (can add logic if needed later) */}
        <button className="block lg:hidden text-gray-700">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="w-full lg:flex lg:items-center lg:w-auto mt-3 lg:mt-0">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 text-gray-700 font-medium">
            <li>
              <Link href="#" className="hover:text-[#ff3f6c]">
                Men
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff3f6c]">
                Women
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff3f6c]">
                Kids
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff3f6c]">
                Home & Living
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff3f6c]">
                Beauty
              </Link>
            </li>
          </ul>

          {/* Search Form */}
          <form className="flex items-center mt-3 lg:mt-0 lg:ml-6 ">
            <input
              type="search"
              placeholder="Search for products, brands and more"
              className="px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3f6c] focus:border-transparent w-96"
              value={search}onChange={(e) => setSearch(e.target.value)} />
            <button
              type="submit"
              className="ml-2 px-3 py-1 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100"
            >
              Search
            </button>
          </form>

          {/* Profile/Wishlist/Bag */}
          <div className="flex gap-4 mt-3 lg:mt-0 lg:ml-6 text-sm text-gray-800">
            <Link href="#" className="hover:text-[#ff3f6c]">
              👤 Profile
            </Link>
            <Link href="/wishlist" className="hover:text-[#ff3f6c]">
              🖤 Wishlist
            </Link>
            <Link href="#" className="hover:text-[#ff3f6c]">
              🛒 Bag
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
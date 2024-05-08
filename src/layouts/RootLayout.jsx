import { Popover } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

const navigation = {
  pages: [
    { name: "Products", to: "products" },
    { name: "Categories", to: "categories" },
  ],
};



export default function RootLayout() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="#">
                  <span className="sr-only">Logo ku</span>
                  <img
                    className="h-8 w-auto"
                    src="/vite.svg"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.to}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

import { Popover } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Form, Link, Outlet } from "react-router-dom";
// import { searchProduct } from "../data/products";

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
                <Link to="/">
                  <span className="sr-only">Logo ku</span>
                  <img className="h-8 w-auto" src="/vite.svg" alt="" />
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
              <div className="ml-auto flex items-center gap-2">
                <Link to="products/add">
                  <button className="flex ml-auto bg-green-500 hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    Create
                  </button>
                </Link>
                <Form
                  action="/products/search"
                  className="ml-auto flex items-center"
                >
                  <div>
                    {/* Search */}{" "}
                    <input
                      type="text"
                      name="query"
                      id="search"
                      className="block w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Cari"
                    />
                  </div>
                  <button type="submit" className="mx-2">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

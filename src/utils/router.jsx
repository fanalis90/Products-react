import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import { CategoryList } from "../pages/CategoryList";
import {  loaderProducts, productCategoriesLoader, searchProductLoader } from "../data/loaderProduct";
import ProductLayout from "../layouts/ProductLayout";
import { loaderCategories } from "../data/loaderCategories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to={"/products"} /> },
          {
            path: "products",
            children: [
              {
                index: true,
                element: <ProductLayout />,
                loader: loaderProducts,
              },
              {path:"search",
                element :<ProductLayout />,
                loader: searchProductLoader
              },
              { path: ":productId" },
            ],
          },
          {
            path: "categories",
            element: <CategoryList />,
            loader : loaderCategories,
            children: [
              {
                index: true,
                element: <Navigate to={"/categories"} />,
              },
              {
                path: ":categoryName",
                children: [
                  {
                    index: true,
                    element: <ProductLayout />,
                    loader: productCategoriesLoader,
                  },
                ],
              },
            ],
          },
          { path: "*", element: <h1> 404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);

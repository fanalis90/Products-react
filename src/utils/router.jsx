import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import { ProductList } from "../pages/ProductList";
import { CategoryListRoute } from "../pages/CategoryList";
import {  loaderProducts, productCategoriesLoader } from "../data/loaderProduct";

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
                element : <ProductList />,
                loader : loaderProducts
              },
              { path: ":productId" },
            ],
          },
          {
            path: "categories",
            ...CategoryListRoute,
            children: [
              {
                index: true,element: <Navigate to={"/categories"} /> },
              {
                path: ":categoryName",
                children: [{ index: true, element: <ProductList/> , loader : productCategoriesLoader }],
              },
            ],
          },
          { path: "*", element: <h1> 404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);

import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import {
  loaderProduct,
  loaderProducts,
  productCategoriesLoader,
  searchProductLoader,
} from "../data/loaderProduct";
import ProductLayout from "../layouts/ProductLayout";
import { loaderCategories } from "../data/loaderCategories";
import { CategoryList } from "../pages/CategoryList";
import ProductDetail from "../components/ProductDetail";
import Error404 from "../pages/404";
import { NewProductRoute } from "../pages/NewProduct";

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
              {
                path: ":productId",
                element: <ProductDetail />,
                errorElement: <Error404 />,
                loader: loaderProduct,
              },
              {
                path: "search",
                element: <ProductLayout />,
                loader: searchProductLoader,
              },
              {
                path: "add",
                ...NewProductRoute,
              },
            ],
          },
          {
            path: "categories",
            element: <CategoryList />,
            loader: loaderCategories,
            children: [
              {
                index: true,
                element: <Navigate to={"/categories"} />,
              },
              {
                path: ":categoryName",
                element: <ProductLayout />,
                errorElement: <Error404 />,
                loader: productCategoriesLoader,
              },
            ],
          },
          { path: "*", element: <Error404 /> },
        ],
      },
    ],
  },
]);

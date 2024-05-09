
// import { useLoaderData } from "react-router-dom"
// import { getProducts } from "../data/products"

import ProductItem from "../components/ProductItem"

export function ProductList({productt}) {
  // const productt = useLoaderData()

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productt.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}


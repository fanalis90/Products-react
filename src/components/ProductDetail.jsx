import { useLoaderData } from "react-router-dom";


export default function ProductDetail() {
    const productDetail = useLoaderData()
    console.log(productDetail);
    
const features = [
  { name: "Name", description: productDetail.title },
  { name: "Brands", description: productDetail.brand },
  { name: "Category", description: productDetail.category },
  { name: "Discount", description: `${productDetail.discountPercentage}%` },
  { name: "Price", description: `$${productDetail.price}` },
  { name: "Rating", description: productDetail.rating },
];
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Product Details
          </h2>
          <p className="mt-4 text-gray-500">
                {productDetail.description}
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {
                productDetail.images.slice(0,4).map((image, index)=> (
                    <img
                    key={index}
                      src={image}
                      alt={`gambar ${index}`}
                      className="rounded-lg max-h-44 max-w-40 bg-gray-100"
                    />
                ))
            }
          
         
        </div>
      </div>
    </div>
  );
}

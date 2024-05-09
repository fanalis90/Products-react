import { getProductByCategories } from "./categories";
import { getProduct, getProducts, limitProducts, searchProduct } from "./products";

export function loaderProducts({ request: { signal } }) {
  return getProducts({ signal });
}
export function loaderProduct({ request: { signal }, params : {productId}}) {
  console.log(productId);
  return getProduct(productId, { signal });
}
export function searchProductLoader({ request: { signal,url } }) {
  const parameter = new URL(url).searchParams
  const query = parameter.get("query")
  return searchProduct(query, {signal}   );
}
export function limitProductsLoader({ request: { signal }, params: { limit } }) {
  return limitProducts(limit ,{ signal});
}

export function productCategoriesLoader({request:{signal}, params : {categoryName}}) {
    return getProductByCategories( categoryName , {signal });
}
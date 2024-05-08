import { getProductByCategories } from "./categories";
import { getProduct, getProducts, limitProducts, searchProduct } from "./products";

export function loaderProducts({ request: { signal } }) {
  return getProducts({ signal });
}
export function loaderProduct({ request: { signal }, params: { userId } }) {
  return getProduct(userId,{ signal});
}
export function searchProductLoader({ request: { signal }, params: { parameter } }) {
  return searchProduct(parameter, {signal}   );
}
export function limitProductsLoader({ request: { signal }, params: { limit } }) {
  return limitProducts(limit ,{ signal});
}

export function productCategoriesLoader({request:{signal}, params : {categoryName}}) {
    return getProductByCategories( categoryName , {signal });
}
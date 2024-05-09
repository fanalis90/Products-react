import { baseApi } from "./base";

export async function getProducts(option){
    const res = await baseApi.get("", option);
    return res.data;
}
export async function getProduct(productId, option){
      console.log(productId);
    const res = await baseApi.get(`/${productId}`, option);
    return res.data;
}

export async function searchProduct(param, option){
    const res = await baseApi.get(`/search?q=${param}`, option);
    return res.data;
}

export async function limitProducts(param,option) {
    const res = await baseApi.get(`?limit=${param}`, option);
    return res.data;
}

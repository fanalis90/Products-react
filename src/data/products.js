import { baseApi } from "./base";

export async function getProducts(option) {
  const res = await baseApi.get("", option);
  return res.data;
}
export async function getProduct(productId, option) {
  const res = await baseApi.get(`/${productId}`, option);
  return res.data;
}

export async function searchProduct(param, option) {
  const res = await baseApi.get(`/search?q=${param}`, option);
  return res.data;
}

export async function limitProducts(param, option) {
  const res = await baseApi.get(`?limit=${param}`, option);
  return res.data;
}

export async function createProduct(data, option) {
  const res = await baseApi.post("/add", data, option);
  console.log(res);
  return res.data;
}

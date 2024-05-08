import { baseApi } from "./base";

export function getCategories(option) {
    return baseApi.get("categories", option).then(res => res.data)
}

export function getProductByCategories(categoryName, option) {
    return baseApi.get(`category/${categoryName}`,option).then(res => res.data)
}
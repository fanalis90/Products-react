import { getCategories } from "./categories";

export function loaderCategories({ request: { signal } }) {
  return getCategories({ signal });
}

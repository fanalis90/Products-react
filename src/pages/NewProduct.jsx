import {
  redirect,
  useActionData,
  //   useLoaderData,
  useNavigation,
} from "react-router-dom";
import PostProductForm, {
  postProductFormValidator,
} from "../components/PostProductForm";
import { createProduct } from "../data/products";

function NewProduct() {
  //   const product = useLoaderData();
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  return (
    <>
  
      <PostProductForm
        // product={product}
        isSubmitting={isSubmitting}
        errors={errors}
      />
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const brand = formData.get("brand");

  const errors = postProductFormValidator({ title, brand });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const product = await createProduct(
    { title, brand },
    { signal: request.signal }
  );
  console.log(product);
  return redirect(`/products/${product.id}`);
}

// function loader({ request: { signal } }) {
//   return getProducts({ signal });
// }

export const NewProductRoute = {
  element: <NewProduct />,
  //   loader,
  action,
};

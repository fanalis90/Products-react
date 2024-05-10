import  { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import { ProductList } from "../pages/ProductList";
import { useLoaderData } from "react-router-dom";
function ProductLayout() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

const loader = useLoaderData();
  useEffect(() => {
      setData(loader.products);
  }, [loader]);

 
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItems, indexOfLastItems);
  const nPages = Math.ceil(data.length / itemsPerPage);
  return (
    <div className="container mt-5">
      <ProductList productt={currentItems} />
      
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
export default ProductLayout;

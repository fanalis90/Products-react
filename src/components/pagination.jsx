import { Link } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  if(nPages > 1) {
    return (
      
      <nav>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden"></div>
 <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
          <ul
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <li className="page-item" onClick={prevPage}>
              <Link
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={prevPage}
                to={() => false}
              >
                Previous
              </Link>
            </li>

            {pageNumbers.map((pgNumber) => (
              <li
                key={pgNumber}
                onClick={() => setCurrentPage(pgNumber)}
                className={`page-item ${
                  currentPage === pgNumber
                    ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                } `}
              >
                <Link
                  onClick={() => setCurrentPage(pgNumber)}
                  className="page-link"
                  to={() => false}
                >
                  {pgNumber}
                </Link>
              </li>
            ))}

            <li className="page-item" onClick={nextPage}>
              <Link
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={nextPage}
                to={() => false}
              >
                Next
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
  
};
export default Pagination;

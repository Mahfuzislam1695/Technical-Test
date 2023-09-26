import React from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsSkipEnd,
  BsSkipStart,
} from "react-icons/bs";

const PaginationDiv = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  pageIndex,
  canNextPage,
  nextPage,
  pageCount,
}) => {
  return (
    <div className="flex justify-between bg-indigo-100 p-2">
      <div className="flex">
        <span className="mr-2">Go to Page: </span>
        <input
          className=" pl-4 p-1 block bg-white w-6/12 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
          type="number"
          min="1"
          // defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
        />
      </div>

      <div className="flex justify-center items-center gap-2">
        <button
          className={`text-indigo-700 ${
            !canPreviousPage ? "text-gray-400" : ""
          }`}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <BsSkipStart fontSize={24} />
        </button>

        <button
          className={`text-indigo-700 ${
            !canPreviousPage ? "text-gray-400" : ""
          }`}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <BsChevronLeft fontSize={20} />
        </button>

        <div className="text-indigo-700 text-lg">{pageIndex + 1}</div>

        <button
          className={`text-indigo-700 ${!canNextPage ? "text-gray-400" : ""}`}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <BsChevronRight fontSize={20} />
        </button>

        <button
          className={`text-indigo-700 ${!canNextPage ? "text-gray-400" : ""}`}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <BsSkipEnd fontSize={24} />
        </button>
      </div>
    </div>
  );
};

export default PaginationDiv;

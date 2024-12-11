import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
  startIndex,
  endIndex,
  totalItems,
  rowsPerPage,
  handleRowsPerPageChange,
}) => {
  return (
    <div className="flex justify-end items-center gap-[5cqw] md:gap-[2cqw] px-[3cqw] py-[4cqw] md:p-[1cqw]">
      <div className="flex items-center">
        <label
          htmlFor="rows-per-page"
          className="mr-[0.5cqw] text-[3.2cqw] md:text-[0.85cqw] text-darkBlue font-inter"
        >
          Rows per page:
        </label>
        <div className="relative">
          <select
            id="rows-per-page"
            className="appearance-none outline-none  text-[3.2cqw] md:text-[0.85cqw] text-darkBlue font-inter custom-select"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-[3cqw] md:gap-[1.2cqw]">
        <span className="text-[3.2cqw] md:text-[0.85cqw] text-darkBlue font-inter">
          {startIndex} – {endIndex} of {totalItems}
        </span>
        <button
          className={`text-gray-400 ${
            currentPage > 1 ? "hover:text-darkBlue" : ""
          }`}
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className={`text-gray-400 ${
            currentPage < totalPages ? "hover:text-darkBlue" : ""
          }`}
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

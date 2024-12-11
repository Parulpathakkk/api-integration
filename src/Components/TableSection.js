import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import FetchData from "./FetchData";
import iconSearch from "../Assets/SVG (8).png";

const TableSection = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState(""); 

  const {
    data,
    loading,
    currentPage,
    totalItems,
    totalPages,
    handleNextPage,
    handlePreviousPage,
  } = FetchData("https://jsonplaceholder.typicode.com/users", rowsPerPage);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((user) => user.id));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
  };

  // Handle the search input change and filter the data
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter data based on the search query
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="border-gray-300 shadow-lg border-[0.01cqw] rounded-[1cqw] md:rounded-[0.7cqw] mt-[12cqw] md:mt-[2cqw] overflow-x-auto md:overflow-hidden">
      <div className="border-b-[0.01cqw] border-gray-300 px-[3cqw] md:px-[1cqw]">
        <div className="font-inter font-[500] text-purple text-[3.4cqw] md:text-[0.9cqw] border-purple border-b-[0.4cqw] md:border-b-[0.1cqw] inline-block py-[3cqw] md:py-[1cqw]">
          All
        </div>
      </div>
      <div className="p-[3cqw] md:p-[1cqw] flex flex-col md:flex-row gap-[3cqw] md:gap-[1cqw] md:items-center  md:h-[5cqw]">
  <div className="md:w-[80%] flex h-full">
    <div className="flex items-center gap-[1cqw] md:gap-[0.6cqw] border-[0.01cqw] border-gray-300 rounded-[1cqw] md:rounded-[0.5cqw] py-[2.6cqw] px-[1.8cqw] md:p-[0.7cqw] w-full h-full">
      <img src={iconSearch} className="w-[4cqw] md:w-[1.2cqw]" alt="icon-search" />
      <input
        className="w-full text-[3.4cqw] md:text-[0.95cqw] outline-none font-inter text-darkBlue placeholder:text-[3cqw] placeholder:md:text-[0.85cqw] placeholder:text-graytext"
        placeholder="Search Customers"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  </div>
  <div className="md:w-[20%] h-full">
    <div className=" border-[0.01cqw] border-gray-300 rounded-[1cqw] md:rounded-[0.5cqw] pl-[1.8cqw] py-[1cqw] md:px-[0.7cqw] md:pt-0 md:pb-[0.4cqw] w-full h-full relative">
      <label
        htmlFor="sort-by"
        className="text-darkBlue font-inter text-[2.8cqw] md:text-[0.75cqw] mr-[0.5cqw] whitespace-nowrap leading-none"
      >
        Sort By
      </label>
      <select
        id="sort-by"
        className="w-full text-[3.4cqw] md:text-[0.85cqw] outline-none font-inter text-darkBlue leading-none md:absolute md:bottom-2 left-[0.7cqw] custom-select2"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="name">Name</option>
      </select>
    </div>
  </div>
</div>


      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center p-[2cqw] text-purple">Loading...</div>
        ) : (
          <table className="table-auto w-full">
            <TableHeader
              handleSelectAll={handleSelectAll}
              selectAll={selectAll}
            />
            <tbody>
              {filteredData.map((user) => (
                <TableRow
                  key={user.id}
                  user={user}
                  selectedRows={selectedRows}
                  handleRowSelect={handleRowSelect}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        startIndex={currentPage * rowsPerPage - rowsPerPage + 1}
        endIndex={Math.min(currentPage * rowsPerPage, totalItems)}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default TableSection;

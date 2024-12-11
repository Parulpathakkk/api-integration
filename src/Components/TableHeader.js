import React from "react";

const TableHeader = ({ handleSelectAll, selectAll }) => {
  return (
    <thead>
      <tr className="bg-[#F8F9FA] ">
        <th className="w-[10%] p-[3cqw]">
          <div
            className={`box ${selectAll ? "bg-purple border-none" : ""}`}
            onClick={handleSelectAll}
          ></div>
        </th>
        <th className="w-[26.67%] p-[3cqw] md:p-[1cqw] text-graytext text-[3.2cqw] md:text-[0.8cqw]  font-inter font-[600] text-left">
          NAME
        </th>
        <th className="w-[26.67%] p-[3cqw] md:p-[1cqw] text-graytext text-[3.2cqw] md:text-[0.8cqw]  font-inter font-[600] text-left">
          COMPANY
        </th>
        <th className="w-[26.67%] p-[3cqw] md:p-[1cqw] text-graytext text-[3.2cqw] md:text-[0.8cqw]  font-inter font-[600] text-left">
          PHONE
        </th>
        <th className="w-[10%] p-[3cqw] md:p-[1cqw] text-graytext text-[3.2cqw] md:text-[0.8cqw]  font-inter font-[600] text-left">
          ACTIONS
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;

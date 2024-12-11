import React from "react";
import edit from "../Assets/Frame (1).png";
import arrow from "../Assets/Link → SVG.png";

const TableRow = ({ user, selectedRows, handleRowSelect }) => {
  return (
    <tr key={user.id}>
      <td className="w-[10%] border-b-[0.2cqw] border-opacity-80   md:border-b-[0.01cqw] border-gray-300 p-[3cqw] md:p-[1cqw]">
        <div
          className={`box ${selectedRows.includes(user.id) ? "bg-purple border-none" : ""}`}
          onClick={() => handleRowSelect(user.id)}
        ></div>
      </td>
      <td className="w-[26.67%] border-b-[0.2cqw] border-opacity-80  md:border-b-[0.01cqw] border-gray-300 p-[3cqw] md:p-[1cqw]">
        <p className="text-[3.6cqw] md:text-[0.9cqw] text-darkBlue font-inter font-[500] whitespace-nowrap w-full">{user.name}</p>
        <p className="text-[3.2cqw] md:text-[0.85cqw] text-graytext font-inter font-[500] whitespace-nowrap w-full">{user.email}</p>
      </td>
      <td className="w-[26.67%] text-[3.6cqw] md:text-[0.9cqw] text-darkBlue font-inter font-[350] whitespace-nowrap border-b-[0.2cqw] border-opacity-80  md:border-b-[0.01cqw] border-gray-300 p-[3cqw] md:p-[1cqw]">
        {user.company.name}
      </td>
      <td className="w-[26.67%] text-[3.6cqw] md:text-[0.9cqw] text-darkBlue font-inter font-[350] whitespace-nowrap border-b-[0.2cqw] border-opacity-80  md:border-b-[0.01cqw] border-gray-300 p-[3cqw] md:p-[1cqw]">
        {user.phone}
      </td>
      <td className="w-[10%] border-b-[0.2cqw] border-opacity-80  md:border-b-[0.01cqw] border-gray-300 p-[3cqw] md:p-[1cqw]">
        <button>
          <img src={edit} alt="edit" className="w-[5cqw] md:w-[1.3cqw]" />
        </button>
        <button className="ml-[4cqw] md:ml-[1.2cqw]">
          <img src={arrow} alt="arrow" className="w-[5.5cqw] md:w-[1.3cqw]" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

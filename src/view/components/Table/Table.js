import React from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

const Table = (props) => {
  console.log("props", props);
  return (
    <div className="overflow-x-auto">
      <table
        className="table-auto w-full border border-indigo-200 border-collapse"
        {...props.getTableProps()}
      >
        <thead className="bg-indigo-100">
          {props.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="">
              {headerGroup.headers.map((column) => (
                <th className="" {...column.getHeaderProps()}>
                  <div
                    className="p-2 flex justify-center items-center"
                    {...column.getSortByToggleProps()}
                  >
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown className="h-4" />
                      ) : (
                        <FaSortUp className="h-4" />
                      )
                    ) : (
                      <FaSort className="h-4" />
                    )}
                  </div>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...props.getTableBodyProps()}>
          {props.page.map((row, rowIndex) => {
            props.prepareRow(row);
            return (
              <tr
                align="center"
                className="odd:bg-white even:bg-slate-100 hover:bg-sky-50 cursor-pointer"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="border border-indigo-200 w-fit p-1  [&:nth-child(1)]:text-center text-left"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

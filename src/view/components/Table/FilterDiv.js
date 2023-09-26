import React from "react";
import { TbSearch } from "react-icons/tb";

const FilterDiv = ({
  globalFilter,
  pageSize,
  setGlobalFilter,
  setPageSize,
  data,
}) => {
  return (
    <div className="flex justify-between max-md:flex-col gap-4 mb-4">
      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <TbSearch className="h-5 w-5 text-slate-300" />
          </span>
          <input
            className=" placeholder:text-slate-400 block bg-white w-full border border-indigo-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            maxLength={50}
          />
        </label>
      </div>

      <div className="">
        <select
          className=" placeholder:text-slate-400 block bg-white w-full border border-indigo-300 rounded-md py-2 px-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
          value={pageSize}
          onChange={(e) => {
            const value =
              e.target.value === "all" ? data.length : Number(e.target.value);
            setPageSize(value);
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option className="mr-4" key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
          <option value={data.length}>Show All</option>
        </select>
      </div>
    </div>
  );
};

export default FilterDiv;

import React from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Table from "../../Table/Table";
import image from "../../../../asset/icon/profile.png";
import FilterDiv from "../../Table/FilterDiv";
import PaginationDiv from "../../Table/PaginationDiv";

const data = [
  {
    sl_no: 1,
    employee_id: "ATI-20220516-02",
    photo:
      "http://203.130.133.166/ATI-ERP2/UPLOADS/ATTACHMENT/EMPLOYEE/22051000001244_22-05-2022_05-53-44-pm_Mahfuz%20Islam.png",
    employee_name: "Mahfuz Islam",
    designation: "Jr. Front End Developer",
    department: "Web Development",
    phone: "01610391244",
    email: "mahfuzislam@atilimited.net",
  },
  {
    sl_no: 2,
    employee_id: "ATI-20220516-03",
    photo:
      "http://203.130.133.166/ATI-ERP2/UPLOADS/ATTACHMENT/EMPLOYEE/22051000001245_22-05-2022_01-20-04-pm_Rizeya%20Rabbi.jpg",
    employee_name: "Rizeya Rabbi",
    designation: "Jr. IOT Programmer",
    department: "Automation",
    phone: "01521314186",
    email: "rabbi@atilimited.net",
  },
  {
    sl_no: 3,
    employee_id: "ATI-20220516-01",
    photo:
      "http://203.130.133.166/ATI-ERP2/UPLOADS/ATTACHMENT/EMPLOYEE/22051000001243_07-06-2022_01-17-38-pm_Abir%20Hossain.png",
    employee_name: "Md. Abir Hossain",
    designation: "Jr. IOS App Developer",
    department: "Mobile Apps Unit",
    phone: "01521717367",
    email: "abir@atilimited.net",
  },
];

const TableEmpInfo = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "SL",
        accessor: "sl_no",
        Filter: false,
      },
      {
        Header: "Emp ID",
        accessor: "employee_id",
        Filter: false,
      },

      {
        Header: "Photo",
        accessor: "photo",
        Cell: (row) => (
          <div className="flex justify-center">
            {/* <img className="h-10 w-auto" src={image} alt="" /> */}
            <img
              className="h-10 w-10 rounded-full"
              src={row.row.original.photo}
              alt=""
            />
          </div>
        ),
        Filter: false,
      },

      {
        Header: "Emp Name",
        accessor: "employee_name",
        Filter: false,
      },
      {
        Header: "Designation",
        accessor: "designation",
        Filter: false,
      },
      {
        Header: "Department",
        accessor: "department",
        Filter: false,
      },
      {
        Header: "Mobile",
        accessor: "phone",
        Filter: false,
      },
      {
        Header: "email",
        accessor: "email",
        Filter: false,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;

  return (
    <div className="border bg-white p-4 mt-4 rounded-lg">
      <div className="mb-2 text-base font-semibold text-indigo-600">
        Employee Contact Details
      </div>

      <FilterDiv
        globalFilter={globalFilter}
        pageSize={pageSize}
        setGlobalFilter={setGlobalFilter}
        setPageSize={setPageSize}
        data={data}
      />

      <Table
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        page={page}
        prepareRow={prepareRow}
        pageIndex={pageIndex}
      />

      <PaginationDiv
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        pageIndex={pageIndex}
        canNextPage={canNextPage}
        nextPage={nextPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default TableEmpInfo;

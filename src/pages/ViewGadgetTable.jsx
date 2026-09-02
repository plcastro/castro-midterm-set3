import React from "react";
import {
  tableFeatures,
  useTable,
  rowPaginationFeature,
  createPaginatedRowModel,
} from "@tanstack/react-table";
import { Button, Typography } from "@mui/material";

export default function ViewGadgetTable({ allGadgets }) {
  console.log(allGadgets);
  const features = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
  });

  const columns = [
    { accessorKey: "gadgetName", header: "Gadget Name" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "manufacturer", header: "Manufacturer" },
    { accessorKey: "healthRating", header: "Health Rating" },
    { accessorKey: "techBrand", header: "Tech Brand" },
    { accessorKey: "userRole", header: "User Role" },
  ];
  const table = useTable({
    features,
    columns,
    data: allGadgets,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });
  return (
    <div className="w-full">
      <Typography
        variant="h4"
        className="!font-black !tracking-wide !uppercase"
      >
        Gadget Inventory
      </Typography>
      <table className="w-full mt-5">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-3 text-left">
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getAllCells().map((cell) => (
                <td key={cell.id} className="border p-3">
                  {cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end gap-2 items-center mt-2">
        <Button
          variant="contained"
          onClick={() => table.previousPage()}
          disable={!table.getCanPreviousPage()}
          className="border px-4 py-2 rounded"
        >
          Previous
        </Button>
        <span>
          Page {table.state.pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <Button
          variant="contained"
          onClick={() => table.nextPage()}
          disable={!table.getCanNextPage()}
          className="border px-4 py-2 rounded"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

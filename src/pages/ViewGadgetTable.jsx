import React, { useState, useEffect } from "react";
import {
  tableFeatures,
  useTable,
  rowPaginationFeature,
  createPaginatedRowModel,
  rowSelectionFeature,
} from "@tanstack/react-table";
import { Button, Typography, Card } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
export default function ViewGadgetTable({ allGadgets }) {
  console.log(allGadgets);
  const features = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
    rowSelectionFeature,
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
    enableMultiRowSelection: false,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  const [selectedGadget, setSelectedGadget] = useState(null);

  useEffect(() => {
    const selectedRows = table.getSelectedRowModel().rows;

    if (selectedRows.length > 0) {
      setSelectedGadget(selectedRows[0].original);
    } else {
      setSelectedGadget(null);
    }
  }, [table.getSelectedRowModel().rows]);

  return (
    <div className="w-full">
      <Typography
        variant="h4"
        align="center"
        className="!font-black !tracking-wide !uppercase"
      >
        Tech Gadget Inventory Hub
      </Typography>
      <Card className="w-full mt-5 p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border p-3 ">
                    {header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={(e) => {
                  row.getToggleSelectedHandler()(e);
                  setSelectedRow(row.id);
                }}
                className={row.getIsSelected() ? "bg-gray-300" : ""}
              >
                {row.getAllCells().map((cell) => (
                  <td key={cell.id} className="border p-3 text-sm">
                    {cell.getValue()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="flex justify-end gap-2 items-center mt-2">
        <Button
          variant="contained"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
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
          disabled={!table.getCanNextPage()}
          className="border px-4 py-2 rounded"
        >
          Next
        </Button>
      </div>
      {selectedGadget && (
        <div className="w-full mt-5">
          <ProfileCard gadgetDetails={selectedGadget} />
        </div>
      )}
    </div>
  );
}

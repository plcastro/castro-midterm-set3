import React from "react";
// import {
//   useTable,
//   tableFeatures,
//   rowSelectionFeature,
//   rowPaginationFeature,
//   createPaginatedRowModel,
// } from "@tanstack/react-table";
import { Typography } from "@mui/material";

// const features = tableFeatures({
//   rowPaginationFeature,
//   paginatedRowModel: createPaginatedRowModel(),
// });

export default function ViewGadgetTable({ allGadgets }) {
  console.log(allGadgets);
  // const table = useTable({
  //   features,
  //   columns,
  //   data,
  //   manualPagination: true,
  //   rowCount: dataQuery.data?.rowCount,
  // });
  return (
    <div>
      <Typography variant="h4" className="!font-black uppercase">
        Gadget Inventory
      </Typography>
    </div>
  );
}

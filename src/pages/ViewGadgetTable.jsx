import React, { useState, useEffect } from "react";
import { Button, Typography, Card } from "@mui/material";
import ProfileCard from "../components/ProfileCard";

export default function ViewGadgetTable({ allGadgets }) {
  const [selectedGadget, setSelectedGadget] = useState(null);
  const [filterBy, setFilterBy] = useState("none");
  const [order, setOrder] = useState("asc");

  const [page, setPage] = useState(0);
  const pageSize = 5;

  const filteredGadgets = [...allGadgets].sort((a, b) => {
    if (filterBy === "none") return 0;

    const valueA = a[filterBy];
    const valueB = b[filterBy];

    let comparison;

    if (filterBy === "healthRating") {
      comparison = Number(valueA) - Number(valueB);
    } else {
      comparison = String(valueA).localeCompare(String(valueB));
    }

    return order === "asc" ? comparison : -comparison;
  });

  const pageCount = Math.ceil(filteredGadgets.length / pageSize);

  const paginatedGadgets = filteredGadgets.slice(
    page * pageSize,
    page * pageSize + pageSize,
  );

  useEffect(() => {
    setPage(0);
  }, [filterBy, order]);

  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        className="!font-black !tracking-wide !uppercase"
      >
        Tech Gadget Inventory Hub
      </Typography>

      <Card className="w-full">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full rounded">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="border p-3">Gadget Name</th>
                <th className="border p-3">Category</th>
                <th className="border p-3">Manufacturer</th>
                <th className="border p-3">Health Rating</th>
                <th className="border p-3">Tech Brand</th>
                <th className="border p-3">User Role</th>
              </tr>
            </thead>

            <tbody>
              {paginatedGadgets.map((gadget, index) => (
                <tr
                  key={`${gadget.gadgetName}-${index}`}
                  onClick={() => {
                    setSelectedGadget(gadget);
                  }}
                  className={
                    selectedGadget === gadget
                      ? "bg-gray-300 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  <td className="p-3 text-sm">{gadget.gadgetName}</td>
                  <td className="p-3 text-sm">{gadget.category}</td>
                  <td className="p-3 text-sm">{gadget.manufacturer}</td>
                  <td className="p-3 text-sm">{gadget.healthRating}</td>
                  <td className="p-3 text-sm">{gadget.techBrand}</td>
                  <td className="p-3 text-sm">{gadget.userRole}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex gap-2 sm:flex-nowrap flex-wrap sm:justify-between justify-center mt-2">
        <div className="flex gap-2">
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="none">Filter by</option>
            <option value="gadgetName">Gadget Name</option>
            <option value="category">Category</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="healthRating">Health Rating</option>
            <option value="techBrand">Tech Brand</option>
            <option value="userRole">User Role</option>
          </select>

          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="border rounded px-3 py-2"
            disabled={filterBy === "none"}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className="flex gap-2 items-center">
          <Button
            variant="contained"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 0}
            className="!bg-teal-600"
          >
            Previous
          </Button>

          <span>
            Page {page + 1} of {pageCount}
          </span>

          <Button
            variant="contained"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= pageCount - 1}
            className="!bg-teal-600"
          >
            Next
          </Button>
        </div>
      </div>

      {selectedGadget && (
        <div className="mt-5">
          <ProfileCard gadgetDetails={selectedGadget} />
        </div>
      )}
    </div>
  );
}

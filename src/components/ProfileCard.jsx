import { useState } from "react";
import { Button, Typography, Card } from "@mui/material";
import "../App.css";
function ProfileCard({ gadgetDetails }) {
  const {
    gadgetName,
    category,
    manufacturer,
    healthRating,
    techBrand,
    userRole,
  } = gadgetDetails;
  return (
    <Card className="p-4">
      <p>
        <strong>Gadget Name:</strong> {gadgetName}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Manufacturer:</strong> {manufacturer}
      </p>
      <p>
        <strong>Health Rating:</strong> {healthRating}
      </p>
      <p>
        <strong>Tech Brand Name:</strong> {techBrand}
      </p>
      <p>
        <strong>User Role:</strong> {userRole}
      </p>
    </Card>
  );
}

export default ProfileCard;

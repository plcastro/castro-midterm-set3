import { Typography, Card } from "@mui/material";
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
    <Card className="border-t-4 border-teal-600 p-4">
      <p>Gadget Name:</p>
      <Typography variant="h6" className="!font-black">
        {gadgetName}
      </Typography>
      <p>Category:</p>{" "}
      <Typography variant="h6" className="!font-black">
        {category}
      </Typography>
      <p>Manufacturer:</p>{" "}
      <Typography variant="h6" className="!font-black">
        {" "}
        {manufacturer}
      </Typography>
      <p>Health Rating:</p>{" "}
      <Typography variant="h6" className="!font-black">
        {healthRating}
      </Typography>
      <p>Tech Brand Name:</p>{" "}
      <Typography variant="h6" className="!font-black">
        {" "}
        {techBrand}
      </Typography>
      <p>User Role:</p>{" "}
      <Typography variant="h6" className="!font-black">
        {" "}
        {userRole}
      </Typography>
    </Card>
  );
}

export default ProfileCard;

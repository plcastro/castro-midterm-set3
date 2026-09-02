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

  const colorRate = (healthRating) => {
    if (healthRating > 80) {
      return "!text-green-600";
    }
    if (healthRating > 50 && healthRating <= 79) {
      return "!text-orange-600";
    } else {
      return "!text-red-600";
    }
  };

  return (
    <Card className="border-t-4 border-teal-600 p-4  max-w-4xl">
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
      <Typography
        variant="h6"
        className={`!font-black ${colorRate(healthRating)}`}
      >
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

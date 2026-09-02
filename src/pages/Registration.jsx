import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import {
  Card,
  TextField,
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";
export default function Registration({ allGadgets, setAllGadgets }) {
  const navigate = useNavigate();
  const [error, setError] = useState({
    gadgetName: "",
    category: "",
    manufacturer: "",
    healthRating: "",
    techBrand: "",
    userRole: "",
  });
  const [gadgetName, setGadgetName] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [healthRating, setHealthRating] = useState("");
  const [techBrand, setTechBrand] = useState("");
  const [userRole, setUserRole] = useState("Engineer");

  function validation() {
    let newError = {
      gadgetName: "",
      category: "",
      manufacturer: "",
      healthRating: "",
      techBrand: "",
      userRole: "",
    };

    if (gadgetName.length < 3) {
      newError.gadgetName = "Input should be at least 3 characters";
    }

    if (!category) {
      newError.category = "Please input a category";
    }

    if (!manufacturer) {
      newError.manufacturer = "Please input a manufacturer";
    }

    if (!healthRating || healthRating < 1 || healthRating > 100) {
      newError.healthRating = "Health rating should be between 1 and 100";
    }

    if (!techBrand) {
      newError.techBrand = "Please input a tech brand";
    }

    if (!userRole) {
      newError.userRole = "Please select a user role";
    }

    setError(newError);
    const isValid =
      !newError.gadgetName &&
      !newError.category &&
      !newError.manufacturer &&
      !newError.healthRating &&
      !newError.techBrand &&
      !newError.userRole;

    if (isValid) {
      const newGadget = {
        gadgetName,
        category,
        manufacturer,
        healthRating,
        techBrand,
        userRole,
      };

      setAllGadgets((prev) => [...prev, newGadget]);

      navigate("/view-table");
    }
  }

  return (
    <Card
      variant="outlined"
      className="flex flex-col justify-between w-full sm:w-2xl p-4 sm:p-5 gap-2 bg-gray-800 rounded-lg border-t-4 border-teal-500 shadow-md shadow-gray-150"
    >
      <Typography
        variant="h4"
        align="center"
        className="!font-black !tracking-wide"
      >
        Register a Gadget
      </Typography>
      <FormControl className="flex flex-col gap-4">
        <TextField
          variant="outlined"
          label="Gadget Name"
          type="text"
          required
          value={gadgetName}
          slotProps={{ htmlInput: { minLength: 3 } }}
          onChange={(e) => setGadgetName(e.target.value)}
          error={!!error.gadgetName}
          helperText={error.gadgetName}
        />
        <TextField
          variant="outlined"
          label="Category"
          type="text"
          required
          value={category}
          placeholder="e.g. Smartphone, Laptop, Wearable, Audio"
          onChange={(e) => setCategory(e.target.value)}
          error={!!error.category}
          helperText={error.category}
        />
        <TextField
          variant="outlined"
          label="Manufacturer"
          type="text"
          value={manufacturer}
          required
          onChange={(e) => setManufacturer(e.target.value)}
          error={!!error.manufacturer}
          helperText={error.manufacturer}
        />
        <TextField
          variant="outlined"
          label="Health Rating"
          type="number"
          value={healthRating}
          required
          slotProps={{ htmlInput: { min: 1, max: 100 } }}
          onChange={(e) => setHealthRating(e.target.value)}
          error={!!error.healthRating}
          helperText={error.healthRating}
        />

        <TextField
          variant="outlined"
          label="Tech Brand Name"
          type="text"
          value={techBrand}
          required
          onChange={(e) => setTechBrand(e.target.value)}
          error={!!error.techBrand}
          helperText={error.techBrand}
        />
        <RadioGroup
          required
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <FormLabel>Select User Role</FormLabel>
          <FormControlLabel
            value="Engineer"
            control={<Radio />}
            label="Engineer"
          />
          <FormControlLabel value="Tester" control={<Radio />} label="Tester" />
        </RadioGroup>

        <Button
          type="submit"
          variant="contained"
          size="large"
          onClick={validation}
          className="!bg-teal-600"
        >
          Submit
        </Button>
      </FormControl>
    </Card>
  );
}

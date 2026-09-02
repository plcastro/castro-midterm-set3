import { useState } from "react";
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
import "../App.css";
export default function Registration() {
  const [error, setError] = useState({
    gnError: "",
    catError: "",
    manuError: "",
    hrError: "",
    tbError: "",
    usError: "",
  });
  const [gadgetName, setGadgetName] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [healthRating, setHealthRating] = useState();
  const [techBrand, setTechBrand] = useState("");
  const [userRole, setUserRole] = useState("Engineer");

  function validation() {
    const newError = {
      gnError: "",
      catError: "",
      manuError: "",
      hrError: "",
      tbError: "",
      usError: "",
    };

    if (!gadgetName || gadgetName.length < 3) {
      newError.gnError = "Input should be at least 3 characters";
    }

    if (!category) {
      newError.catError = "Please input a category";
    }

    if (!manufacturer) {
      newError.manuError = "Please input a manufacturer";
    }

    if (!healthRating || healthRating < 1 || healthRating > 100) {
      newError.hrError = "Health rating should be between 1 and 100";
    }

    if (!techBrand) {
      newError.tbError = "Please input a tech brand";
    }

    if (!userRole) {
      newError.usError = "Please select a user role";
    }

    setError(newError);

    return !Object.values(newError).some((error) => error !== "");
  }

  return (
    <Card
      variant="outlined"
      className="flex flex-col justify-between w-full p-4 sm:p-5 gap-2 bg-gray-800 rounded-lg border-t-4 border-teal-500 shadow-md shadow-gray-150"
    >
      <Typography variant="h3">Register a Gadget</Typography>
      <FormControl className="flex flex-col gap-4">
        <TextField
          variant="outlined"
          label="Gadget Name"
          type="text"
          required
          slotProps={{ htmlInput: { minLength: 3 } }}
          onChange={(e) => setGadgetName(e.target.value)}
          error={!!error.gnError}
          helperText={error.gnError}
        />
        <TextField
          variant="outlined"
          label="Category"
          type="text"
          required
          placeholder="e.g. Smartphone, Laptop, Wearable, Audio"
          onChange={(e) => setCategory(e.target.value)}
          error={!!error.catError}
          helperText={error.catError}
        />
        <TextField
          variant="outlined"
          label="Manufacturer"
          type="text"
          required
          onChange={(e) => setManufacturer(e.target.value)}
          error={!!error.manuError}
          helperText={error.manuError}
        />
        <TextField
          variant="outlined"
          label="Health Rating"
          type="number"
          required
          slotProps={{ htmlInput: { min: 1, max: 100 } }}
          onChange={(e) => setHealthRating(e.target.value)}
          error={!!error.hrError}
          helperText={error.hrError}
        />

        <TextField
          variant="outlined"
          label="Tech Brand Name"
          type="text"
          required
          onChange={(e) => setTechBrand(e.target.value)}
          error={!!error.tbError}
          helperText={error.tbError}
        />
        <RadioGroup
          required
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <FormLabel>Select User Role</FormLabel>
          <FormControlLabel
            value="engineer"
            control={<Radio />}
            label="Engineer"
          />
          <FormControlLabel value="tester" control={<Radio />} label="Tester" />
        </RadioGroup>

        <Button
          type="submit"
          variant="contained"
          size="large"
          onClick={validation}
        >
          Submit
        </Button>
      </FormControl>
    </Card>
  );
}

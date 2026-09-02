import "./App.css";
import RootLayout from "./layout/RootLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/Registration";
import ViewGadgetTable from "./pages/ViewGadgetTable";
import { useState } from "react";
import { data } from "./Data";

function App() {
  const [allGadgets, setAllGadgets] = useState(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registration" replace />} />

        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <Registration
                allGadgets={allGadgets}
                setAllGadgets={setAllGadgets}
              />
            }
          />
          <Route
            path="view-table"
            element={<ViewGadgetTable allGadgets={allGadgets} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

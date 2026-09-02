import "./App.css";
import RootLayout from "./layout/RootLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/registration"
          element={<Navigate to="/registration" replace />}
        />

        <Route path="/registration" element={<RootLayout />}>
          <Route index element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

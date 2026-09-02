import Navbar from "../components/Navbar";
import "../App.css";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-col max-w-6xl mx-auto m-10 justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

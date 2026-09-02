import NavBar from "../components/NavBar";
import "../App.css";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />

      <div className="w-full max-w-6xl mx-auto justify-center items-center mt-10 sm:mt-2 p-4">
        <Outlet />
      </div>
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router-dom"; // Outlet renders the matched child route

import "./Adminlayouts.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Adminlayout() {
  return (
    <div className="sidebar">
      <Sidebar />

      <div className="navbar">
        <Navbar />

        {/* 
          Outlet is a placeholder where nested routes will render.
          Example:
          /dashboard  -> Dashboard component renders here
          /customers  -> Customers component renders here
          /orders     -> Orders component renders here
        */}
        <Outlet />
      </div>
    </div>
  );
}

export default Adminlayout;
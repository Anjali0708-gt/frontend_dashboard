import React from "react";
import { Outlet } from "react-router-dom";

import "./Adminlayouts.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Adminlayout() {
  return (
    <div className="admin-container">

      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* RIGHT MAIN AREA */}
      <div className="main-content">

        {/* TOP NAVBAR */}
        <div className="navbar">
          <Navbar />
        </div>

        {/* PAGE CONTENT (IMPORTANT) */}
        <div className="page-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Adminlayout;
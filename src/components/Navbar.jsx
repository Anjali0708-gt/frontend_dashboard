import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* LEFT SIDE - BRAND */}
      <div className="logo">
        VK Stitch Studio
      </div>

      {/* CENTER MENU */}

      {/* RIGHT SIDE - LOGIN ICON */}
      <div className="login-section">
        <button className="login-btn" onClick={handleLogin}>
          👤 Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
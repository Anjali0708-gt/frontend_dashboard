import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { id: 1, email: "admin@gmail.com", password: "123456" },
    { id: 2, email: "user@gmail.com", password: "user123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">
          VK <span>Stitch Studio</span>
        </h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="demo-box">
          <p><b>Admin:</b> admin@gmail.com / 123456</p>
          <p><b>User:</b> user@gmail.com / user123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Order";
import Measurements from "./pages/Measurements";
import Appointments from "./pages/Appointment";
import Login from "./pages/Login";

import AdminLayout from "./layouts/Adminlayout";

function App() {
  return (
    <>
    <Login/>
    <Routes>

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Admin Layout Route (All dashboard pages inside it) */}
      <Route path="/" element={<AdminLayout />}>
        
        {/* Nested Routes (these go inside Outlet) */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="measurements" element={<Measurements />} />
        <Route path="appointments" element={<Appointments />} />

      </Route>

    </Routes>
    </>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Order";
import Measurements from "./pages/Measurements";
import Appointments from "./pages/Appointment";
import Login from "./pages/Login";

import AdminLayout from "./layouts/Adminlayout";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* PROTECTED */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        {/* Default page for "/" */}
        <Route index element={<Dashboard />} />

        {/* Other pages */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="measurements" element={<Measurements />} />
        <Route path="appointments" element={<Appointments />} />
      </Route>

    </Routes>
  );
}

export default App;
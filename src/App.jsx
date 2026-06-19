import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/customers/Customers";
import AddCustomer from "./pages/customers/AddCustomer";
import EditCustomer from "./pages/customers/EditCustomer";
import CustomerDetails from "./pages/customers/CustomerDetails";
import Orders from './pages/Orders/Orders'
import AddOrder from "./pages/Orders/AddOrder";
import EditOrder from "./pages/Orders/EditOrder";
import OrderDetails from "./pages/Orders/OrderDetails";
import Login from "./pages/Login";
import AdminLayout from "./layouts/Adminlayout";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Measurements from "./pages/measurements/Measurements";
import AddMeasurement from "./pages/measurements/AddMeasurement";
import EditMeasurement from "./pages/measurements/EditMeasurement";
import MeasurementDetails from "./pages/measurements/MeasurementDetails";


function App() {
  return (
    <Routes>

      {/* Open app → Login page */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Protected Dashboard Area */}
      <Route
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>} >
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/customers" element={<Customers />} /> */}
        
        {/* cutomers route */}
       <Route path="customers" element={<Customers />} />
       <Route path="customers/add" element={<AddCustomer />} />
       <Route path="customers/edit/:id" element={<EditCustomer />} />
       <Route path="customers/:id" element={<CustomerDetails />} />
       
       {/* order routes */}
         <Route path="orders" element={<Orders />} />
        <Route path="orders/add" element={<AddOrder />} />
        <Route path="orders/edit/:id" element={<EditOrder />} />  
        <Route path="orders/:id" element={<OrderDetails />} />
        
        {/* Measurements routes */}
          <Route
            path="measurements"
            element={<Measurements />}
          />

          <Route
            path="measurements/add"
            element={<AddMeasurement />}
          />

          <Route
            path="measurements/edit/:id"
            element={<EditMeasurement />}
          />

          <Route
            path="measurements/:id"
            element={<MeasurementDetails />}
          />

     </Route>
       

       {/* order */}

    </Routes>
  );
}

export default App;
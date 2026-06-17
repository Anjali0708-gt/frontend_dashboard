import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Orders from "../pages/Orders";
import Measurements from "../pages/Measurements";
import Appointments from "../pages/Appointments";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";
import Cards from '../components/Cards';
import Login from "../pages/Login"
import Sidebar from "../components/Sidebar";

import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
        <Routes>
            {/* public route */}
            <Route path="/Login" element={<Login/>}/>
            {/* admin  */}
          <Route path="/" element={<AdminLayout/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/measurements" element={<Measurements />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path ="/Navbar" elements ={<Navbar/>}/>
          <Route path ="/Sidebar" elements ={<Sidebar/>}/>
           <Route path ="/Charts" elements ={<Navbar/>}/>
            <Route path ="/Cards" elements ={<Cards/>}/>
        </Routes>
     
  );
}

export default App;
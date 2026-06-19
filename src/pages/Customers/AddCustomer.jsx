import React, { useState } from "react";
import "./AddCustomer.css";

function AddCustomer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Customer Data:", formData);

    alert("Customer Added");

    setFormData({
      name: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="add-customer-page">
      <div className="add-customer-card">
        <h1>Add Customer</h1>

        <form
          className="customer-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Customer Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter Customer "
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>

            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="save-btn"
          >
            Save Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
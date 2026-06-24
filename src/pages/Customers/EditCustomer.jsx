import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Customers/AddCustomer.css";

function EditCustomer() {
  const { id } = useParams();

  // Dummy customer data
  const customerData = {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    address: "Ludhiana",
  };

  const [formData, setFormData] = useState(customerData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Customer:", formData);

    alert("Customer Updated Successfully");
  };

  return (
    <div className="add-customer-page">
      <div className="add-customer-card">
        <h1>Edit Customer</h1>
        <p style={{ marginBottom: '20px', color: 'var(--gray-500)', fontSize: 'var(--font-size-sm)' }}>
          Customer ID: {id}
        </p>

        <form className="customer-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="save-btn">
            Update Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCustomer;
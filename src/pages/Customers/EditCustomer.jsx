import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>Edit Customer</h1>
      <p>Customer ID: {id}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          Update Customer
        </button>
      </form>
    </div>
  );
}

export default EditCustomer;
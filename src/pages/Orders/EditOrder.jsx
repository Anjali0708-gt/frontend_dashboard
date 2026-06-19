import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditOrder.css";

function EditOrder() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    customer: "Rahul Sharma",
    dressType: "Suit",
    amount: "2500",
    deliveryDate: "2026-06-30",
    status: "Pending",
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

    console.log("Updated Order:", formData);

    alert("Order Updated Successfully");
  };

  return (
    <div className="edit-order-page">
      <div className="edit-order-card">
        <h1>Edit Order</h1>

        <p>Order ID: {id}</p>

        <form
          className="order-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Customer Name</label>

            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Dress Type</label>

            <input
              type="text"
              name="dressType"
              value={formData.dressType}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Amount</label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Delivery Date</label>

            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <button
            type="submit"
            className="update-btn"
          >
            Update Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditOrder;
import React, { useState } from "react";
import "./AddOrder.css";
function AddOrder() {
  const [formData, setFormData] = useState({
    customerName: "",
    dressType: "",
    amount: "",
    deliveryDate: "",
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

    console.log(formData);

    alert("Order Created");
  };

  return (
  <div className="add-order-page">
    <div className="add-order-card">
      <h1>Create Order</h1>

      <form
        className="order-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Customer Name</label>
          <input
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Dress Type</label>
          <input
            name="dressType"
            value={formData.dressType}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
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

        <button
          type="submit"
          className="create-order-btn"
        >
          Create Order
        </button>
      </form>
    </div>
  </div>
);
}


export default AddOrder;
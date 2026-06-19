import React from "react";
import { useParams } from "react-router-dom";
import "./OrderDetails.css";

function OrderDetails() {
  const { id } = useParams();

  const orders = [
    {
      id: 1,
      customer: "Rahul Sharma",
      dressType: "Suit",
      amount: 2500,
      deliveryDate: "2026-06-30",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Amit Kumar",
      dressType: "Shirt",
      amount: 1200,
      deliveryDate: "2026-06-25",
      status: "Completed",
    },
  ];

  const order = orders.find(
    (order) => order.id === Number(id)
  );

  if (!order) {
    return <h2>Order Not Found</h2>;
  }

  return (
    <div className="order-details-page">
      <div className="order-details-card">
        <h1>Order Details</h1>

        <div className="detail-row">
          <span>Order ID</span>
          <span>ORD-{order.id}</span>
        </div>

        <div className="detail-row">
          <span>Customer</span>
          <span>{order.customer}</span>
        </div>

        <div className="detail-row">
          <span>Dress Type</span>
          <span>{order.dressType}</span>
        </div>

        <div className="detail-row">
          <span>Amount</span>
          <span>₹{order.amount}</span>
        </div>

        <div className="detail-row">
          <span>Delivery Date</span>
          <span>{order.deliveryDate}</span>
        </div>

        <div className="detail-row">
          <span>Status</span>
          <span>{order.status}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
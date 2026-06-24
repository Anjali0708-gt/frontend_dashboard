import React from "react";
import { useParams } from "react-router-dom";
import "./CustomerDetails.css";

function CustomerDetails() {
  const { id } = useParams();

  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      address: "Ludhiana",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Amit Kumar",
      phone: "9876543211",
      address: "Chandigarh",
      email: "amit@gmail.com",
    },
  ];

  const customer = customers.find(
    (customer) => customer.id === Number(id)
  );

  if (!customer) {
    return (
      <div className="customer-not-found">
        <h2>Customer Not Found</h2>
      </div>
    );
  }

  return (
    <div className="customer-details-page">
      <div className="customer-details-card">
        <h1>Customer Details</h1>

        <div className="detail-row">
          <span className="detail-label">ID</span>
          <span>{customer.id}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Name</span>
          <span>{customer.name}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Phone</span>
          <span>{customer.phone}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Email</span>
          <span>{customer.email}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Address</span>
          <span>{customer.address}</span>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
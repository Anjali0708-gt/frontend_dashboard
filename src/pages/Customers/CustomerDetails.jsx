import React from "react";
import { useParams } from "react-router-dom";

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
    return <h2>Customer Not Found</h2>;
  }

  return (
    <div>
      <h1>Customer Details</h1>

      <p>
        <strong>ID:</strong> {customer.id}
      </p>

      <p>
        <strong>Name:</strong> {customer.name}
      </p>

      <p>
        <strong>Phone:</strong> {customer.phone}
      </p>

      <p>
        <strong>Email:</strong> {customer.email}
      </p>

      <p>
        <strong>Address:</strong> {customer.address}
      </p>
    </div>
  );
}

export default CustomerDetails;
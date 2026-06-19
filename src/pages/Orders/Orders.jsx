import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Rahul Sharma",
      dressType: "Suit",
      amount: 2500,
      status: "Pending",
    },
    {
      id: 2,
      customer: "Amit Kumar",
      dressType: "Shirt",
      amount: 1200,
      status: "Completed",
    },
    {
      id: 3,
      customer: "Priya Sharma",
      dressType: "Lehenga",
      amount: 4500,
      status: "In Progress",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedOrders = orders.filter(
      (order) => order.id !== id
    );

    setOrders(updatedOrders);
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>Orders</h1>

        <button
          className="add-order-btn"
          onClick={() => navigate("/orders/add")}
        >
          + Create Order
        </button>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Dress Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>ORD-{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.dressType}</td>
                <td>₹{order.amount}</td>
                <td>{order.status}</td>

                <td className="action-buttons">
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/orders/${order.id}`)
                    }
                  >
                    View
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/orders/edit/${order.id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(order.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="no-orders">
            No Orders Found
          </p>
        )}
      </div>
    </div>
  );
}

export default Orders;
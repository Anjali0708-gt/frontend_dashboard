import React from "react";
import { useNavigate } from "react-router-dom";
import "./Customers.css";

function Customers() {
  const navigate = useNavigate();

  const customers = [
    {
      id: 1,
      name: "Muskan",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Anjali",
      phone: "9876543211",
    },
  ];

  return (
    <div className="customers-page">
      <div className="customers-header">
        <h1>Customers</h1>

        <button
          className="add-customer-btn"
          onClick={() => navigate("/customers/add")}
        >
          + Add Customer
        </button>
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>

                <td className="action-buttons">
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/customers/${customer.id}`)
                    }
                  >
                    View
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/customers/edit/${customer.id}`)
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
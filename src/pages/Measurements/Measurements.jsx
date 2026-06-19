import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Measurements.css";

function Measurements() {
  const navigate = useNavigate();

  const [measurements, setMeasurements] = useState([
    {
      id: 1,
      customerName: "Rahul Sharma",
      chest: 40,
      waist: 34,
      shoulder: 18,
    },
    {
      id: 2,
      customerName: "Amit Kumar",
      chest: 42,
      waist: 36,
      shoulder: 19,
    },
    {
      id: 3,
      customerName: "Priya Sharma",
      chest: 38,
      waist: 32,
      shoulder: 17,
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this measurement?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedMeasurements = measurements.filter(
      (measurement) => measurement.id !== id
    );

    setMeasurements(updatedMeasurements);
  };

  return (
    <div className="measurements-page">
      <div className="measurements-header">
        <h1>Measurements</h1>

        <button
          className="add-measurement-btn"
          onClick={() =>
            navigate("/measurements/add")
          }
        >
          + Add Measurement
        </button>
      </div>

      <div className="measurements-table-container">
        <table className="measurements-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Chest</th>
              <th>Waist</th>
              <th>Shoulder</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {measurements.map((measurement) => (
              <tr key={measurement.id}>
                <td>{measurement.customerName}</td>
                <td>{measurement.chest}</td>
                <td>{measurement.waist}</td>
                <td>{measurement.shoulder}</td>

                <td className="action-buttons">
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(
                        `/measurements/${measurement.id}`
                      )
                    }
                  >
                    View
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(
                        `/measurements/edit/${measurement.id}`
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(measurement.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {measurements.length === 0 && (
          <p className="no-data">
            No Measurements Found
          </p>
        )}
      </div>
    </div>
  );
}

export default Measurements;
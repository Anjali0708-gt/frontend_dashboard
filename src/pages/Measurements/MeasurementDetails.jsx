import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MeasurementDetails.css";

function MeasurementDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data (later replace with API: GET /measurements/:id)
  const measurements = [
    {
      id: 1,
      customerName: "Rahul Sharma",
      chest: 40,
      waist: 34,
      shoulder: 18,
      sleeve: 24,
      length: 42,
    },
    {
      id: 2,
      customerName: "Amit Kumar",
      chest: 42,
      waist: 36,
      shoulder: 19,
      sleeve: 25,
      length: 43,
    },
  ];

  const measurement = measurements.find(
    (m) => m.id === Number(id)
  );

  if (!measurement) {
    return (
      <div className="not-found">
        <h2>Measurement Not Found</h2>

        <button onClick={() => navigate("/measurements")}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="measurement-details-page">
      <div className="measurement-details-card">
        <h1>Measurement Details</h1>

        <div className="details-grid">
          <p>
            <strong>ID:</strong> {measurement.id}
          </p>

          <p>
            <strong>Customer:</strong>{" "}
            {measurement.customerName}
          </p>

          <p>
            <strong>Chest:</strong> {measurement.chest}
          </p>

          <p>
            <strong>Waist:</strong> {measurement.waist}
          </p>

          <p>
            <strong>Shoulder:</strong>{" "}
            {measurement.shoulder}
          </p>

          <p>
            <strong>Sleeve:</strong> {measurement.sleeve}
          </p>

          <p>
            <strong>Length:</strong> {measurement.length}
          </p>
        </div>

        <div className="btn-group">
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
            className="back-btn"
            onClick={() =>
              navigate("/measurements")
            }
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeasurementDetails;
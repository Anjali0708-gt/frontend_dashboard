import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditMeasurement.css";

function EditMeasurement() {
  const { id } = useParams();

  // Dummy data (later replace with API call using id)
  const [formData, setFormData] = useState({
    customerName: "Rahul Sharma",
    chest: 40,
    waist: 34,
    shoulder: 18,
    sleeve: 24,
    length: 42,
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

    console.log("Updated Measurement:", formData);

    alert(`Measurement Updated (ID: ${id})`);
  };

  return (
    <div className="edit-measurement-page">
      <div className="edit-measurement-card">
        <h1>Edit Measurement</h1>
        <p className="sub-text">Measurement ID: {id}</p>

        <form className="measurement-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Chest</label>
            <input
              type="number"
              name="chest"
              value={formData.chest}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Waist</label>
            <input
              type="number"
              name="waist"
              value={formData.waist}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Shoulder</label>
            <input
              type="number"
              name="shoulder"
              value={formData.shoulder}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Sleeve</label>
            <input
              type="number"
              name="sleeve"
              value={formData.sleeve}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Length</label>
            <input
              type="number"
              name="length"
              value={formData.length}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="update-btn">
            Update Measurement
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditMeasurement;
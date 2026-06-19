import React, { useState } from "react";
import "./Addmeasurement.css";

function AddMeasurement() {
  const [formData, setFormData] = useState({
    customerName: "",
    chest: "",
    waist: "",
    shoulder: "",
    sleeve: "",
    length: "",
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

    console.log("Measurement Data:", formData);

    alert("Measurement Added Successfully");

    setFormData({
      customerName: "",
      chest: "",
      waist: "",
      shoulder: "",
      sleeve: "",
      length: "",
    });
  };

  return (
    <div className="add-measurement-page">
      <div className="add-measurement-card">
        <h1>Add Measurement</h1>

        <form className="measurement-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              placeholder="Enter Customer Name"
              value={formData.customerName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Chest</label>
            <input
              type="number"
              name="chest"
              placeholder="Chest Size"
              value={formData.chest}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Waist</label>
            <input
              type="number"
              name="waist"
              placeholder="Waist Size"
              value={formData.waist}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Shoulder</label>
            <input
              type="number"
              name="shoulder"
              placeholder="Shoulder Size"
              value={formData.shoulder}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Sleeve</label>
            <input
              type="number"
              name="sleeve"
              placeholder="Sleeve Length"
              value={formData.sleeve}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Length</label>
            <input
              type="number"
              name="length"
              placeholder="Dress Length"
              value={formData.length}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="save-btn">
            Save Measurement
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMeasurement;
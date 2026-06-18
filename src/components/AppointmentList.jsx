import React from "react";
import "./AppointmentList.css";

function AppointmentList({ Appointment }) {
  return (
    <div className="appointment-section">
      <h2 className="appointment-title">
        Upcoming Appointments
      </h2>

      {Appointment.map((appointment) => (
        <div
          className="appointment-card"
          key={appointment.id}
        >
          <div className="appointment-details">
            <h4 className="customer-name">
              {appointment.customer}
            </h4>

            <p className="appointment-date">
              {appointment.date}
            </p>
          </div>

          <div className="appointment-time">
            {appointment.time}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;
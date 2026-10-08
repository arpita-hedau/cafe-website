import React, { useState } from "react";
import "./Reservation.css";

const timeSlots = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const Reservation = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    guests: "2",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="reservation-page">
      {/* HERO */}
      {/* <section className="reservation-hero">
        <div className="reservation-hero-overlay"></div>

        <div className="reservation-hero-content">
          <p>RESERVATIONS</p>
          <h1>
            Your table
            <br />
            is waiting.
          </h1>
          <span>
            Choose a date, find your perfect time, and let us take care of the
            rest.
          </span>
        </div>
      </section> */}

      {/* BOOKING AREA */}
      <section className="reservation-section">
        <div className="reservation-info">
          <p className="reservation-label">MAKE A RESERVATION</p>

          <h2>
            An evening
            <br />
            worth remembering.
          </h2>

          <p>
            Whether it is an intimate dinner for two, a family celebration or an
            evening with friends, we would love to have you at The Olive Table.
          </p>

          <div className="reservation-details">
            <div>
              <span>DINNER</span>
              <p>7:00 PM — 10:30 PM</p>
            </div>

            <div>
              <span>LUNCH</span>
              <p>12:00 PM — 3:00 PM</p>
            </div>

            <div>
              <span>PHONE</span>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="reservation-card">
          {submitted ? (
            <div className="reservation-success">
              <div className="success-icon">✓</div>

              <p className="reservation-label">RESERVATION CONFIRMED</p>

              <h2>Your table is booked.</h2>

              <p>
                Thank you, {formData.name || "Guest"}. We look forward to
                welcoming you at The Olive Table.
              </p>

              <div className="booking-summary">
                <div>
                  <span>Date</span>
                  <strong>{formData.date}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{selectedTime}</strong>
                </div>

                <div>
                  <span>Guests</span>
                  <strong>{formData.guests}</strong>
                </div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setSelectedTime("");
                }}
                className="reservation-reset"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Guests</label>

                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Choose a time</label>

                <div className="time-slots">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      className={selectedTime === time ? "selected" : ""}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Your name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Special request <small>(optional)</small>
                </label>

                <textarea
                  name="message"
                  rows="3"
                  placeholder="Birthday, anniversary, dietary requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="reserve-submit" type="submit">
                Confirm Reservation
              </button>

              <p className="reservation-note">
                This is a frontend demonstration reservation.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Reservation;

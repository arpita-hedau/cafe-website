import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      {/* <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p>GET IN TOUCH</p>
          <h1>
            We'd love to
            <br />
            hear from you.
          </h1>
        </div>
      </section> */}

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-info">
          <p className="contact-label">CONTACT US</p>

          <h2>
            Come by.
            <br />
            Say hello.
          </h2>

          <p className="contact-intro">
            Whether you have a question, want to plan a special evening or
            simply want to say hello, we're always happy to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span>ADDRESS</span>
              <p>
                24 Olive Street,
                <br />
                Green Park, Nagpur
              </p>
            </div>

            <div className="contact-detail">
              <span>PHONE</span>
              <p>+91 99999 999999</p>
            </div>

            <div className="contact-detail">
              <span>EMAIL</span>
              <p>Business@elvrixtechsolutions.com</p>
            </div>

            <div className="contact-detail">
              <span>OPENING HOURS</span>
              <p>
                Monday — Sunday
                <br />
                12:00 PM — 10:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>

              <p className="contact-label">MESSAGE SENT</p>

              <h2>Thank you.</h2>

              <p>
                We've received your message and will get back to you shortly.
              </p>

              <button onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <p className="contact-label">SEND A MESSAGE</p>

              <h3>How can we help?</h3>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>Name</label>

                    <input type="text" placeholder="Your name" required />
                  </div>

                  <div className="contact-field">
                    <label>Phone</label>

                    <input type="tel" placeholder="+91" required />
                  </div>
                </div>

                <div className="contact-field">
                  <label>Email</label>

                  <input type="email" placeholder="you@example.com" required />
                </div>

                <div className="contact-field">
                  <label>Subject</label>

                  <select required>
                    <option value="">Select a subject</option>
                    <option>General enquiry</option>
                    <option>Private dining</option>
                    <option>Celebration</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label>Message</label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* MAP STYLE SECTION */}
      <section className="contact-location">
        <div className="location-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
            alt="The Olive Table location"
          />
        </div>

        <div className="location-content">
          <p className="contact-label">FIND US</p>

          <h2>
            In the heart
            <br />
            of the city.
          </h2>

          <p>
            Located in Green Park, The Olive Table is easy to reach and
            surrounded by the city's best neighbourhoods.
          </p>

          <button className="direction-btn">Get Directions</button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta">
        <p className="contact-label">SEE YOU SOON</p>

        <h2>
          Good food is
          <br />
          better together.
        </h2>

        <a href="/reservation">Reserve a Table</a>
      </section>
    </main>
  );
};

export default Contact;

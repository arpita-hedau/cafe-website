import React, { useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
  Menu,
  X,
} from "lucide-react";
import "./Admin.css";

const reservations = [
  {
    id: 1,
    name: "Aarav Sharma",
    date: "08 Oct 2026",
    time: "7:00 PM",
    guests: 2,
    phone: "+91 98765 43210",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Priya Mehta",
    date: "08 Oct 2026",
    time: "7:30 PM",
    guests: 4,
    phone: "+91 98765 12345",
    status: "Confirmed",
  },
  {
    id: 3,
    name: "Rohan Patel",
    date: "08 Oct 2026",
    time: "8:00 PM",
    guests: 3,
    phone: "+91 99887 77665",
    status: "Pending",
  },
  {
    id: 4,
    name: "Ananya Singh",
    date: "09 Oct 2026",
    time: "7:30 PM",
    guests: 2,
    phone: "+91 98765 66778",
    status: "Confirmed",
  },
  {
    id: 5,
    name: "Karan Verma",
    date: "09 Oct 2026",
    time: "8:30 PM",
    guests: 6,
    phone: "+91 99999 11223",
    status: "Pending",
  },
];

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const confirmed = reservations.filter(
    (item) => item.status === "Confirmed",
  ).length;

  const pending = reservations.filter(
    (item) => item.status === "Pending",
  ).length;

  return (
    <main className="admin-page">
      {/* MOBILE TOPBAR */}
      <div className="admin-mobile-bar">
        <h2>The Olive Table</h2>

        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="admin-logo">
          <span>The</span>
          Olive Table
          <small>ADMIN PANEL</small>
        </div>

        <nav>
          <button
            className={activeTab === "Dashboard" ? "active" : ""}
            onClick={() => {
              setActiveTab("Dashboard");
              setSidebarOpen(false);
            }}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button
            className={activeTab === "Reservations" ? "active" : ""}
            onClick={() => {
              setActiveTab("Reservations");
              setSidebarOpen(false);
            }}
          >
            <CalendarDays size={18} />
            Reservations
          </button>

          <button
            className={activeTab === "Guests" ? "active" : ""}
            onClick={() => {
              setActiveTab("Guests");
              setSidebarOpen(false);
            }}
          >
            <Users size={18} />
            Guests
          </button>
        </nav>

        <div className="admin-sidebar-bottom">
          <span>Restaurant Admin</span>
          <p>admin@theolivetable.com</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <section className="admin-content">
        <header className="admin-header">
          <div>
            <p>THURSDAY, 08 OCTOBER 2026</p>
            <h1>{activeTab}</h1>
          </div>

          <div className="admin-user">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Admin</strong>
              <span>Restaurant Manager</span>
            </div>
          </div>
        </header>

        {activeTab === "Dashboard" && (
          <>
            {/* STATS */}
            <div className="admin-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <CalendarDays size={20} />
                </div>

                <div>
                  <span>Total Reservations</span>
                  <strong>{reservations.length}</strong>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <span>Confirmed</span>
                  <strong>{confirmed}</strong>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Clock3 size={20} />
                </div>

                <div>
                  <span>Pending</span>
                  <strong>{pending}</strong>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Users size={20} />
                </div>

                <div>
                  <span>Total Guests</span>
                  <strong>
                    {reservations.reduce(
                      (total, item) => total + item.guests,
                      0,
                    )}
                  </strong>
                </div>
              </div>
            </div>

            {/* RESERVATIONS */}
            <div className="admin-table-card">
              <div className="table-header">
                <div>
                  <p>BOOKINGS</p>
                  <h2>Upcoming Reservations</h2>
                </div>

                <button>View All</button>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Guest</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Guests</th>
                      <th>Phone</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {reservations.map((reservation) => (
                      <tr key={reservation.id}>
                        <td>
                          <div className="guest-name">
                            <div className="guest-avatar">
                              {reservation.name.charAt(0)}
                            </div>

                            <strong>{reservation.name}</strong>
                          </div>
                        </td>

                        <td>{reservation.date}</td>

                        <td>{reservation.time}</td>

                        <td>{reservation.guests}</td>

                        <td>{reservation.phone}</td>

                        <td>
                          <span
                            className={`status ${reservation.status.toLowerCase()}`}
                          >
                            {reservation.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="admin-bottom-grid">
              {/* TODAY */}
              <div className="admin-panel">
                <div className="panel-heading">
                  <div>
                    <p>TODAY</p>
                    <h2>Table Schedule</h2>
                  </div>

                  <Clock3 size={20} />
                </div>

                <div className="schedule">
                  <div className="schedule-item booked">
                    <span>7:00 PM</span>
                    <div>
                      <strong>Aarav Sharma</strong>
                      <small>Table 04 · 2 Guests</small>
                    </div>
                    <CheckCircle2 size={17} />
                  </div>

                  <div className="schedule-item booked">
                    <span>7:30 PM</span>
                    <div>
                      <strong>Priya Mehta</strong>
                      <small>Table 07 · 4 Guests</small>
                    </div>
                    <CheckCircle2 size={17} />
                  </div>

                  <div className="schedule-item pending">
                    <span>8:00 PM</span>
                    <div>
                      <strong>Rohan Patel</strong>
                      <small>Table 02 · 3 Guests</small>
                    </div>
                    <Clock3 size={17} />
                  </div>

                  <div className="schedule-item available">
                    <span>8:30 PM</span>
                    <div>
                      <strong>Available</strong>
                      <small>Table 05 · 4 Guests</small>
                    </div>
                    <span className="available-text">Open</span>
                  </div>
                </div>
              </div>

              {/* QUICK INFO */}
              <div className="admin-panel">
                <div className="panel-heading">
                  <div>
                    <p>OVERVIEW</p>
                    <h2>Today's Summary</h2>
                  </div>
                </div>

                <div className="summary-list">
                  <div>
                    <span>Lunch reservations</span>
                    <strong>12</strong>
                  </div>

                  <div>
                    <span>Dinner reservations</span>
                    <strong>28</strong>
                  </div>

                  <div>
                    <span>Available tables</span>
                    <strong>08</strong>
                  </div>

                  <div>
                    <span>Average party size</span>
                    <strong>3.4</strong>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Reservations" && (
          <div className="admin-table-card full-table">
            <div className="table-header">
              <div>
                <p>ALL BOOKINGS</p>
                <h2>Reservations</h2>
              </div>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Guest</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Guests</th>
                    <th>Phone</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {reservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>
                        <div className="guest-name">
                          <div className="guest-avatar">
                            {reservation.name.charAt(0)}
                          </div>

                          <strong>{reservation.name}</strong>
                        </div>
                      </td>

                      <td>{reservation.date}</td>
                      <td>{reservation.time}</td>
                      <td>{reservation.guests}</td>
                      <td>{reservation.phone}</td>

                      <td>
                        <span
                          className={`status ${reservation.status.toLowerCase()}`}
                        >
                          {reservation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "Guests" && (
          <div className="admin-table-card full-table">
            <div className="table-header">
              <div>
                <p>CUSTOMERS</p>
                <h2>Guest Directory</h2>
              </div>
            </div>

            <div className="guest-grid">
              {reservations.map((guest) => (
                <div className="guest-card" key={guest.id}>
                  <div className="guest-card-avatar">
                    {guest.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{guest.name}</h3>
                    <p>{guest.phone}</p>
                    <span>
                      {guest.guests} Guests · {guest.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Admin;

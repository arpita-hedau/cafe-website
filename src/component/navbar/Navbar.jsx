import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          <span>The</span>
          Olive Table
        </Link>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/menu" onClick={closeMenu}>
            Menu
          </NavLink>

          <NavLink to="/reservation" onClick={closeMenu}>
            Reservations
          </NavLink>

           <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/reservation"
            className="nav-book-btn"
            onClick={closeMenu}
          >
            Book a Table
          </Link>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
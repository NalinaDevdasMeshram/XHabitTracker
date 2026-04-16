import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="text-gray-900">
      {/* Top Banner */}
      <div className="text-center text-white py-2 px-4 text-sm bg-[var(--primary-color)]">
        Stay updated with the latest events and maximize your exposure with our
        platform.
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-[var(--secondary-color)] shadow-md">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-20 sm:w-24 h-auto" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm">
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              Find Events
            </a>
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              Venues
            </a>
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              Tickets
            </a>
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              Workshops
            </a>
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              Event Management
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="hover:text-[var(--primary-color)] transition"
              >
                Services ▾
              </button>

              {isServicesOpen && (
                <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-lg py-2 border">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Event Planning
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Venue Booking
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Marketing Support
                  </a>
                </div>
              )}
            </div>

            <button className="px-4 py-2 text-white rounded-lg bg-[var(--primary-color)] hover:opacity-90 transition">
              My Booking
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl px-3 py-1 rounded-md border border-gray-300"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-4 pb-4 space-y-3 bg-[var(--secondary-color)] font-medium text-sm">
            <a href="#">Find Events</a>
            <a href="#">Venues</a>
            <a href="#">Tickets</a>
            <a href="#">Workshops</a>
            <a href="#">Event Management</a>
            <a href="#">Services</a>
            <button className="w-fit px-4 py-2 text-white rounded-lg bg-[var(--primary-color)]  hover:opacity-90 transition">
              My Booking
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

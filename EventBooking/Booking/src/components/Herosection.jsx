import React from "react";
import singer from "../assets/singer.png";
const Herosection = () => {
  return (
    <section className="bg-[var(--secondary-color)] px-4 sm:px-6 lg:px-10 pt-10 pb-24 relative  overflow-hidden">
      {/* Hero content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* left side corner */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-gray-700 font-semibold text-base sm:text-lg mb-2">
            Skip the hassle! Track Online
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Event
            <span className="px-3 text-[var(--primary-color)]">Tracker</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-1">
            connect instantly with our platfrom to manage and track your event
            efficiently.
          </p>
          <button className="px-6 py-3 mt-30 rounded-lg cursor-pointer text-white font-medium bg-[var(--primary-color)] hover:opacity-90 transition">
            Find event
          </button>
        </div>
        {/* right side corner */}
        <div>
          <img src={singer} alt="refresh" className="flex border-red-500" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;

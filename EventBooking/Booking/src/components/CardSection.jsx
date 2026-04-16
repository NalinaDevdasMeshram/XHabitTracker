import React, { useState } from "react";
import setting from "../assets/setting.png";
import star from "../assets/star.png";
import event from "../assets/event.png";
import ticket from "../assets/ticket.png";
import eventRepresent from "../assets/eventRepresent.png";
const CardSection = () => {
  const [state, setState] = useState("");
  const handlesearchState = async () => {
    const response = await fetch("https://eventdata.onrender.com/states");
    const data = await response.json();
    console.log(data);
  };

  const handleSearchCity = async () => {
    const response = await fetch("https://eventdata.onrender.com/cities");
    const data = await response.json();
    console.log(data);
  };

  const cardData = [
    { img: star, title: "Events" },
    { img: event, title: "Venues" },
    { img: ticket, title: "Tickets", active: true },
    { img: eventRepresent, title: "Workshops" },
    { img: setting, title: "Services" },
  ];
  return (
    <section className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 lg:p-8">
        {/*search top*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="State"
            onClick={handlesearchState}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-2xl outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
          <input
            type="text"
            placeholder="City"
            onClick={handleSearchCity}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-2xl outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
          <button className="rounded-lg cursor-pointer  text-white text-2xl bg-[var(--primary-color)] hover:opacity-0.9 transition px-6 py-3">
            Search
          </button>
        </div>

        {/* card */}
        <div className="text-center">
          <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-5">
            you may the looking for
          </h4>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center rounded-xl border p-5 min-h-[120px] cursor-pointer transition-all duration-300 ${
                    item.active
                      ? "border-[var(--primary-color)] bg-blue-50 shadow-sm"
                      : "border-gray-100 bg-gray-50 hover:border-[var(--primary-color)] hover:bg-blue-50"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[50px] h-[50px] object-contain mb-3"
                  />
                  <p
                    className={`text-sm font-medium ${
                      item.active
                        ? "text-[var(--primary-color)]"
                        : "text-gray-600"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;

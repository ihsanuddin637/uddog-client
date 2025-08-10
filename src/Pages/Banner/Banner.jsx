import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-2xl"
      style={{
        backgroundImage: "url('/assets/bg.jpg')",
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-10/12 space-y-3">
          <h1 className="text-5xl text-white font-bold">
            Drive Social Change Through Community Events
          </h1>
          <p className="text 2xl text-white font-medium">
            Join, create, and manage impactful events that bring people together
            and make a difference.
          </p>
          <Link to="/upcoming-event">
            <button className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#129ee7] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#129ee7] group-hover:bg-[#129ee7]"></span>
              <span className="relative text-black group-hover:text-white">
                Explore Event
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

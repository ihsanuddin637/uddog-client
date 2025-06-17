import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/assets/bg.jpg')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1>Drive Social Change Through Community Events</h1>
          <p>
            Join, create, and manage impactful events that bring people together
            and make a difference.
          </p>
          <Link to='/upcoming-event'><button className="btn btn-primary">Explore Events</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

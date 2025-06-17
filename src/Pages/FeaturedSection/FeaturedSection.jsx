import React from "react";

const FeaturedSection = () => {
  return (
    <div>
        <h1 className="text-5xl font-bold text-black text-center pb-7">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-center border-2 border-red-400 p-5 space-y-2">
          <h2>Join Upcoming Events</h2>
          <p>
            Discover and participate in meaningful events that align with your
            passions.
          </p>
          <p>
            "Browse upcoming initiatives and be part of real change in your
            community."
          </p>
        </div>
        <div>
          <h2>Create Your Own Events</h2>
          <p>
            Easily host your own events to support social causes, raise
            awareness, or build local impact.
          </p>
          <p>
            "Bring your ideas to life and inspire others to join your mission."
          </p>
        </div>
        <div>
          <h2>Manage Your Events</h2>
          <p>
            Track attendance, edit details, and monitor progress—all from your
            personalized dashboard.
          </p>
          <p>
            "Stay in control with simple tools for organizing successful
            events."
          </p>
        </div>
        <div>
          <h2>Update or Delete Events</h2>
          <p>
            Need to make changes? Update event info or remove events anytime.
          </p>
          <p>
            "Keep your events current and relevant with flexible editing tools."
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

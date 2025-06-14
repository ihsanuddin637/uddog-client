import React from "react";
import { useLoaderData } from "react-router";

const EventDetails = () => {
  const eventDetails = useLoaderData();
  console.log(eventDetails);
  const {photo, groupName, location, date, category, Description} = eventDetails
  return (
    <div className="card card-side w-7/12 mx-auto bg-base-200 shadow-sm my-16">
      <figure>
        <img
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{groupName}</h1>
        <p>{category}</p>
        <p>Location: {location}</p>
        <p>Last date of joining: {date}</p>
        <p>{Description}</p>
        <div className="card-actions justify-left">
          <button className="btn btn-primary">Join Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

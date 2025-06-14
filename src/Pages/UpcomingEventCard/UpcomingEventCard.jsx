import React from "react";
import { Link } from "react-router";

const UpcomingEventCard = ({ eventData }) => {
  const { _id, category, photo, groupName, Description, date, location } = eventData;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{groupName}</h2>
        <h4>{category}</h4>
        <p>{Description}</p>
        <div className="flex">
          <p>Location: {location}</p>
          <p>Date: {date}</p>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/event-details/${_id}`}><button className="btn btn-primary w-full">View Event</button></Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;

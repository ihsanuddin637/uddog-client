import React from "react";
import { Link } from "react-router";

const ManageEventCard = ({ events }) => {
  const {_id, groupName, photo, category } = events;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{groupName}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <Link className="w-full" to={`/update-event/${_id}`}>
            <button className="btn w-full btn-primary">Update</button>
          </Link>
          <button className="btn w-full btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ManageEventCard;

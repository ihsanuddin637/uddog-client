import React from "react";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

const ManageEventCard = ({ events, manageEvent, setManageEvent }) => {
  const { _id, groupName, photo, category } = events;
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`event-Data/${_id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount) {
              const remainingEvent = manageEvent.filter(
                (event) => event._id !== _id
              );
              setManageEvent(remainingEvent);
              Swal.fire({
                title: "Deleted!",
                text: "Your event has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt={groupName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{groupName}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <Link className="w-full" to={`/update-event/${_id}`}>
            <button className="btn w-full btn-primary">Update</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn w-full btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageEventCard;

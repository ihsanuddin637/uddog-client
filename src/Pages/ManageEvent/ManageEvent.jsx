import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import ManageEventCard from "../ManageEventCard/ManageEventCard";

const ManageEvent = () => {
  const { user } = use(AuthContext);
  const [manageEvent, setManageEvent] = useState([]);
  console.log(manageEvent);
  useEffect(() => {
    fetch(`http://localhost:3000/users/${user.email}`)
      .then((response) => response.json())
      .then((data) => setManageEvent(data));
  }, [user.email]);

  return (
    <div>
        <h1>Manage Event</h1>
      <div className="grid grid-cols-5 gap-4">
        {manageEvent.map((events) => (
          <ManageEventCard key={events._id} events={events}></ManageEventCard>
        ))}
      </div>
    </div>
  );
};

export default ManageEvent;

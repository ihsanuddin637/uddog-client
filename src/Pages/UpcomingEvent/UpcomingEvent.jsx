import React from "react";
import { useLoaderData } from "react-router";
import UpcomingEventCard from "../UpcomingEventCard/UpcomingEventCard";

const UpcomingEvent = () => {
  const eventsData = useLoaderData();
  console.log(eventsData);
  return (
    <div>
      <h1 className="text-7xl text-red-500">Upcoming Event</h1>
      <div className="grid grid-cols-3 gap-5">
        {eventsData.map((eventData) => (
          <UpcomingEventCard
            key={eventData._id}
            eventData={eventData}
          ></UpcomingEventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;

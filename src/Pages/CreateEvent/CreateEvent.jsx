import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const CreateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;

  const { user } = use(AuthContext);
  const handleCreateUsers = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());
    console.log(groupData);
    fetch("https://hobby-connect-server.vercel.app/groupData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Group Created!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-11/12 mx-auto my-16">
      <h2 className="text-green-800 text-center pb-5 font-bold text-5xl">
        Create Event
      </h2>
      <form onSubmit={handleCreateUsers}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Title</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-400"
              name="groupName"
              placeholder="Event Title"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Event Type</label>
            <select
              name="category"
              defaultValue="Pick a browser"
              className="select w-full outline-2 outline-green-400"
            >
              <option disabled={false}>Pick a Event Type</option>
              <option>Clean-up drives</option>
              <option>Tree plantation drives</option>
              <option>Blood donation camps</option>
              <option>Water and sanitation projects</option>
              <option>Road safety and transport education</option>
              <option>Sanitation and hygiene awareness drives</option>
              <option>Health camps and check-ups for senior citizens</option>
              <option>Self-employment and entrepreneurship workshops</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-400"
              name="Description"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Meeting Location</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-400"
              name="location"
              placeholder="Location"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Start Date</label>
            <DatePicker
            className="input w-full outline-2 outline-green-400"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </fieldset>
           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Thumbnail Image Url</label>
          <input
            type="url"
            className="input w-full outline-2 outline-green-400"
            name="photo"
            placeholder="Image Url"
          />
        </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full outline-2 outline-green-400"
              name="name"
              placeholder="Name"
                defaultValue={user.displayName}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full outline-2 outline-green-400"
              name="email"
              placeholder="Email"
                defaultValue={user.email}
              readOnly
            />
          </fieldset>
        </div>
       
        <input
          type="submit"
          className="btn btn-primary w-full"
          value="Create Event"
        />
      </form>
    </div>
  );
};

export default CreateEvent;

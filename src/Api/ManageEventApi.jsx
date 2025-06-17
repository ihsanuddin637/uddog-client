import React, { useContext } from "react";
import UseAxiosSecure from "../Pages/Hooks/UseAxiosSecure";
import { AuthContext } from "../Context/AuthContext";

const ManageEventApi = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext); // ✅ FIXED

  const manageEventPromise = () => {
    return axiosSecure
      .get(`users/${user.email}`)
      .then((response) => response.data);
  };

  return {
    manageEventPromise,
  };
};

export default ManageEventApi;

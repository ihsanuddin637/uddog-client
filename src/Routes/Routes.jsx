import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import UpcomingEvent from "../Pages/UpcomingEvent/UpcomingEvent";
import AuthLayout from "./../Layouts/AuthLayout";
import SignIn from "./../Pages/SignIn/SignIn";
import SignUp from "./../Pages/SignUp/SignUp";
import CreateEvent from "./../Pages/CreateEvent/CreateEvent";
import ManageEvent from "./../Pages/ManageEvent/ManageEvent";
import JoinedEvent from "../Pages/JoinedEvent/JoinedEvent";
import EventDetails from "../Pages/EventDetails/EventDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Home },
      {
        path: "/upcoming-event",
        Component: UpcomingEvent,
        loader: () => fetch("http://localhost:3000/event-Data/upcoming"),
      },
      {
        path: "/event-details/:id",
        Component: EventDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/event-Data/${params.id}`),
      },
      {
        path: "/create-event",
        Component: CreateEvent,
      },
      {
        path: "/manage-event",
        Component: ManageEvent,
      },
      {
        path: "/joined-event",
        Component: JoinedEvent,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signIn",
        Component: SignIn,
      },
      {
        path: "/auth/signUp",
        Component: SignUp,
      },
    ],
  },
]);

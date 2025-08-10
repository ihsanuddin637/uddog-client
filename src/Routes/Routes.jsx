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
import PrivateRoute from "./PrivateRoutes";
import EventDetails from "../Pages/EventDetails/EventDetails";
import UpdateEvent from "../Pages/UpdateEvent/UpdateEvent";
import Contact from "../Pages/Contact/Contact";
import Loading from "../Pages/Loading/Loading";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Home },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/upcoming-event",
        element: (
          <PrivateRoute>
            <UpcomingEvent></UpcomingEvent>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://uddog-server.vercel.app/event-Data/upcoming"),
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-event",
        element: (
          <PrivateRoute>
            <ManageEvent></ManageEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-event/:id",
        element: (
          <PrivateRoute>
            <UpdateEvent />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://uddog-server.vercel.app/event-Data/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/joined-event",
        element: (
          <PrivateRoute>
            <JoinedEvent></JoinedEvent>
          </PrivateRoute>
        ),
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

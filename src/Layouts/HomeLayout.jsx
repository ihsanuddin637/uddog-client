import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "./../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

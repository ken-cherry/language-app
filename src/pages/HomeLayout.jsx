import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;

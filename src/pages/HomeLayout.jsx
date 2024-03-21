import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer, Language } from "../components";

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

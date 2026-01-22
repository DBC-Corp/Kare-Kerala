import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-15">
        <Outlet />
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
};

export default UserLayout;

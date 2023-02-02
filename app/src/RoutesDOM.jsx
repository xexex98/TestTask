import React from "react";
import { Link, Outlet } from "react-router-dom";

export const RoutesDOM = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center gap-5 bg-blue-400 p-3 ">
        <Link to="/" className="text-3xl font-extrabold">
          TABLE
        </Link>
        <Link to={"/"}>
          <p className="hover:underline hover:underline-offset-1">Home</p>
        </Link>
        <Link to={"/table"}>
          <p className="hover:underline hover:underline-offset-1">Table</p>
        </Link>
      </div>
      <div className="h-3/4">
        <Outlet />
      </div>
    </div>
  );
};

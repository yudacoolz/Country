import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

// import { Children } from "react";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-3 ">
        {/* This Outlet will render the child route component yang ada di main.jsx itu. disana karena pakai child" utk path nya , jadinya ga bisa pakai metode Children biasa*/}
        <Outlet />
        {/* {children} */}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex md:justify-end justify-around items-center bg-blue-700 text-white text-xl p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="p-2 font-semibold hover:underline">
            {" "}
            List Country{" "}
          </Link>
        </li>

        <li>
          <Link
            to="/cooperate-country"
            className="p-2 font-semibold hover:underline"
          >
            {" "}
            Contribute Country{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

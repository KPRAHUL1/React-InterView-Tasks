
import React from "react";

const Navbar = ({taskcount}) => {
  return (
    <header className="py-6 bg-gray-100 shadow-sm">
      <h1 className="text-center text-2xl font-bold text-gray-800">Project Management</h1>
      <p className="text-center text-gray-600 text-base mt-1">
        Currently{taskcount} task(s) pending
      </p>
    </header>
  );
};

export default Navbar;

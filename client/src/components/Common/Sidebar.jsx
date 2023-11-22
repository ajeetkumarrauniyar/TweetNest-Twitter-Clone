import React from "react";

const Sidebar = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-4 my-5 justify-center">
      <div className="mx-auto md:mx-0">
        {/* Logo */}
        <img
          src="/logo512.png"
          alt="TweetNest Logo"
          width={"40px"}
          className="ml-8"
        />
      </div>
      {/* Middle Part - Feed Section */}
      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-2xl">Home</h2>
        </div>
      </div>

      {/* Search Bar */}
      
    </div>
  );
};

export default Sidebar;

import React from "react";
import TimelineTweet from "../components/Explore/TimelineTweet";

const Explore = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Explore</h1>
      </div>
      <TimelineTweet />
    </div>
  );
};

export default Explore;

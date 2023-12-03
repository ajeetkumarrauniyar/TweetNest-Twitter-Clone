import { trending, friends } from "./Common/Configuration";

import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <>
      <input
        className="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4"
        placeholder="Search Twitter"
      />
      <i className="absolute left-0 top-0 mt-5 ml-12 text-sm text-light">
        <FaSearch />
      </i>
    </>
  );
};

export const TrendingTopics = () => {
  return (
    <div className="w-full rounded-lg bg-lightest">
      {/* Trends Header */}
      <div className="flex items-center justify-between p-3">
        <p className="text-lg font-bold">Trends for You</p>
        <i className="fas fa-cog text-lg text-blue"></i>
      </div>
      {/* List of Trending Topics */}
      {trending.map((trend, index) => (
        <button
          key={index}
          className="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter"
        >
          <div>
            <p className="text-xs text-left leading-tight text-dark">
              {trend.top}
            </p>
            <p className="font-semibold text-sm text-left leading-tight">
              {trend.title}
            </p>
            <p className="text-left text-sm leading-tight text-dark">
              {trend.bottom}
            </p>
          </div>
          <i className="fas fa-angle-down text-lg text-dark"></i>
        </button>
      ))}
      {/* Show More Button */}
      <button className="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>
  );
};

export const WhoToFollow = () => {
  return (
    <div className="w-full rounded-lg bg-lightest my-4">
      <div className="p-3">
        <p className="text-lg font-bold">Who to Follow</p>
      </div>
      {/* List of Friends to Follow */}
      {friends.map((friend, index) => (
        <button
          key={index}
          className="w-full flex hover:bg-lighter p-3 border-t border-lighter"
        >
          {/* Friend's Profile Image */}
          <img
            src={friend.src}
            className="w-12 h-12 rounded-full border border-lighter"
            alt={friend.name}
          />
          {/* Friend's Name and Handle */}
          <div className="hidden lg:block ml-4">
            <p className="text-sm font-bold leading-tight">{friend.name}</p>
            <p className="text-sm leading-tight">{friend.handle}</p>
          </div>
          {/* Follow Button */}
          <button className="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue">
            Follow
          </button>
        </button>
      ))}
      {/* Show More Button */}
      <button className="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>
  );
};

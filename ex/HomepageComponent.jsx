import React, { useState } from "react";
import { FaPlusCircle, FaImage, FaFilm, FaRegSmile } from "react-icons/fa";

import { tabs, trending, friends, following } from "../client/src/components/Common/Configuration";
const HomepageComponent = () => {
  const [id, setId] = useState("home");
  const [dropdown, setDropdown] = useState(false);
  // Tweet Input
  const [tweet, setTweet] = useState({ content: "" });

  // Tweet Output
  const [tweets, setTweets] = useState([]);

  // Add a new tweet to the tweets state
  const addNewTweet = () => {
    const newTweet = {
      content: tweet.content,
    };
    setTweets([...tweets, newTweet]);
    setTweet({ content: "" });
  };

  return (
    <div id="app" className="flex container h-screen w-full">
      {/* Left Side Navigation */}
      <div className="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
        <div>
          {/* Twitter Logo */}
          <button className="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
            <img
              src="/logo512.png"
              alt="TweetNest Logo"
              width={"40px"}
              className="ml-8"
            />
          </button>
          {/* Navigation Tabs */}
          <div>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setId(tab.id)}
                className={`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
                  id === tab.id ? "text-blue" : ""
                }`}
              >
                <i className={`${tab.icon} text-2xl mr-4 text-left`}></i>
                <p className="text-lg font-semibold text-left hidden lg:block">
                  {tab.title}
                </p>
              </button>
            ))}
          </div>
          {/* Tweet Button */}
          <button className="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
            <p className="hidden lg:block">Tweet</p>
            <i className="lg:hidden">
              <FaPlusCircle />
            </i>
          </button>
        </div>
        {/* User Profile Dropdown */}
        <div className="lg:w-full relative">
          <button
            onClick={() => setDropdown(true)}
            className="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
          >
            {/* User Profile Image */}
            <img
              src="https://randomuser.me/api/portraits/women/52.jpg"
              className="w-10 h-10 rounded-full border border-lighter"
              alt="Profile"
            />
            <div className="hidden lg:block ml-4">
              <p className="text-sm font-bold leading-tight">Steph Dietz</p>
              <p className="text-sm leading-tight">@SaaSyEth</p>
            </div>
            <i className="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
          </button>
          {/* Dropdown Content */}
          {dropdown && (
            <div className="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
              {/* User Profile Info */}
              <button
                onClick={() => setDropdown(false)}
                className="p-3 flex items-center w-full hover:bg-lightest focus:outline-none"
              >
                <img
                  src="https://randomuser.me/api/portraits/women/52.jpg"
                  className="w-10 h-10 rounded-full border border-lighter"
                  alt="Profile"
                />
                <div className="ml-4">
                  <p className="text-sm font-bold leading-tight">Steph Dietz</p>
                  <p className="text-sm leading-tight">@SaaSyEth</p>
                </div>
                <i className="fas fa-check ml-auto test-blue"></i>
              </button>
              {/* Additional Dropdown Options */}
              <button
                onClick={() => setDropdown(false)}
                className="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
              >
                Add an existing account
              </button>
              <button
                onClick={() => setDropdown(false)}
                className="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
              >
                Log out @SaaSyEth
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Middle Part - Tweets Feed Section */}
      <div className="w-full md:w-1/2 h-full overflow-y-scroll">
        {/* Header Section */}
        <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
          <h1 className="text-xl font-bold">Home</h1>
          <i className="far fa-star text-xl text-blue"></i>
        </div>

        {/* Tweet Input */}
        <div className="px-5 py-3 border-b-8 border-lighter flex">
          <div className="flex-none">
            {/* User Profile Image in Tweet Input */}
            <img
              src="https://randomuser.me/api/portraits/men/63.jpg"
              className="flex-none w-12 h-12 rounded-full border border-lighter"
              alt="Profile"
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewTweet();
            }}
            className="w-full px-4 relative"
          >
            {/* Textarea for Entering New Tweets */}
            <textarea
              value={tweet.content}
              onChange={(e) => setTweet({ content: e.target.value })}
              placeholder="What's happening?"
              className="mt-3 pb-3 w-full focus:outline-none"
            />
            {/* Icons for Adding Media in Tweet */}
            <div className="flex items-center">
              <i className="text-lg text-blue mr-4">
                <FaImage />
              </i>
              <i className="text-lg text-blue mr-4">
                <FaFilm />
              </i>
              <i className="text-lg text-blue mr-4">
                <FaRegSmile />
              </i>
            </div>
            {/* Tweet Button */}
            <button
              type="submit"
              className="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
            >
              Tweet
            </button>
          </form>
        </div>

        {/* Tweet Button */}
        <div className="flex flex-col-reverse">
          {tweets.map((tweet, index) => (
            <div
              key={index}
              className="w-full p-4 border-b hover:bg-lighter flex"
            >
              <div className="flex-none mr-4">
                {/* User Profile Image in Tweet Display */}
                <img
                  src="https://randomuser.me/api/portraits/men/63.jpg"
                  className="h-12 w-12 rounded-full flex-none"
                  alt="Profile"
                />
              </div>
              <div className="w-full">
                {/* Tweet Header Section */}
                <div className="flex items-center w-full">
                  <p className="font-semibold">Steph Dietz</p>
                  <p className="text-sm text-dark ml-2">@SaaSyEth</p>
                  <p className="text-sm text-dark ml-2">1 sec</p>
                  <i className="fas fa-angle-down text-dark ml-auto"></i>
                </div>
                {/* Tweet Content */}
                <p className="py-2">{tweet.content}</p>
                <div className="flex items-center justify-between w-full">
                  {/* Comments Count */}
                  <div className="flex items-center text-sm text-dark">
                    <i className="far fa-comment mr-3"></i>
                    <p>0</p>
                  </div>
                  {/* Retweets Count */}
                  <div className="flex items-center text-sm text-dark">
                    <i className="fas fa-retweet mr-3"></i>
                    <p>0</p>
                  </div>
                  {/* Likes Count */}
                  <div className="flex items-center text-sm text-dark">
                    <i className="fas fa-heart mr-3"></i>
                    <p>1</p>
                  </div>
                  {/* Share Icon */}
                  <div className="flex items-center text-sm text-dark">
                    <i className="fas fa-share-square mr-3"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Following Tweets */}
        {following.map((follow, index) => (
          <div
            key={index}
            className="w-full p-4 border-b hover:bg-lighter flex"
          >
            <div className="flex-none mr-4">
              {/* User Profile Image in Following Tweets Display */}
              <img
                src={follow.src}
                className="h-12 w-12 rounded-full flex-none"
                alt="Profile"
              />
            </div>
            <div className="w-full">
              {/* Following Tweet Header Section */}
              <div className="flex items-center w-full">
                <p className="font-semibold">{follow.name}</p>
                <p className="text-sm text-dark ml-2">{follow.handle}</p>
                <p className="text-sm text-dark ml-2">{follow.time}</p>
                <i className="fas fa-angle-down text-dark ml-auto"></i>
              </div>
              {/* Following Tweet Content */}
              <p className="py-2">{follow.tweet}</p>
              {/* Following Tweet Actions */}
              <div className="flex items-center justify-between w-full">
                {/* Comments Count */}
                <div className="flex items-center text-sm text-dark">
                  <i className="far fa-comment mr-3"></i>
                  <p>{follow.comments}</p>
                </div>
                {/* Retweets Count */}
                <div className="flex items-center text-sm text-dark">
                  <i className="fas fa-retweet mr-3"></i>
                  <p>{follow.retweets}</p>
                </div>
                {/* Likes Count */}
                <div className="flex items-center text-sm text-dark">
                  <i className="fas fa-heart mr-3"></i>
                  <p>{follow.like}</p>
                </div>
                {/* Share Icon */}
                <div className="flex items-center text-sm text-dark">
                  <i className="fas fa-share-square mr-3"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Right Section */}
      <div className="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
        {/* Search Bar */}
        <input
          className="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4"
          placeholder="Search Twitter"
        />
        <i className="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
        {/* Trending Topics Section */}
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

        {/* Who to Follow Section */}
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
      </div>
    </div>
  );
};

export default HomepageComponent;

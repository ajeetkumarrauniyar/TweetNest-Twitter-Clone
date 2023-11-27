import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { UserAvatar } from "./UI Elements/Avatar";
import { NavigationTabs } from "./Navigation/NavigationTabs";
import { TweetModal } from "./Common/Modal";

export const SideNavigation = () => {
  // Tweet Input Modal
  const [modalVisible, setModalVisible] = useState(false);
  // Tweet Output
  const [tweets, setTweets] = useState([]);
  
  const [dropdown, setDropdown] = useState(false);

  const addNewTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  return (
    <>
      {/* Navigation Tabs */}
      <div>
        {/* Twitter Logo */}
        <img
          src="/logo512.png"
          alt="TweetNest Logo"
          className="ml-0 sm:ml-8 h-10 w-10 md:my-4"
          href="/"
        />

        {/* Navigation Tabs */}
        <div>
          <NavigationTabs />
        </div>
        {/* Display the modal based on the state */}
        {modalVisible && (
          <TweetModal
            setModalVisible={setModalVisible}
            addNewTweet={addNewTweet}
          />
        )}
        {/* Tweet Button */}
        <button className="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-4 hover:bg-darkblue">
          <p
            className="hidden lg:block"
            onClick={() => setModalVisible(!modalVisible)}
          >
            Tweet
          </p>
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
          <UserAvatar />
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
    </>
  );
};

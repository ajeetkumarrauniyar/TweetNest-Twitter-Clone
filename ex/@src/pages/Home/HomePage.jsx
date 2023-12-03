import React, { useState } from "react";
import { TweetCard } from "../../components/Tweets/TweetCard.jsx";
import { following } from "../../components/Common/Configuration.js";
import { SideNavigation } from "../../components/SideNavigation.jsx";
import { TweetModal } from "../../components/Common/Modal.jsx";
import {
  SearchBar,
  TrendingTopics,
  WhoToFollow,
} from "../../components/Widgets.jsx";

const HomePage = () => {
  // Tweet Input Modal
  const [modalVisible, setModalVisible] = useState(false);
  // Tweet Output
  const [tweets, setTweets] = useState([]);

  const addNewTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };
  return (
    <div id="
    " className="flex container h-screen w-full">
      {/* Left Side Navigation */}
      {/* <div className="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
        <SideNavigation />
      </div> */}

      {/* Middle Part - Tweets Feed Section */}
      <div className="w-full md:w-1/2 h-full overflow-y-scroll">
        {/* Header Section */}
        <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
          {/* Button to trigger the modal */}
          <button
            onClick={() => setModalVisible(!modalVisible)}
            type="submit"
            className="flex-none rounded-full bg-blue px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Tweet
          </button>
        </div>

        {/* Display the modal based on the state */}
        {modalVisible && (
          <TweetModal
            setModalVisible={setModalVisible}
            addNewTweet={addNewTweet}
          />
        )}

        {/* Display Following Tweets */}
        <div className="flex flex-col-reverse">
          {[...tweets, ...following].map((follow, index) => (
            <TweetCard
              key={index}
              userProfileSrc={follow.src}
              tweet={{
                name: follow.name,
                handle: follow.handle,
                time: follow.time,
                content: follow.tweet,
                comments: follow.comments,
                retweets: follow.retweets,
                likes: follow.like,
              }}
            />
          ))}
        </div>
      </div>

      {/* Trending Right Section */}
      {/* <div className="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative"> */}
        {/* Search Bar */}
        {/* <SearchBar /> */}
        {/* Trending Topics Section */}
        {/* <TrendingTopics /> */}
        {/* Who to Follow Section */}
        {/* <WhoToFollow /> */}
      {/* </div> */}
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/config.js";
import Header from "../components/Header/Header.jsx";
import Modal from "../components/Modal/Modal";
import TimelineTweet from "../components/Tweets/TimelineTweet.jsx";
import { Link, useLocation } from "react-router-dom";
import formatDistance from "date-fns/formatDistance";
import { useSelector } from "react-redux";

import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaComment,
  FaRetweet,
} from "react-icons/fa";

const Home = () => {
  const Authorization = {
    headers: {
      "Content-Type": "Application/json",
      authorization: "Bearer " + localStorage.getItem("JWTToken"),
    },
  };

  const [tweets, setTweets] = useState([]);
  const [data, setData] = useState();
  // const [trigger, setTrigger] = useState(false);

  // const dateStr = formatDistance(new Date(tweets.createdAt), new Date());
  // const location = useLocation().pathname;

  // Fetch tweets on component mount
  const fetchTweets = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tweets`, Authorization);
      console.log(response);
      if (response.status === 200) {
        setTweets(response.data.tweets);
      }
    
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const { currentUser } = useSelector((state) => state.user);

  const [userData, setUserData] = useState();

  // const dateStr = formatDistance(new Date(tweets.createdAt), new Date());
  const location = useLocation().pathname;

  const handleLike = async (e) => {
    e.preventDefault();

    try {
      const like = await axios.put(`${API_BASE_URL}/tweet/${tweets._id}/like`, {
        id: currentUser._id,
      });

      if (location.includes("profile")) {
        const newData = await axios.get(
          `${API_BASE_URL}/user/${tweets._id}/tweets`
        );
        setData(newData.data);
      } else if (location.includes("explore")) {
        const newData = await axios.get(`${API_BASE_URL}/tweets/explore`);
        setData(newData.data);
      } else {
        const newData = await axios.get(`${API_BASE_URL}/tweets`);
        setData(newData.data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      {/* Header Section */}
      {/* <Header handleTweetButtonClick={handleTweetButtonClick} /> */}

      {/* Render the Modal component with isOpen, onClose, and addNewTweet props */}
      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // addNewTweet={addNewTweet}
        fetchTweets
      /> */}
      
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        <button className="flex-none rounded-full bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <Modal fetchTweets />
        </button>
      </div>

      {/* Pass the tweets to the TimelineTweet component */}
      {tweets.map((tweet) => {
        return (
          <div className="w-full p-4 border-b hover:bg-lighter flex">
            {tweet && (
              <>
                {/* User Profile Image in Following Tweets Display */}
                <div className="flex-none mr-4">
                  <img
                    src={tweet.image}
                    className="h-12 w-12 rounded-full flex-none"
                    alt="Profile"
                  />
                </div>

                <div className="w-full">
                  {/* Following Tweet Header Section */}
                  <div className="flex items-center w-full">
                    <Link to={`/profile/${tweet._id}`}>
                      <h4 className="font-bold text-sm text-dark ml-2">
                        {tweet.fullname}
                      </h4>
                    </Link>
                  </div>

                  <div className="flex space-x-2">
                    <Link to={`/profile/${tweet._id}`}>
                      <span className="font-semibold text-sm text-dark ml-2">
                        @{tweet.username}
                      </span>
                    </Link>
                    <p className="text-sm text-dark ml-2">
                      {" "}
                      - {tweet.createdAt}
                    </p>
                  </div>

                  {/* Following Tweet Content */}
                  <p className="py-2">{tweet.description}</p>

                  {/* Following Tweet Actions */}
                  <div className="flex items-center justify-between w-full">
                    {/* Likes Count */}
                    <div className="flex items-center text-sm text-dark">
                      <button onClick={handleLike}>
                        {tweet.likes.includes(currentUser._id) ? (
                          <FaHeart className="mr-2 my-2 cursor-pointer"></FaHeart>
                        ) : (
                          <FaRegHeart className="mr-2 my-2 cursor-pointer"></FaRegHeart>
                        )}
                        {tweet.likes.length}
                      </button>
                    </div>

                    {/* Comments Count */}
                    <div className="flex items-center text-sm text-dark">
                      <button onClick={handleLike}>
                        {tweet.likes.includes(currentUser._id) ? (
                          <FaComment className="mr-2 my-2 cursor-pointer"></FaComment>
                        ) : (
                          <FaRegComment className="mr-2 my-2 cursor-pointer"></FaRegComment>
                        )}
                        {tweet.replies.length}
                      </button>
                    </div>

                    {/* Retweets Count */}
                    <div className="flex items-center text-sm text-dark">
                      <button onClick={handleLike}>
                        {tweet.likes.includes(currentUser._id) ? (
                          <FaRetweet className="mr-2 my-2 cursor-pointer"></FaRetweet>
                        ) : (
                          <FaRetweet className="mr-2 my-2 cursor-pointer"></FaRetweet>
                        )}
                        {tweet.retweetBy.length}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Home;

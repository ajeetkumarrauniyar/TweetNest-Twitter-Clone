import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/config.js";
// import Header from "../components/Header/Header.jsx";
import Modal from "../components/Modal/Modal";
import TimelineTweet from "../components/Tweets/TimelineTweet.jsx";
import { useLocation } from "react-router-dom";
// import formatDistance from "date-fns/formatDistance";
import { useSelector } from "react-redux";

// import {
//   FaRegHeart,
//   FaHeart,
//   FaRegComment,
//   FaComment,
//   FaRetweet,
// } from "react-icons/fa";

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

  // const [userData, setUserData] = useState();

  // const dateStr = formatDistance(new Date(tweets.createdAt), new Date());
  const location = useLocation().pathname;

  // const handleLike = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const like = await axios.put(`${API_BASE_URL}/tweet/${tweets._id}/like`, {
  //       id: currentUser._id,
  //     });

  //     if (location.includes("profile")) {
  //       const newData = await axios.get(
  //         `${API_BASE_URL}/user/${tweets._id}/tweets`
  //       );
  //       setData(newData.data);
  //     } else if (location.includes("explore")) {
  //       const newData = await axios.get(`${API_BASE_URL}/tweets/explore`);
  //       setData(newData.data);
  //     } else {
  //       const newData = await axios.get(`${API_BASE_URL}/tweets`);
  //       setData(newData.data);
  //     }
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };

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

      <TimelineTweet />
    </>
  );
};

export default Home;

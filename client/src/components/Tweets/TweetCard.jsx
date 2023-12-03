import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../../config/config";
import formatDistance from "date-fns/formatDistance";

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaComment,
  FaRetweet,
} from "react-icons/fa";

const TweetCard = ({ tweet, setData }) => {
  const Authorization = {
    headers: {
      "Content-Type": "Application/json",
      authorization: "Bearer " + localStorage.getItem("JWTToken"),
    },
  };
  const { currentUser } = useSelector((state) => state.user);

  console.log(tweet);
  // debugger;
  // const [userData, setUserData] = useState();

  const dateStr = formatDistance(new Date(tweet.createdAt), new Date());
  // const location = useLocation().pathname;

  // useEffect(() => {
  // const fetchTweets = async () => {
  //   try {
  //     if (tweet.tweetedBy) {
  //       const findUser = await axios.get(
  //         `${API_BASE_URL}/tweet/${tweet.tweetedBy._id}`,
  //         Authorization
  //       );
  //       console.log("User Data:", findUser.data);
  //       setUserData(findUser.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };
  // }, [tweet.tweetedBy, tweet.likes]);

  // const <></> = async (e) => {
  //   e.preventDefault();

  //   // console.log("Authorization Header:", Authorization.headers);

  //   try {
  //     // const like = await axios.put(`${API_BASE_URL}/tweet/${tweet._id}/like`, {
  //     //   id: currentUser._id,
  //     // });

  //     if (location.includes("profile")) {
  //       // const newData = await axios.get(`${API_BASE_URL}/user/${id}/tweets`);
  //       // setData(newData.data);
  //     } else if (location.includes("explore")) {
  //       // const newData = await axios.get(`${API_BASE_URL}/tweets/explore`);
  //       // setData(newData.data);
  //     } else {
  //       const newData = await axios.get(`${API_BASE_URL}/tweets`);
  //       setData(newData.data);
  //     }
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };
  console.log(tweet.tweetedBy.profilePicture);

  return (
    <div className="w-full p-4 border-b hover:bg-lighter flex">
      <>
        {/* User Profile Image in Following Tweets Display */}
        <div className="flex-none mr-4">
          {tweet.tweetedBy && (
            <img
              src={tweet.tweetedBy.profilePicture}
              className="h-12 w-12 rounded-full flex-none"
              alt="Profile"
            />
          )}
        </div>

        <div className="w-full">
          {/* Following Tweet Header Section */}
          <div className="flex items-center w-full">
            <Link to={`/profile/${tweet.tweetedBy._id}`}>
              <h4 className="font-bold text-sm text-dark ml-2">
                {tweet.tweetedBy.fullName}
              </h4>
            </Link>
          </div>

          <div className="flex space-x-2">
            <Link to={`/profile/${tweet.tweetedBy._id}`}>
              <span className="font-semibold text-sm text-dark ml-2">
                @{tweet.tweetedBy.username}
              </span>
            </Link>
            <p className="text-sm text-dark ml-2"> - {dateStr}</p>
          </div>

          {/* Following Tweet Content */}
          <p className="py-2">{tweet.content}</p>

          {/* Following Tweet Actions */}
          <div className="flex items-center justify-between w-full">
            {/* Likes Count */}
            <div className="flex items-center text-sm text-dark">
              <button onClick={<></>}>
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
              <button onClick={<></>}>
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
              <button onClick={<></>}>
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
    </div>
  );
};

export default TweetCard;

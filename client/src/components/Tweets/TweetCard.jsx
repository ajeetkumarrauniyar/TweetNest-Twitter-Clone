import axios from "axios";
import React from "react";
import { API_BASE_URL, Authorization } from "../../config/config";
import formatDistance from "date-fns/formatDistance";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaComment,
  FaRetweet,
  FaTrash,
} from "react-icons/fa";

const TweetCard = ({ tweet, fetchData }) => {
  // Get current user from Redux store
  const currentUser = useSelector((state) => state.user.currentUser);

  // Format tweet creation date
  const dateStr = formatDistance(new Date(tweet.createdAt), new Date());

  // Handle like and dislike functionality
  const handleLikeAndDislike = async (e) => {
    e.preventDefault();

    try {
      // Send a request to like or dislike the tweet
      const likeAndDislike = await axios.put(
        `${API_BASE_URL}/tweet/${tweet._id}/likeAndDislike`,
        {},
        Authorization
      );

      // Fetch updated tweet data
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  };

  // Handle tweet deletion
  const handleDeleteTweet = async (e) => {
    e.preventDefault();

    try {
      // Send a request to delete the tweet
      const deleteTweet = await axios.delete(
        `${API_BASE_URL}/tweet/${tweet._id}`,
        Authorization
      );

      console.log(deleteTweet);
      // Fetch updated tweet data
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  };

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
          <div>
            <div className="flex items-center w-full">
              <Link to={`/profile/${tweet.tweetedBy._id}`}>
                <h4 className="font-bold text-sm text-dark ml-2">
                  {tweet.tweetedBy.fullName}
                </h4>
              </Link>
            </div>

            {/* Delete tweet button */}
            <div className="float-right">
              <FaTrash
                className="cursor-pointer"
                onClick={handleDeleteTweet}
              ></FaTrash>
            </div>
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
              <button onClick={handleLikeAndDislike}>
                {tweet.likes.includes(currentUser.id) ? (
                  <FaHeart className="mr-2 my-2 cursor-pointer"></FaHeart>
                ) : (
                  <FaRegHeart className="mr-2 my-2 cursor-pointer"></FaRegHeart>
                )}
                {tweet.likes.length}
              </button>
            </div>

            {/* Comments Count */}
            <div className="flex items-center text-sm text-dark">
              <button>
                {tweet.likes.includes(currentUser.id) ? (
                  <FaComment className="mr-2 my-2 cursor-pointer"></FaComment>
                ) : (
                  <FaRegComment className="mr-2 my-2 cursor-pointer"></FaRegComment>
                )}
                {tweet.replies.length}
              </button>
            </div>

            {/* Retweets Count */}
            <div className="flex items-center text-sm text-dark">
              <button>
                {tweet.likes.includes(currentUser.id) ? (
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

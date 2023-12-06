import React from "react";
import axios from "axios";
import { API_BASE_URL, Authorization } from "../../config/config";
import formatDistance from "date-fns/formatDistance";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaComment,
  FaRetweet,
  FaTrash,
} from "react-icons/fa";
import toast from "react-hot-toast";

const TweetCard = ({ tweet, fetchData }) => {
  // Get current user from Redux store
  const currentUser = useSelector((state) => state.user.currentUser);

  // Format the distance between the tweet creation date and the current date
  const dateStr = formatDistance(new Date(tweet.createdAt), new Date());

  // Handle like and dislike functionality
  const handleLikeAndDislike = async (e) => {
    e.preventDefault();

    try {
      const likeAndDislike = await axios.put(
        `${API_BASE_URL}/tweet/${tweet._id}/likeAndDislike`,
        {},
        Authorization
      );

      if (likeAndDislike.status === 200) {
        // Refetch data and show success toast
        fetchData();
        toast.success(
          tweet.likes.includes(currentUser.id)
            ? "You have disliked this tweet!"
            : "You have liked this tweet!"
        );
      }
    } catch (error) {
      // Show error toast if an error occurs
      toast.error("An error occurred while processing your request.");
      console.error("error", error);
    }
  };

  // Handle reply functionality
  const handleReply = async (e) => {
    e.preventDefault();

    try {
      const replyTweet = await axios.put(
        `${API_BASE_URL}/tweet/${tweet._id}/reply`,
        {},
        Authorization
      );

      if (replyTweet.status === 200) {
        // Refetch data and show success toast
        fetchData();
        toast.success("Reply posted successfully!");
      }
    } catch (error) {
      // Show error toast if an error occurs
      toast.error("An error occurred while posting your reply.");
      console.error("error", error);
    }
  };

  // Handle retweet functionality
  const handleRetweetTweet = async (e) => {
    e.preventDefault();

    try {
      const retweetTweet = await axios.post(
        `${API_BASE_URL}/tweet/${tweet._id}/retweet`,
        Authorization
      );

      if (retweetTweet.status === 200) {
        // Refetch data and show success toast
        fetchData();
        toast.success("Tweet retweeted successfully!");
      }
    } catch (error) {
      // Show error toast if an error occurs
      toast.error("An error occurred while retweeting the tweet.");
      console.error("error", error);
    }
  };

  // Handle delete tweet functionality
  const handleDeleteTweet = async (e) => {
    e.preventDefault();

    try {
      const deleteTweet = await axios.delete(
        `${API_BASE_URL}/tweet/${tweet._id}`,
        Authorization
      );

      if (deleteTweet.status === 200) {
        // Refetch data and show success toast
        fetchData();
        toast.success("Tweet deleted successfully!");
      }
    } catch (error) {
      // Show error toast if an error occurs
      toast.error("An error occurred while deleting the tweet.");
      console.error("error", error);
    }
  };

  // JSX for the TweetCard component
  return (
    <div className="w-full p-4 border-b hover:bg-lighter flex">
      <>
        <div className="flex-none mr-4">
          {/* Display the profile picture of the user who tweeted */}
          {tweet.tweetedBy && (
            <img
              src={tweet.tweetedBy.profilePicture}
              className="h-12 w-12 rounded-full flex-none"
              alt="Profile"
            />
          )}
        </div>

        <div className="w-full">
          <div>
            <div className="flex items-center w-full">
              {/* Link to the profile of the user who tweeted */}
              <Link to={`/profile/${tweet.tweetedBy._id}`}>
                <h4 className="font-bold text-sm text-dark ml-2">
                  {tweet.tweetedBy.fullName}
                </h4>
              </Link>
            </div>

            <div className="float-right">
              {/* Trash icon for deleting the tweet */}
              <FaTrash
                className="cursor-pointer"
                onClick={handleDeleteTweet}
              ></FaTrash>
            </div>
          </div>

          <div className="flex space-x-2">
            {/* Link to the profile of the user who tweeted */}
            <Link to={`/profile/${tweet.tweetedBy._id}`}>
              <span className="font-semibold text-sm text-dark ml-2">
                @{tweet.tweetedBy.username}
              </span>
            </Link>
            <p className="text-sm text-dark ml-2"> - {dateStr}</p>
          </div>

          <p className="py-2">{tweet.content}</p>

          <div className="flex items-center justify-between w-full">
            {/* Like and dislike functionality */}
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

            {/* Reply functionality */}
            <div className="flex items-center text-sm text-dark">
              <button onClick={handleReply}>
                {tweet.replies.includes(currentUser.id) ? (
                  <FaComment className="mr-2 my-2 cursor-pointer"></FaComment>
                ) : (
                  <FaRegComment className="mr-2 my-2 cursor-pointer"></FaRegComment>
                )}
                {tweet.replies.length}
              </button>
            </div>

            {/* Retweet functionality */}
            <div className="flex items-center text-sm text-dark">
              <button onClick={handleRetweetTweet}>
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

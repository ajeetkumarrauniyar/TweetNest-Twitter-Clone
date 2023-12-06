import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL, Authorization } from "../../config/config";
import TweetCard from "./TweetCard";
import Modal from "../Modal/CreateTweet";

const TimelineTweet = () => {
  // State for storing timeline tweets
  const [timelineTweets, setTimelineTweets] = useState([]);

  // Function to fetch timeline tweets from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tweets`, Authorization);
      setTimelineTweets(response.data.tweets);
    } catch (error) {
      console.error("Error fetching timeline tweets:", error);
    }
  };

  // Fetch timeline tweets on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-6">
      {/* Header Section */}
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        {/* Button to open the create tweet modal */}
        <button className="flex-none rounded-full bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <Modal fetchTweets={fetchData} />
        </button>
      </div>

      {/* Displaying timeline tweets using TweetCard component */}
      {timelineTweets.map((tweet) => (
        <div key={tweet._id} className="p-2">
          <TweetCard
            tweet={tweet}
            setData={setTimelineTweets}
            fetchData={fetchData}
          />
        </div>
      ))}
    </div>
  );
};

export default TimelineTweet;

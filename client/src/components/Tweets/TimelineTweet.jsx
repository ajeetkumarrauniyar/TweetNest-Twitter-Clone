import React, { useEffect, useState } from "react";
import axios from "axios";
import TweetCard from "./TweetCard";
import { API_BASE_URL } from "../../config/config";
import Modal from "../Modal/Modal";

const TimelineTweet = () => {
  const Authorization = {
    headers: {
      "Content-Type": "Application/json",
      authorization: "Bearer " + localStorage.getItem("JWTToken"),
    },
  };

  const [timelineTweets, setTimelineTweets] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tweets`, Authorization);

      setTimelineTweets(response.data.tweets);
      // console.log(response.data.tweets);
    } catch (error) {
      console.error("Error fetching timeline tweets:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-6">
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        <button className="flex-none rounded-full bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <Modal fetchTweets= {fetchData} />
        </button>
      </div>

      {timelineTweets.map((tweet) => (
        <div key={tweet._id} className="p-2">
          <TweetCard tweet={tweet} setData={setTimelineTweets} fetchData= {fetchData} />
        </div>
      ))}
    </div>
  );
};

export default TimelineTweet;

import React, { useEffect, useState } from "react";
import axios from "axios";
import TweetCard from "./TweetCard";
import { API_BASE_URL } from "../../config/config";

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
      {timelineTweets.map((tweet) => (
        <div key={tweet._id} className="p-2">
          <TweetCard tweet={tweet} setData={setTimelineTweets} />
        </div>
      ))}
    </div>
  );
};

export default TimelineTweet;

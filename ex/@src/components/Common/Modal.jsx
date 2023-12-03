import React, { useState } from "react";
import { TweetInput } from "../Tweets/TweetInput";

export const TweetModal = ({ setModalVisible, addNewTweet }) => {
  const [tweet, setTweet] = useState({ content: "" });
 
  const handleAddTweet = () => {
    if (tweet.content.trim() !== "") {
      const newTweet = {
        content: tweet.content,
        // Add other properties if needed
      };
      addNewTweet(newTweet);
      setTweet({ content: "" });
      setModalVisible(false); // Close the modal after adding a new tweet
    }
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative p-4 bg-white w-full max-w-2xl">
        {/* Modal content */}
        <TweetInput
          value={tweet.content}
          onChange={(e) => setTweet({ content: e.target.value })}
          onSubmit={(e) => {
            e.preventDefault();
            // addNewTweet();
            handleAddTweet();
          }}
        />
      </div>
    </div>
  );
};

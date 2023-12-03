import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config/config";

const Modal = ({ fetchTweets }) => {
  const [tweets, setTweets] = useState([]);
  const [newTweetContent, setNewTweetContent] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const Authorization = {
    headers: {
      "Content-Type": "Application/json",
      authorization: "Bearer " + localStorage.getItem("JWTToken"),
    },
  };

  // const handleTweetSubmit = () => {
  //   if (newTweetContent.trim() !== "") {
  //     const newTweet = { Content: newTweetContent };
  //     addNewTweet(newTweet);
  //     setNewTweetContent("");
  //   }
  // };

  const newTweet = { content: newTweetContent };

  const addNewTweet = async () => {
    try {
      // Use axios to post the new tweet
      const response = await axios.post(
        `${API_BASE_URL}/tweet`,
        newTweet,
        Authorization
      );

      if (response.status === 200) {
        // Update the tweets state with the new tweet
        setTweets([response.data, ...tweets]);
        fetchTweets();
      }
    } catch (error) {
      console.error(error);
    }

    setIsOpen(false);
    // setIsModalOpen(false); // Close the modal after posting the tweet
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Tweet
        </button>
      </div>

      <div
        className={`fixed inset-0 modal ${
          isOpen ? "block" : "hidden"
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-center min-h-screen text-center sm:items-center sm:p-0">
          <div className="p-4 rounded-lg w-80 relative transform overflow-hidden text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {/* Modal header */}
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h1 className="mt-2 text-2xl font-bold">New Tweet</h1>
            </div>

            {/* TweetInput */}
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <textarea
                className="w-full h-32 p-2 mb-4 border rounded"
                placeholder="What's happening?"
                value={newTweetContent}
                onChange={(e) => setNewTweetContent(e.target.value)}
              ></textarea>
              {/* Icons for uploading images */}
              <div className="flex items-center space-x-4 mb-4">
                <span>📷</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={addNewTweet}
              >
                Tweet
              </button>

              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

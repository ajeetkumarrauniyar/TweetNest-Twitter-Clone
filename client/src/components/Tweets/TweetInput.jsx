import React from "react";
import { Button } from "../UI Elements/Button";
import { FaImage, FaFilm, FaRegSmile } from "react-icons/fa";

export const TweetInput = ({ value, onChange, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="w-full px-4 relative border-b border-lighter pb-4"
  >
    <textarea
      value={value}
      onChange={onChange}
      placeholder="What's happening?"
      className="mt-3 pb-3 w-full focus:outline-none "
    />

    {/* Icons for Adding Media in Tweet */}
    <div className="flex items-center ">
      <i className="text-lg text-blue mr-4">
        <FaImage />
      </i>
      <i className="text-lg text-blue mr-4">
        <FaFilm />
      </i>
      <i className="text-lg text-blue mr-4">
        <FaRegSmile />
      </i>
    </div>

    {/* Tweet Button */}
    <Button
      type="submit"
      className="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-2 right-2 "
    >
      Tweet
    </Button>
  </form>
);

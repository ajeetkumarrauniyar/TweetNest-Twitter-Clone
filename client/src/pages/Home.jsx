import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../config/config.js";
// import Header from "../components/Header/Header.jsx";
// import Modal from "../components/Modal/Modal";
import TimelineTweet from "../components/Tweets/TimelineTweet.jsx";
import Modal from "../components/Modal/Modal.jsx";
// import { useLocation } from "react-router-dom";
// import formatDistance from "date-fns/formatDistance";
// import { useSelector } from "react-redux";

const Home = () => {
  return (
    <>
      <TimelineTweet />
    </>
  );
};

export default Home;

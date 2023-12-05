import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/ProfileDetails";
import Tweet from "../pages/TweetDetails";
import Navbar from "./LeftNavbar/Navbar";
import Error from "../pages/Error";

import { useSelector } from "react-redux";

const AppRouter = () => {
  const Layout = () => {
    const  currentUser  = useSelector((state) => state.user.currentUser.id);
    console.log(currentUser);

    return (
      <>
        {!currentUser ? (
          <Login />
        ) : (
          <div className="flex container h-screen w-full">
            <div className="lg:w-1/5 border-r border-lighter px-2 md:px-4 lg:px-6 py-2 flex flex-col justify-between">
              <Navbar />
            </div>
            <div className="w-full md:w-1/2 h-full overflow-y-scroll">
              <Outlet />
            </div>
            <div className="md:block hidden w-1/12 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
              {/* <h1>Right</h1> */}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="tweets" element={<Tweet />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

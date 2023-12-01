import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/ProfileDetails";
import Tweet from "../pages/Tweet/TweetDetails";
import Navbar from "./Navbar/Navbar";
import Error from "../pages/404/Error";

export default function Router() {
  const Layout = () => {
    return (
      <div className="flex container h-screen w-full">
        <div className="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
          <Navbar />
        </div>
        <div className="w-full md:w-1/2 h-full overflow-y-scroll">
          <Outlet />
        </div>
        <div className="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
          <h1>Right</h1>
        </div>
      </div>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/tweet" element={<Tweet />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}

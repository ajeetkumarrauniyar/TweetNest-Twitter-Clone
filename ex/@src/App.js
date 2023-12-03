import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProfileDetailsPage from "./pages/Profile/ProfileDetailsPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { SideNavigation } from "./components/SideNavigation";
import { SearchBar } from "./components/Widgets";

function App() {
  const MainLayout = () => {
    return (
      <div className="flex container h-screen w-full">
        <div className="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
          <SideNavigation />
        </div>
        <div className="w-full md:w-1/2 h-full overflow-y-scroll">
          <Outlet />
        </div>
        <div className="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
          <SearchBar />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfileDetailsPage />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProfileDetailsPage from "./pages/Profile/ProfileDetailsPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Sidebar from "./components/Common/Sidebar";

const MainLayout = () => {
  return (
    <div className="md:w-8/12 mx-auto">
      <Sidebar/>
      <Outlet></Outlet>
    </div>
  );
};

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile/:id",
        element: <ProfileDetailsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={mainRouter}></RouterProvider>
    </div>
  );
}

export default App;

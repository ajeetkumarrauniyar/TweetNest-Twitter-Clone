import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL, Authorization } from "../../config/config";
import EditProfile from "./EditProfile";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [profilePic, setProfilePic] = useState(
    "https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
  );
  const [userBeingViewed, setUserBeingViewed] = useState(null);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/user/${id}`,
          Authorization
        );
        const user = response.data;
        console.log(response.data);
        console.log(user);
        setUserBeingViewed(user);
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Failed to fetch user. Please try again.");
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleUploadClick = () => {
    document.getElementById("profilePicInput").click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePic", file);

      try {
        const uploadProfileImage = await axios.post(
          `${API_BASE_URL}/user/${currentUser.id}/uploadProfileImage`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: "Bearer " + localStorage.getItem("JWTToken"),
            },
          }
        );

        const newFileName = uploadProfileImage.data.fileName;
        console.log(newFileName);

        setProfilePic(
          `${API_BASE_URL}/user/${currentUser.id}/downloadProfileImage/${newFileName}`
        );

        if (uploadProfileImage.status === 200) {
          toast.success("Profile picture updated successfully");
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
        toast.error("Failed to update profile picture. Please try again.");
      }
    }
  };

  return (
    <div>
      <div
        className="w-full bg-cover bg-no-repeat bg-center"
        style={{
          height: "200px",
          backgroundImage:
            "url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)",
        }}
      >
        <img
          className="opacity-0 w-full h-full"
          src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
          alt=""
        />
      </div>
      <div className="p-4">
        <div className="relative flex w-full">
          <div className="flex flex-1">
            <div style={{ marginTop: "-6rem" }}>
              <div
                style={{ height: "9rem", width: "9rem" }}
                className="md rounded-full relative avatar"
              >
                <img
                  style={{ height: "9rem", width: "9rem" }}
                  className="md rounded-full relative border-4 border-gray-900"
                  src={profilePic}
                  alt=""
                />
                <div className="absolute"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-right space-y-4">
            <input
              type="file"
              id="profilePicInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              className="flex-none rounded-full bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              onClick={handleUploadClick}
            >
              Upload Profile Photo
            </button>
            <button
              className="flex-none rounded-full bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              onClick={() => setEditProfileOpen(true)}
            >
              Edit Profile
            </button>
            {/* Conditionally render the Follow button */}
            {!currentUser && (
              <button className="flex-none rounded-full bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Follow
              </button>
            )}

            {/* Render EditProfile as a modal */}
            {isEditProfileOpen && (
              <EditProfile
                isOpen={isEditProfileOpen}
                onClose={() => setEditProfileOpen(false)} // Close modal
              />
            )}
          </div>
        </div>

        <div className="space-y-4 justify-center w-full mt-3 ml-3">
          <div>
            <h2 className="text-xl leading-6 font-bold text-black">
              {currentUser.name}
            </h2>
            <p className="text-sm leading-5 font-medium text-gray-600 pb-4">
              @{currentUser.username}
            </p>
          </div>
          <div className="mt-3">
            <p className="text-gray-500 leading-tight mb-2">
              Software Engineer / Designer / Entrepreneur <br />
              Visit my website to test a working <b>Twitter Clone.</b>
            </p>
          </div>
          <div className="flex flex-wrap mt-3">
            <div className="flex items-center mr-4">
              <svg
                className="text-gray-500 w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2 0a2 2 0 012 2v16.5l4-4 4 4V2a2 2 0 012-2H2zm16 5.31V18a1 1 0 01-1 1H3a1 1 0 01-1-1V5.31l7 7 7-7zM7 10a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-500">Lisbon, Portugal</p>
            </div>
            <div className="flex items-center mr-4">
              <svg
                className="text-gray-500 w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM0 10a10 10 0 0120 0 10 10 0 01-20 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-500">Joined April 2009</p>
            </div>
            <div className="flex items-center">
              <svg
                className="text-gray-500 w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2 0a2 2 0 012 2v16.5l4-4 4 4V2a2 2 0 012-2H2zm16 5.31V18a1 1 0 01-1 1H3a1 1 0 01-1-1V5.31l7 7 7-7zM7 10a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex mt-5">
          <div className="mr-6">
            <p className="font-bold text-white">987</p>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
          <div className="mr-6">
            <p className="font-bold text-white">1,256</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="mr-6">
            <p className="font-bold text-white">584</p>
            <p className="text-gray-500 text-sm">Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

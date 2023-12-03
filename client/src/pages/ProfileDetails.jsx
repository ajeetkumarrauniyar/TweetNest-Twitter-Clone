// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCakeCandles,
//   faCalendarDays,
//   faLocationDot,
//   faHeart,
//   faRetweet,
//   faComment,
// } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { API_BASE_URL } from "../config/config";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import { useParams } from "react-router-dom";

// const Profile = () => {
//   const { UserId } = useParams();
//   const [image, setImage] = useState({ preview: " ", data: " " });
//   const [UserData, setUserData] = useState();
//   const [loading, setloading] = useState(true);
//   const [userTweet, setUserTweet] = useState([]);
//   const [followed, setFollowed] = useState(false);
//   const [btn, setbtn] = useState("follow");
//   const [Name, setName] = useState("");
//   const [date, setdate] = useState("");
//   const [Show, setShow] = useState(false);
//   const [Reply, setReply] = useState("");
//   const [Liked, setLiked] = useState(false);
//   const [Location, setLocation] = useState("");

//   const loggedInUser = JSON.parse(localStorage.getItem("user"));
//   const Dispatch = useDispatch();

//   const config = {
//     headers: {
//       "Content-type": "application/json",
//       authorization: "Bearer " + localStorage.getItem("token"),
//     },
//   };

//   const getUser = async () => {
//     try {
//       const data = await axios.get(`${API_BASE_URL}/user/${UserId}`);
//       if (data.status === 200) {
//         if (data.data.user.Followers.find((p) => p === loggedInUser._id)) {
//           setFollowed(true);
//           setbtn("Unfollow");
//         }
//         setloading(false);
//         setUserData(data.data);
//         setUserTweet(data.data.tweets);
//         setName(data.data.fullName);
//         setdate(data.data.dateOfBirth);
//       }
//     } catch (err) {
//       setloading(false);
//       // toast.error(err.response.data.msg || "Internal server Error");
//     }
//   };

//   const getUserTweets = async () => {
//     try {
//       const tweetData = await axios.get(
//         `${API_BASE_URL}/api/user/${UserId}/tweets`
//       );
//       if (tweetData.status === 200) {
//         // Update your state with the fetched tweets
//         setUserTweet(tweetData.data);
//       }
//     } catch (error) {
//       // Handle errors
//     }
//   };

//   const handleFollow = async () => {
//     try {
//       // Make a request to follow the user
//       await axios.put(`${API_BASE_URL}/api/user/${UserId}/follow`);
//       // Update your state to indicate the user is now followed
//       setFollowed(true);
//       setbtn("Unfollow");
//     } catch (error) {
//       // Handle errors
//     }
//   };

//   const handleUnfollow = async () => {
//     try {
//       // Make a request to unfollow the user
//       await axios.put(`${API_BASE_URL}/api/user/${UserId}/unfollow`);
//       // Update your state to indicate the user is now unfollowed
//       setFollowed(false);
//       setbtn("Follow");
//     } catch (error) {
//       // Handle errors
//     }
//   };


//   const EditData = async () => {
//     try {
//       const data = await axios.put(
//         `${API_BASE_URL}/Edit/User`,
//         {
//           Name: Name,
//           DOB: date,
//           Location: Location,
//         },
//         config
//       );
//       if (data.status === 201) {
//         Dispatch({ type: "LOGIN_SUCCESS", payload: data.data.user });
//         ProfileData();
//         // Add toast or any other notification for success
//         setName("");
//         setdate("");
//         setLocation("");
//       }
//     } catch (err) {
//       console.error(err);
//       // Handle errors, add toast or other error notification
//     }
//   };
  

//   const comment = (e) => {
//     e.preventDefault();
//     setShow(!Show);
//   };

//   const ReplyTweet = async (id, e) => {
//     try {
//       e.preventDefault();
//       const replied = await axios.post(
//         `${API_BASE_URL}/Reply/tweet/${id}`,
//         {
//           Content: Reply,
//         },
//         config
//       );
//       if (replied.status === 200) {
//         // toast.success("You Replied The Tweet");
//         ProfileData();
//         setShow(false);
//         setReply("");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const action = async (id) => {
//     try {
//       if (!Liked) {
//         const likedT = await axios.get(
//           `${API_BASE_URL}/Like/tweet/${id}`,
//           config
//         );
//         if (likedT.status === 200) {
//           // toast.info("You Liked The Tweet");
//           setLiked(true);
//         }
//       } else if (Liked) {
//         const DislikeT = await axios.get(
//           `${API_BASE_URL}/DisLike/tweet/${id}`,
//           config
//         );
//         if (DislikeT.status === 200) {
//           // toast.warn("You Dislike The Tweet");
//           // setLiked(false);
//         }
//       }
//       ProfileData();
//     } catch (err) {
//       console.log(err);
//       // toast.error(err.response.data.msg || "Internal server Error");
//     }
//   };

//   const uploadProfilePic = async () => {
//     try {
//       const response = await handleImageupload();
//       const data = await axios.put(
//         `${API_BASE_URL}/User/uploadPP`,
//         {
//           ProfilePic: `${API_BASE_URL}/files/${response.data.filename}`,
//         },
//         config
//       );
//       if (response.status === 200) {
//         Dispatch({ type: "LOGIN_SUCCESS", payload: data.data.tweets });
//         ProfileData();
//         setImage({ preview: "", data: "" });
//         // toast.info("Profile Picture Updated");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleFile = (event) => {
//     const img = {
//       preview: URL.createObjectURL(event.target.files[0]),
//       data: event.target.files[0],
//     };
//     setImage(img);
//   };

//   const handleImageupload = async () => {
//     try {
//       const formdata = new FormData();
//       formdata.append("file", image.data);
//       const response = await axios.post(`${API_BASE_URL}/upload`, formdata);
//       return response;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     ProfileData(UserId);
//   }, [UserId]);

//   return (
//     <div className="container mx-auto">
//       <div className="flex">
//         <div className="flex-1 shadow-lg">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className="flex flex-col bg-blue-200">
//               <div className="flex justify-between bg-light mt-10 bg-blue-500">
//                 <img
//                   className="profile-pic ms-md-2 h-80 w-80 rounded-full"
//                   src="#"
//                   alt="Profile"
//                 />
//                 {loggedInUser._id === UserId ? (
//                   <div className="flex">
//                     <button
//                       className="btn btn-outline-primary my-3 mx-1 ms-5 text-center h-50"
//                       data-bs-toggle="modal"
//                       data-bs-target="#DPModal"
//                     >
//                       Upload Profile Pic
//                     </button>
//                     <button
//                       className="btn btn-outline-danger my-3 mx-1 h-50"
//                       data-bs-toggle="modal"
//                       data-bs-target="#EditModal"
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="btn btn-dark my-3 h-50"
//                     onClick={() => clickBtn()}
//                   >
//                     {btn}
//                   </button>
//                 )}
//               </div>

//               <div className="bg-light">
//                 <p className="fw-bold mx-4">{UserData.Name}</p>
//                 <p className="text-muted mx-4" style={{ marginTop: "-20px" }}>
//                   {UserData.UserName}
//                 </p>
//                 <div className="flex flex-col">
//                   <div className="col-12">
//                     <FontAwesomeIcon className="me-1" icon={faCakeCandles} />{" "}
//                     DOB {new Date(UserData.DOB).getDate()}-
//                     {new Date(UserData.DOB).getMonth() + 1}-
//                     {new Date(UserData.DOB).getFullYear()}
//                     <FontAwesomeIcon
//                       className="ms-5"
//                       icon={faLocationDot}
//                     />{" "}
//                     Location {UserData.Location}
//                   </div>

//                   <div className="col-12">
//                     <FontAwesomeIcon className="me-2" icon={faCalendarDays} />
//                     Joined {new Date(UserData.createdAt).getDate()}-
//                     {new Date(UserData.createdAt).getMonth() + 1}-
//                     {new Date(UserData.createdAt).getFullYear()}
//                   </div>
//                 </div>
//                 <div className="flex my-3">
//                   <h6 className="fw-bold">
//                     {UserData.Following.length} Following{" "}
//                   </h6>
//                   <h6 className="fw-bold mx-3">
//                     {" "}
//                     {UserData.Followers.length} Followers{" "}
//                   </h6>
//                 </div>
//               </div>
//               <div className="bg-light">
//                 <h4 className="text-center titlefonts fw-bold border-b border-t pt-2 border-black pb-2">
//                   Tweets and Reply
//                 </h4>
//                 {userTweet.map((P) => {
//                   return (
//                     <div className="card w-75 mt-2 ms-5 mb-3">
//                       <div className="flex">
//                         <img
//                           className="profile-pic ms-md-2 mt-3"
//                           src={UserData.ProfilePic}
//                           alt="Profile"
//                         />
//                         <p className="card-text fw-bold mt-4 mx-2">
//                           {UserData.Name}
//                         </p>
//                         <p className="card-text text-muted mb-0 mt-4">
//                           - {new Date(P.createdAt).getDate()}-
//                           {new Date(P.createdAt).getMonth() + 1}-
//                           {new Date(P.createdAt).getFullYear()}{" "}
//                         </p>
//                       </div>
//                       <div className="card-body">
//                         <h6 className="card-title">{P.Content}</h6>
//                         {P.Image ? (
//                           <div className="photo-wrapper">
//                             <img
//                               src={P.Image}
//                               className="img-fluid"
//                               alt="Logo"
//                             />
//                           </div>
//                         ) : (
//                           ""
//                         )}
//                         <div className="mt-2">
//                           <FontAwesomeIcon
//                             className="mx-2 btn fs-3"
//                             onClick={(e) => action(P._id)}
//                             icon={faHeart}
//                             style={{ color: "#ec0909" }}
//                           />
//                           {P.Likes.length}
//                           <FontAwesomeIcon
//                             className="mx-2 btn fs-3"
//                             onClick={(e) => comment(e)}
//                             icon={faComment}
//                             style={{ color: "#a2b9e2" }}
//                           />
//                           <FontAwesomeIcon
//                             className="mx-2 btn fs-3"
//                             icon={faRetweet}
//                             style={{ color: "#19c836" }}
//                           />
//                           {Show ? (
//                             <form
//                               className="flex"
//                               onSubmit={(e) => ReplyTweet(P._id, e)}
//                             >
//                               <input
//                                 className="form-control w-1/2"
//                                 type="text"
//                                 onChange={(e) => setReply(e.target.value)}
//                                 placeholder="Reply your tweet"
//                               />
//                               <input
//                                 className="btn btn-tweet ml-2"
//                                 type="submit"
//                               />
//                             </form>
//                           ) : (
//                             ""
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div>
//         <div
//           className="modal fade"
//           id="DPModal"
//           tabIndex="-1"
//           aria-labelledby="twitterModelLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1
//                   className="modal-title fs-5 titlefonts fw-bold"
//                   id="twitterModelLabel"
//                 >
//                   Upload your profile picture
//                 </h1>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <input type="file" onChange={(e) => handleFile(e)} />
//                 {image.preview ? (
//                   <img className="img-fluid mt-2" src={image.preview} />
//                 ) : (
//                   " "
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   onClick={(e) => uploadProfilePic()}
//                   data-bs-dismiss="modal"
//                   className="btn btn-primary"
//                 >
//                   Upload
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="modal fade"
//           id="EditModal"
//           tabIndex="-1"
//           aria-labelledby="twitterModelLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1
//                   className="modal-title fs-5 titlefonts fw-bold"
//                   id="twitterModelLabel"
//                 >
//                   Update profile
//                 </h1>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <input
//                   type="text"
//                   className="form-control mb-2"
//                   value={Name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Name"
//                 />
//                 <input
//                   type="date"
//                   className="form-control mb-2"
//                   value={date}
//                   onChange={(e) => setdate(e.target.value)}
//                   placeholder="Date Of Birth"
//                 />
//                 <input
//                   type="text"
//                   className="form-control mb-2"
//                   value={Location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   placeholder="Location"
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   onClick={(e) => EditData(e)}
//                   data-bs-dismiss="modal"
//                   className="btn btn-primary"
//                 >
//                   Upload
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Profile;

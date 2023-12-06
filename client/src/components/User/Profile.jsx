import React from "react";

const Profile = () => {
  return (
    // <div className="flex justify-center">
    <main role="main">
      <div className="flex" style={{ width: "990px" }}>
        <section
          className="w-3/5 border border-y-0 border-gray-800"
          style={{ maxWidth: "600px" }}
        >
          {/* User card */}
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
                {/* Avatar */}
                <div className="flex flex-1">
                  <div style={{ marginTop: "-6rem" }}>
                    <div
                      style={{ height: "9rem", width: "9rem" }}
                      className="md rounded-full relative avatar"
                    >
                      <img
                        style={{ height: "9rem", width: "9rem" }}
                        className="md rounded-full relative border-4 border-gray-900"
                        src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                        alt=""
                      />
                      <div className="absolute"></div>
                    </div>
                  </div>
                </div>
                {/* Follow Button */}
                <div className="flex flex-col text-right">
                  <button className="justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Profile info */}
              <div className="space-y-1 justify-center w-full mt-3 ml-3">
                {/* User basic */}
                <div>
                  <h2 className="text-xl leading-6 font-bold text-white">
                    ℜ??????ℜ??????.dev
                  </h2>
                  <p className="text-sm leading-5 font-medium text-gray-600">
                    @Ricardo_oRibeir
                  </p>
                </div>
                {/* Description and others */}
                <div className="mt-3">
                  <p className="text-white leading-tight mb-2">
                    Software Engineer / Designer / Entrepreneur <br />
                    Visit my website to test a working <b>
                      Twitter Clone.
                    </b>{" "}
                    <a className="text-blue-400" href="https://t.co/Tk9xkZ3hfp">
                      [ℜ??????ℜ???????.dev]
                    </a>
                  </p>
                </div>
                {/* Location, Joined date, and Link */}
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
                    <a className="text-blue-400" href="https://t.co/Tk9xkZ3hfp">
                      ℜ??????ℜ???????.dev
                    </a>
                  </div>
                </div>
              </div>
              {/* Stats */}
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
        </section>
      </div>
    </main>
    // </div>
  );
};

export default Profile;

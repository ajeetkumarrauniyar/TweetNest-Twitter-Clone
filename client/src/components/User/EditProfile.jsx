import React, { useState } from "react";

const EditProfile = ({ isOpen, onClose }) => {
  // State for managing input values
  const [fullname, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  // Function to update the profile
  const updateProfile = () => {
    // Add logic to update the profile with the entered data
  };

  return (
    <div
      className={`fixed inset-0 modal ${
        isOpen ? "block" : "hidden"
      } overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen text-center sm:items-center sm:p-0">
        {/* Update Profile Modal Component */}
        <div>
          <button
            type="button"
            onClick={() => {}}
            className="text-blue-500 hover:underline"
          ></button>
          <div className="flex items-center justify-center min-h-screen text-center sm:items-center sm:p-0">
            <div className="p-4 rounded-lg w-80 relative transform overflow-hidden text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {/* Modal header */}
              <h2 className="font-semibold text-xl leading-7 text-gray-900">
                Profile
              </h2>
              {/* Modal Body */}
              <form action="#" method="POST" className="mx-auto max-w-xl mt-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        autoComplete="fullname"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Date Of Birth
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        autoComplete="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="location"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="description"
                        id="description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* Modal Footer */}
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {/* Update Button */}
                  <button
                    type="button"
                    onClick={() => {
                      updateProfile();
                      onClose(); // Close the modal after updating
                    }}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Update Profile
                  </button>

                  {/* Cancel Button */}
                  <button
                    type="button"
                    onClick={onClose} // Close the modal without updating
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

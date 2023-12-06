import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user slice
const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

// Create a user slice using createSlice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer for handling login start
    loginStart: (state) => {
      state.isLoading = true;
    },
    // Reducer for handling successful login
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      // console.log("User details after login:", action.payload);
    },
    // Reducer for handling login failure
    loginFailed: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    // Reducer for handling logout
    logout: (state) => {
      return initialState;
    },
    // Reducer for changing user profile picture
    changeProfile: (state, action) => {
      state.currentUser.profilePicture = action.payload;
    },
    // Reducer for handling following/unfollowing
    following: (state, action) => {
      if (state.currentUser.following.includes(action.payload)) {
        state.currentUser.following.splice(
          state.currentUser.following.findIndex(
            (followingId) => followingId === action.payload
          )
        );
      } else {
        state.currentUser.following.push(action.payload);
      }
    },
  },
});

// Export individual action creators
export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
  changeProfile,
  following,
} = userSlice.actions;

// Export the reducer for the user slice
export default userSlice.reducer;

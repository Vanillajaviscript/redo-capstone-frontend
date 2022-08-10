import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
// import DogReducer from "./features/tourSlice";
// import ProfileReducer from "./features/profileSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    // dog: DogReducer,
    // profile: ProfileReducer,
  },
});
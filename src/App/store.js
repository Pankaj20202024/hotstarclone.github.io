import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../Features/user/userSlice";
import movieReducer from "../Features/movies/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

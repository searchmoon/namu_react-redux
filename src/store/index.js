import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slices";

export default configureStore({
  reducer: {
    order: orderReducer,
  },
});

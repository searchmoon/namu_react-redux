import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slices/orderSlice";
import errorReducer from "../slices/errorSlice"

export default configureStore({
  reducer: {
    order: orderReducer,
    error: errorReducer,
  },
});

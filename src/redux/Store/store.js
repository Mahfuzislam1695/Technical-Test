import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../Reducer/DataSlice";

const store = configureStore({
  reducer: {
    Data: DataReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "Data",
  initialState: {
    val: 0,
  },
  reducers: {
    studyValue: (state, action) => {
      state.val = action.payload;
    },
  },
});

export const { studyValue } = DataSlice.actions;

export default DataSlice.reducer;

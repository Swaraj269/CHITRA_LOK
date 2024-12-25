import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadTv: (state, action) => {
      state.value = action.payload;
    },
    removeTv: (state, action) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadTv, removeTv } = tvSlice.actions;

export default tvSlice.reducer;

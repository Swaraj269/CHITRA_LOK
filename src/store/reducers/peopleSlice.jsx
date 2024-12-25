import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadPeople: (state, action) => {
      state.value = action.payload;
    },
    removePeople: (state, action) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadPeople, removePeople } = peopleSlice.actions;

export default peopleSlice.reducer;

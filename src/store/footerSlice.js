import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    hideFooter: (state) => {
      state.value = false;
    },
    showFooter: (state) => {
      state.value = true;
    },
  },
});

export const { hideFooter, showFooter } = footerSlice.actions;

export default footerSlice.reducer;

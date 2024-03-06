import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  initValue: "",
  diameter: "",
  breadth: "",
  length: "",
  period:"",
};

const formstoreSlice = createSlice({
  name: "formStore",
  initialState,
  reducers: {
    updateInit: (state, action) => {
      const { diameter, InitValue ,length,  breadth, period} = action.payload;
      console.log(diameter, InitValue , breadth, period, length);
      state.initValue = InitValue;
      state.diameter = diameter;
      state.breadth = breadth;
      state.length = length;
      state.period = period;

    },
  },
});

export const { updateInit } = formstoreSlice.actions;
export default formstoreSlice.reducer;

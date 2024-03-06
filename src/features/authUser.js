import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  user: "",
  error: null,
  isActive: false,
  jwt:false
};

// const url = "https://fakestoreapi.com/auth/login";
// export const login = createAsyncThunk(
//   `user/login`,
//   async ({ username, password }) => {
//     try {
//       // console.log(name);
//       // console.log(thunkAPI);
//       // console.log(thunkAPI.getState());
//       // thunkAPI.dispatch(openModal());
//       const resp = await axios.post(url, { username, password });

//       return resp.data;
//     } catch (error) {
//       //return thunkAPI.rejectWithValue("something went wrong");
//     }
//   }
// );

const authuserSlice = createSlice(
  {
    name: "user",
    initialState,
    reducers: {
      // loginUser: ({ payload }) => {
      //   login(payload);
      // },
      updateUser: (state, action) => {
        const { username } = action.payload;
        state.user = username;
        state.error = null;
        state.isActive = true;
        state.jwt = true;
      },
      logoutUser: (state) => {
        state.user = "";
        state.error = null;
        state.isActive = false;
      },
    },
  }
  // extraReducers: {
  //   [login.pending]: (state) => {
  //     state.error = null;
  //   },
  //   [login.fulfilled]: (state, action) => {
  //     // console.log(data);
  //     state.error = null;
  //     state.isActive = true;
  //     const user = action.payload;
  //     console.log(user);
  //   },
  //   [login.rejected]: (state, action) => {
  //     state.error = action.error;
  //   },
  // },
  // }
);

export const { updateUser, logoutUser } = authuserSlice.actions;
export default authuserSlice.reducer;

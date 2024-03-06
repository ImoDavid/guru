import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/authUser';
import formStoreReducer from './features/formStore';

export const store = configureStore({
  reducer: {
    user: userReducer,
    formStore:formStoreReducer,
  },
});

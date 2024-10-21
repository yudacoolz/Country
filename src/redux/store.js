import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./slice/countrySlice";

export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});

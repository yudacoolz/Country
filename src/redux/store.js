import { configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./slice/CountrySlice";

export const store = configureStore({
  reducer: {
    country: CountrySlice,
  },
});

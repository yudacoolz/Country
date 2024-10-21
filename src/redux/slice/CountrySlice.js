import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countrys: localStorage.getItem("contribute")
    ? JSON.parse(localStorage.getItem("contribute"))
    : [],
};

const CountrySlice = createSlice({
  name: "CountrySlice",
  initialState,
  reducers: {
    AddCountry: (state, action) => {
      console.log("payloadnya", action.payload);
      const random = Math.floor(Math.random() * 100);
      const hasilBagi = random % 2;
      let result;

      if (hasilBagi) {
        result = true;
      } else {
        result = false;
      }

      if (result) {
        const CountryExist = state.countrys.find(
          (country) => country === action.payload
        );

        if (!CountryExist) {
          state.countrys.push(action.payload);
          localStorage.setItem("contribute", JSON.stringify(state.countrys));
        }
      } else {
        console.log("Country not added due to 50% chance logic.");
      }
    },
    DeleteCountry: (state, action) => {
      state.countrys = state.countrys.filter(
        (country) => country !== action.payload
      );
      localStorage.setItem("contribute", JSON.stringify(state.countrys));
    },
  },
});

export const { AddCountry, DeleteCountry } = CountrySlice.actions;
export default CountrySlice.reducer;

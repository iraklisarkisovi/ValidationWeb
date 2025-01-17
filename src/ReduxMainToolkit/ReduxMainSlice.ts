import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RegisterInput: {
    Location: {
      LatLanUser: {},
    },
  },
};

const MainReducer = createSlice({
  name: "MainR",
  initialState,
  reducers: {
    HandleInput: (state, action) => {
      state.RegisterInput = action.payload; 
    },

    LatLanInput: (state, action) => {
      state.RegisterInput.Location.LatLanUser = action.payload;  
    },
  },
});

export const { HandleInput, LatLanInput } = MainReducer.actions;
export const MainRed = MainReducer.reducer;

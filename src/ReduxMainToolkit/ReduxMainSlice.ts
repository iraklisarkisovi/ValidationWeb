import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  RegisterInput: {
    LatLanUser: {},
    RegisteredUser: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      role: "",
      profileImage: "",
      pid: "",
      phonenumber: ""
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
      state.RegisterInput.LatLanUser = action.payload;
    },

    RegUserEventtarget: (state, action) => {
      state.RegisterInput.RegisteredUser = {
        ...state.RegisterInput.RegisteredUser,  
        ...action.payload, 
      };
    },

    clearRegisterInput: (state) => {
      state.RegisterInput.RegisteredUser = {
        firstname: "",
        lastname: "",
        pid: "",
        email: "",
        password: "",
        role: "user",
        profileImage: "",
        phonenumber: "",
      };
    },
  },
});


export const { HandleInput, LatLanInput, RegUserEventtarget, clearRegisterInput } =
  MainReducer.actions;
export const MainRed = MainReducer.reducer;

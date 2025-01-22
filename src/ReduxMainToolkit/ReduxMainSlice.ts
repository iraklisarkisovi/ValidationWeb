import { PayloadAction, createSlice } from "@reduxjs/toolkit";
 
export interface WorkingDay {
  day: string;
  startHour: string;
  endHour: string;
}

const initialState = {
  RegisterInput: {
    LatLanUser: {},
    CourierWorkingdays: [] as WorkingDay[],
    RegisteredUser: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      role: "",
      profileImage: "",
      pid: "",
      phonenumber: "",
      vehicletype: "",
    },
    
  },
  ThemeChanger: false
};

const MainReducer = createSlice({
  name: "MainR",
  initialState,
  reducers: {
    ThemeChange: state => {
      if(state.ThemeChanger){
        state.ThemeChanger = false
      }else{
        state.ThemeChanger = true;
      }
    },

    HandleInput: (state, action) => {
      state.RegisterInput = action.payload;
    },

    LatLanInput: (state, action) => {
      state.RegisterInput.LatLanUser = action.payload;
    },
    
    WorkingDays: (state, action: PayloadAction<WorkingDay[]>) => {
      state.RegisterInput.CourierWorkingdays = action.payload;  
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
        vehicletype: "",
      };
    },
  },
});


export const {
  ThemeChange,
  WorkingDays,
  HandleInput,
  LatLanInput,
  RegUserEventtarget,
  clearRegisterInput,
} = MainReducer.actions;
export const MainRed = MainReducer.reducer;

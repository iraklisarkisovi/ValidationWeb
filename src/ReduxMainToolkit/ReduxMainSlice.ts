import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RegisterInput: [],
};


const MainReducer = createSlice({
    name: 'MainR',
    initialState,
    reducers: {
        HandleInput: (state, action) => {
            state = action.payload
        }
    }
})

export const  { HandleInput } = MainReducer.actions;
export const MainRed = MainReducer.reducer
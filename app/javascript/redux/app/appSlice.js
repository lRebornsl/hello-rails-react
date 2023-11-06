import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const GET_GREETINGS = "appStore/greetings/GET_GREETINGS"
const URL = ""

export const getGreetings = createAsyncThunk(GET_GREETINGS, () => {
  return axios.get(URL)
    .then(response => response.data)
});

const initialState = {
  greetings: []
};

const appSlice = createReducer(initialState, builder => {
  builder
    .addCase(getGreetings.fulfilled, (state, { payload }) => {
      return{
        ...state,
        places: [...payload],
      }
    })
})

export default appSlice;
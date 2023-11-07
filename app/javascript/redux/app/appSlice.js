import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const GET_GREETINGS = "appStore/greetings/GET_GREETINGS"
const URL = "/random_greeting"

export const getGreetings = createAsyncThunk(GET_GREETINGS, () => {
  return axios.get(URL)
    .then(response => response.data)
});

const initialState = {
  greetings: null,
};

const appSlice = createReducer(initialState, builder => {
  builder
    .addCase(getGreetings.fulfilled, (state, { payload }) => {
      return{
        ...state,
        greetings: payload,
      }
    })
})

export default appSlice;
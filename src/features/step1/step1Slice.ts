import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface valueStep1State {
  appName: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  companyName: string;
  category: string[];
  industry: string[];
  market: string[];
  lineOfBusiness: String[];
  developerName: String;
  developerEmail: string;
  privacyUrl: string;
  termsUrl: string;
  supportUrl: string;
  DocumentationUrl: string;
}

const initialState: valueStep1State = {
  appName: "",
  shortDesc: "",
  longDesc: "",
  image: "",
  companyName: "",
  category: [],
  industry: [],
  market: [],
  lineOfBusiness: [],
  developerName: "",
  developerEmail: "",
  privacyUrl: "",
  termsUrl: "",
  supportUrl: "",
  DocumentationUrl: "",
};

export const step1Slice = createSlice({
  name: "step1",
  initialState,
  reducers: {
    addInformation: (state, action) => {
      state = action.payload;
    },
  },
});

export const { addInformation } = step1Slice.actions;
export const selectCount = (state: RootState) => state.step1;

export default step1Slice.reducer;

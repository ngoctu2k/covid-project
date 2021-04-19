import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import covidApi from "../api/covidApi";
export const getAllAsyncThunk = createAsyncThunk(
    "photo/search",
    async (params) => {
      const respon = await covidApi.getAll();
      return respon;
    }
  );

const covidSlice = createSlice({
    name: 'covid',
    initialState: {
        listCountry:[],
        key:"",
        isShowDetailCountry:false,
        loading:true
    },
    reducers: {
        searchCountry(state, action) {
            state.key = action.payload
        },
        removePost(state, action) {
        state.splice(action.payload, 1)
        }
    },
    extraReducers: {
        [getAllAsyncThunk.pending]: (state, action) => {
            state.loading = true
          },
        [getAllAsyncThunk.fulfilled]: (state, action) => {
          console.log("get all");
          console.log(action.payload);
         let ListCountry = action.payload
        
         console.log(ListCountry);
         state.listCountry =ListCountry
         state.loading = false
        },
    }
    });
    
    const { actions, reducer } = covidSlice;
    export const { searchCountry, removePost } = actions;
    export default reducer;
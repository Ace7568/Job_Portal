import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState ={
    jobs:[],
    isLoading:false
}

export const getAllJobs = createAsyncThunk("job/getAll",async(params, thunkAPI)=>{
    return axios.get(`${API_URL}jobs/getAll`)
})


export const createjob = createAsyncThunk("jobs/create",async(params, thunkAPI)=>{
    return axios.post(`${API_URL}jobs/create`,params)
})


export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        reset: ()=> initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllJobs.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getAllJobs.rejected, (state)=> {
            state.isLoading = false;
            console.log("failed");
        })
        .addCase(getAllJobs.fulfilled, (state, {payload})=>{
            state.jobs = payload?.data?.jobs;
            state.isLoading = false;
            // console.log(state.jobs);
        })
    }
});
export const {reset}  = jobSlice.actions;    
export default jobSlice.reducer;
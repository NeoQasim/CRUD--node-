import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalServiceFunctions from "./goalService";

const initialState = {
    goals: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}

export const addGoals = createAsyncThunk("goals/add", async (goal, thunkApi) => {
    try {
        let token = thunkApi.getState().auth.user.token
        return goalServiceFunctions.addGoals(goal, token)
    } catch (error) {
        const message = (error.message.data.message && error.response.data && error.response) || error.message || error.toString()


    }
})

export const goalSlice = createSlice({
    name: "goals",
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(addGoals.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addGoals.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addGoals.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.goals = action.payload
                // state.message = action.payload
            })
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isLoading = false
                // state.isError = false
                state.isSuccess = true
                state.goals.push(action.payload)
                // state.message = action.payload
            })
    }
})

export const getGoals = createAsyncThunk("goals/get", async (_, thunkApi) => {
    try {
        let token = thunkApi.getState().auth.user.token
        return goalServiceFunctions.getGoals(token)
    } catch (error) {
        const message = (error.message.data.message && error.response.data && error.response) || error.message || error.toString()

    }
})



export const { reset } = goalSlice.actions
export default goalSlice.reducer
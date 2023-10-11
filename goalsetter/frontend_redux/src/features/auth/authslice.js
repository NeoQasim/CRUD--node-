import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServiceFunctions from "./authService";
// import authServiceFunctions from "./authService.js";


const user = JSON.parse(localStorage.getItem("user"));
// Create an initial state function to get user from localStorage
// const getInitialUser = () => {
//     const user = localStorage.getItem("user");
//     return user ? JSON.parse(user) : null; // Parse the JSON string to an object
// };



const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}

export const registerUser = createAsyncThunk("auth/register", async (userdata, thunkApi) => {
    try {
        return authServiceFunctions.registerUser(userdata);
    } catch (error) {
        const message = (error.message.data.message && error.response.data && error.response) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})


export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
        return authServiceFunctions.logout

    } catch (error) {
        const message = (error.message.data.message && error.response.data && error.response) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)``
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    // clearUser: (state) => {
    //     state.user = null;
    // },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = null;
                state.message = action.payload;
            }
            )
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isError = false;
                state.isLoading = false;
                // state.isSuccess = true;
            }
            )
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = false
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.user = null
                // state.isSuccess=true
            })

    },
})



export const { reset } = authSlice.actions
export default authSlice.reducer
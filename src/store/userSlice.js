import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,

    },

    reducers:{
        loginUser: (state,action) =>{
            state.user = action.payload;   
        },
        logOutUser: (state,action) =>{
            state.user = null;   
        },
    },
})

export const {loginUser, logOutUser } = userSlice.actions;

export const userSelector = (state) => state.user.user;

export default userSlice.reducer;
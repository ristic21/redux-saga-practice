import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email:'falseMail@mail.com',
        username:'fakeName'
    },
    reducers: {
        email: (state, action) => {
            state.email = action.payload;
        },
        username: (state, action) => {
             state.username = action.payload;
        },
    },
});

export const { email, username } = userSlice.actions;

export default userSlice.reducer;
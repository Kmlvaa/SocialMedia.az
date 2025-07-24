// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    userRole: '',
    profileCompleted: false,
    isAuthenticated: false,
    emailConfirmed: false,
    bio: '',
    profession: '',
    imageUrl: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            Object.assign(state, action.payload);
            state.isAuthenticated = true;
        },
        updateProfileInfo(state, action) {
            const { bio, profession, imageUrl } = action.payload;
            state.bio = bio;
            state.profession = profession;
            state.imageUrl = imageUrl;
            state.profileCompleted = true;
        },
        clearUser(state) {
            return initialState;
        },
        setProfileCompleted(state, action) {
            state.profileCompleted = action.payload;
        },
        setEmailConfirmed(state, action) {
            state.emailConfirmed = action.payload;
        },
    },
});

export const { setUser, clearUser, setProfileCompleted, updateProfileInfo, setEmailConfirmed } = userSlice.actions;
export default userSlice.reducer;

// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    userRole: '',
    accessToken: '',
    refreshToken: '',
    profileCompleted: false,
    isAuthenticated: false,
    bio: '',
    profession: '',
    imageUrl: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            const user = action.payload;
            state.id = user.id;
            state.firstName = user.firstName;
            state.lastName = user.lastName;
            state.email = user.email;
            state.userRole = user.userRole;
            state.accessToken = user.accessToken;
            state.refreshToken = user.refreshToken;
            state.profileCompleted = user.profileCompleted;
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
    },
});

export const { setUser, clearUser, setProfileCompleted, updateProfileInfo } = userSlice.actions;
export default userSlice.reducer;

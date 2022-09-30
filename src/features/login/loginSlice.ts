import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../data/providers/authentication/fbase";
import { RootState } from "../../store";

interface IAuthenticationState {
    currentUser: IUser | null
}

const initialState: IAuthenticationState = {
    currentUser: null
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUser | null>) => {
            state.currentUser = action.payload
        }
    }
})

export const { setCurrentUser } = authenticationSlice.actions

export const selectIsLogin = (state: RootState) => state.authentication.currentUser && true

export default authenticationSlice.reducer
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, UserSchema} from "../types/UserSchema";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";


const initialState : UserSchema = {

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        getAuthData : (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData : (state) => {
            state.authData = JSON.parse(<string>localStorage.getItem(USER_LOCALSTORAGE_KEY));
        },
        logout : (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    }
})

export const {actions : userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
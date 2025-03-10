import {AuthByUserNameSchema} from "../types/AuthByUserNameSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginByUsername} from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";

const initialState:AuthByUserNameSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
}

export const AuthByUserNameSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setUserName:(state, action: PayloadAction<string>)=>{
            state.username = action.payload
        },
        setPassword:(state, action: PayloadAction<string>)=>{
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
                state.error = ''
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload;
            })
    }
})

export const {reducer:loginReducer} = AuthByUserNameSlice;
export const {actions:loginActions} = AuthByUserNameSlice;
import {createSlice} from "@reduxjs/toolkit";
import {ProfileSchema} from "entities/Profile/model/types/ProfileSchema";


const initialState : ProfileSchema = {
    data: undefined,
    isLoading:false,
    error:''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
    }
})

export const {actions : profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileSchema} from "../types/ProfileSchema";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";


const initialState : ProfileSchema = {
    data: undefined,
    isLoading:false,
    error:''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload
                state.error = ''
            })
            .addCase(fetchProfileData.rejected, (state, action:PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload || '';
            })
    }
})

export const {actions : profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
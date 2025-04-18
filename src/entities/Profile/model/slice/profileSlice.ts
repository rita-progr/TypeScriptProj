import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileSchema} from "../types/ProfileSchema";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";
import {updateProfileData} from "entities/Profile/model/services/updateProfileData/updateProfileData";


const initialState : ProfileSchema = {
    data: undefined,
    isLoading:false,
    form: undefined,
    error:''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
        setReadonly:(state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },

        cancelEdit:(state) => {
            state.readonly = true;
            state.form = state.data;
        },

        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload
                state.form = action.payload
                state.error = ''
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || ' ';
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload
                state.form = action.payload
                state.error = ''
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || ' ';
            })
    }
})

export const {actions : profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
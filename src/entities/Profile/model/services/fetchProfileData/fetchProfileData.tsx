import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Profile} from "../../types/ProfileSchema";

export const fetchProfileData = createAsyncThunk<Profile, string , ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get(`/profile/${profileId}`);
            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

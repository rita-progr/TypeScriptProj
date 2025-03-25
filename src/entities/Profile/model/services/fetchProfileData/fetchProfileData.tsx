import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Profile} from "../../types/ProfileSchema";

export const fetchProfileData = createAsyncThunk<Profile, void , ThunkConfig>(
    'profile/fetchProfileData',
    async (_, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get('/profile');
            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

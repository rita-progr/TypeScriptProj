import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Profile} from "../../types/ProfileSchema";
import {getProfileForm} from "entities/Profile";

export const updateProfileData = createAsyncThunk<
    Profile,
    void ,
    ThunkConfig
>(
    'profile/updateProfileData',
    async (_, {extra, rejectWithValue, getState}) => {

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

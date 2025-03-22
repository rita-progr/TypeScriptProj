import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArgs} from "app/providers/StoreProveder";
import {Profile} from "../../types/ProfileSchema";

export const fetchProfileData = createAsyncThunk<Profile, void , {rejectValue : string, extra: ThunkExtraArgs}>(
    'profile/fetchProfileData',
    async (_, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get('/profile');
            if(!response.data){
                throw new Error();
            }

            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

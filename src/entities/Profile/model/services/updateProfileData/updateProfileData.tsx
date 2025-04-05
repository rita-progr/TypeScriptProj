import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Profile, validateProfileErrors} from "../../types/ProfileSchema";
import {getProfileForm} from "entities/Profile";
import {validateData} from "entities/Profile/model/services/validateData/validateData";

export const updateProfileData = createAsyncThunk<
    Profile,
    void ,
    ThunkConfig<validateProfileErrors[]>
>(
    'profile/updateProfileData',
    async (_, {extra, rejectWithValue, getState}) => {

        const formData = getProfileForm(getState());
        const errors = validateData(formData);

        if(errors.length){
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
            return response.data

        }catch(err){
            console.log(err);

            return rejectWithValue([validateProfileErrors.SERVER_DATA])
        }

    },
)

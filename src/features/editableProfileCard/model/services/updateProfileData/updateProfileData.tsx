import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProveder";
import {Profile} from "@/entities/Profile";
import {validateProfileErrors} from "../../types/editableProfileCardSchema";
import {getProfileForm} from "../../selectors/getProfileForm/getProfileForm";
import {validateData} from "../validateData/validateData";

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

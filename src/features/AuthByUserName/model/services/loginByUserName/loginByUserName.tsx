import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "entities/User";

interface LoginByUserNameProps{
    username:string;
    password:string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUserNameProps, {rejectValue : string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if(!response.data){
                throw new Error();
            }
            return response.data

        }catch(err){
            console.log(err);
            thunkAPI.rejectWithValue('Произошла ошибка... ')
        }

    },
)

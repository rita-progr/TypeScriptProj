import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser, userActions} from "entities/User";
import i18n from "shared/config/i18n/i18n";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface LoginByUserNameProps{
    name:string;
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
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.getAuthData(response.data));

            return response.data

        }catch(err){
            console.log(err);
            return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль '))
        }

    },
)

import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import {ThunkConfig} from "app/providers/StoreProveder";

interface LoginByUserNameProps{
    username:string;
    password:string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, {dispatch, extra, rejectWithValue}) => {
        try {

            const response = await extra.api.post('/login', authData);

            if(!response.data){
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.getAuthData(response.data));


            if (extra.navigate) {
                extra.navigate('/about');
            }

            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('Вы ввели неверный логин или пароль ')
        }

    },
)

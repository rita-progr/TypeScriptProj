import {userActions, userReducer} from "./model/slice/userSlice";
import type {IUser , UserSchema} from "./model/types/UserSchema";
import {getUserAuthData} from "./model/selectors/getUserAuthData/getUserAuthData";
import {getUserInited} from "./model/selectors/getUserInited/getUserInited";
export {
    userActions,
    userReducer,
    IUser,
    UserSchema,
    getUserAuthData,
    getUserInited
}
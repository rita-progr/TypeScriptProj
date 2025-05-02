import {userActions, userReducer} from "./model/slice/userSlice";
export type {IUser, UserSchema} from "./model/types/UserSchema";
import {getUserAuthData} from "./model/selectors/getUserAuthData/getUserAuthData";
import {getUserInited} from "./model/selectors/getUserInited/getUserInited";
import {userRolesSelector, isAdmin, isManager} from "./model/selectors/roleSelectors";
import {RolesType} from "./model/types/UserSchema";

export {
    userActions,
    userReducer,
    getUserAuthData,
    getUserInited,
    userRolesSelector,
    isAdmin,
    isManager,
    RolesType
}
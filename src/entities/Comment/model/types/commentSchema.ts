import {IUser} from "entities/User";

export interface Comment{
    id:string | number;
    text:string;
    user: IUser
}

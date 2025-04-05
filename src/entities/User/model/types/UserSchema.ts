export interface IUser {
    id: number,
    username: string,
    avatar?: string,
}

export interface UserSchema{
    authData?: IUser;
    _inited?:boolean;
}
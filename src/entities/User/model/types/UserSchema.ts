export interface IUser {
    id: number,
    username: string,
}

export interface UserSchema{
    authData?: IUser;
    _inited?:boolean;
}
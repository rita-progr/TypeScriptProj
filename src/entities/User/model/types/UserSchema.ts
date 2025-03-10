export interface IUser {
    id: number,
    name: string,
}

export interface UserSchema{
    authData?: IUser;
}
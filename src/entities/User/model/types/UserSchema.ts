export enum RolesType{
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface IUser {
    id: number|string,
    username: string,
    avatar?: string,
    roles?:RolesType[]
}

export interface UserSchema{
    authData?: IUser;
    _inited?:boolean;
}
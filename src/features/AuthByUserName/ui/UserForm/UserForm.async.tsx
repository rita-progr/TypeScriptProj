import {FC, lazy} from 'react';
import {UserFormProps} from "./UserForm";
export const UserFormAsync = lazy<FC<UserFormProps>>(() => import('./UserForm'));
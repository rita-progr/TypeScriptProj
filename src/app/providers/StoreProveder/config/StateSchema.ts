import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {AuthByUserNameSchema} from "features/AuthByUserName";

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    login: AuthByUserNameSchema
}
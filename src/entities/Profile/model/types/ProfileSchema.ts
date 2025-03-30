
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";

export enum validateProfileErrors {
    INCORRECT_USERDATA = "INCORRECT_USERDATA",
    INCORRECT_AGE = "INCORRECT_AGE",
    NO_DATA = "NO_DATA",
    SERVER_DATA = "SERVER_DATA"
}

export interface Profile {
    first?:string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile| undefined;
    form?: Profile| undefined;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: validateProfileErrors[];
}
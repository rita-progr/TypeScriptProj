import {Profile} from "@/entities/Profile";

export enum validateProfileErrors {
    INCORRECT_USERDATA = "INCORRECT_USERDATA",
    INCORRECT_AGE = "INCORRECT_AGE",
    NO_DATA = "NO_DATA",
    SERVER_DATA = "SERVER_DATA"
}
export interface ProfileSchema {
    data?: Profile| undefined;
    form?: Profile| undefined;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: validateProfileErrors[];
}
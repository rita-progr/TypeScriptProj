import {StateSchema} from "app/providers/StoreProveder";

export const getProfileValidateError = (state: StateSchema) => state?.profile?.validateErrors || [];
import {StateSchema} from "app/providers/StoreProveder";

export const getError = (state:StateSchema)=> state?.login?.error || '';

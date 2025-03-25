import {StateSchema} from "app/providers/StoreProveder";

export const getUsername = (state:StateSchema)=> state?.login?.username || '';

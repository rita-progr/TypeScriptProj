import {StateSchema} from "app/providers/StoreProveder";

export const getPassword = (state:StateSchema)=> state?.login?.password || '';

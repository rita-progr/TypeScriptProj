import {StateSchema} from "app/providers/StoreProveder";

export const getLoading = (state:StateSchema)=> state?.login?.isLoading || false;

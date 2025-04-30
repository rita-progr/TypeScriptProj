import {StateSchema} from "app/providers/StoreProveder";

export const getReadOnly = (state: StateSchema) => state?.profile?.readonly || '';
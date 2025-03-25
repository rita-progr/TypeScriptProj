import {StateSchema} from "app/providers/StoreProveder";

export const getProfileLoading = (state: StateSchema) => state?.profile?.isLoading || '';
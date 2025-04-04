import {StateSchema} from "app/providers/StoreProveder";

export const getArticleIsLoading = (state: StateSchema) => state?.articles?.isLoading ;

export const getArticleError = (state: StateSchema) => state?.articles?.error ;

export const getArticleData = (state: StateSchema) => state?.articles?.data || '';
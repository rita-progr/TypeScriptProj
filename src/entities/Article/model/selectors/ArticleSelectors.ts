import {StateSchema} from "app/providers/StoreProveder";

export const getArticleIsLoading = (state: StateSchema) => state?.articles?.isLoading || false;

export const getArticleError = (state: StateSchema) => state?.articles?.error || null;

export const getArticleData = (state: StateSchema) => state?.articles?.data || undefined;
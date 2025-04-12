import {StateSchema} from "app/providers/StoreProveder";

export const getArticlesDetailsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading || false
export const getArticleDetailsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error
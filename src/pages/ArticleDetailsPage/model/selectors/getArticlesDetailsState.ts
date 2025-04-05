import {StateSchema} from "app/providers/StoreProveder";

export const getArticlesDetailsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false
export const getArticleDetailsError = (state: StateSchema) => state.articleDetailsComments?.error
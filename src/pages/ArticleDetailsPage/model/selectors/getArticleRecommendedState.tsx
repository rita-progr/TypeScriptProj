import {StateSchema} from "app/providers/StoreProveder";

export const getArticlesDetailsRecommendedLoading = (state: StateSchema) => state.articleDetailsPage?.recommended?.isLoading || false
export const getArticleDetailsRecommendedError = (state: StateSchema) => state.articleDetailsPage?.recommended?.error
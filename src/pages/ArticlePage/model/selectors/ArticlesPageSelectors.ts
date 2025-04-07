import {StateSchema} from "app/providers/StoreProveder";
import {ArticleViews} from "entities/Article";

export const getArticlesPageIsLoading = (state: StateSchema) => state?.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state?.articlesPage?.error || null;
export const getArticlesPageView = (state: StateSchema) => state?.articlesPage?.view || ArticleViews.SMALL;
export const getArticlesPageNum = (state: StateSchema) => state?.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state?.articlesPage?.hasMore || false;
export const getArticlesPageLimit = (state: StateSchema) => state?.articlesPage?.limit || 12;
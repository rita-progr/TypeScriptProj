import {EntityState} from "@reduxjs/toolkit";
import {Article, ArticleViews} from "entities/Article";

export interface ArticlesSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string | null;
    view: ArticleViews
}
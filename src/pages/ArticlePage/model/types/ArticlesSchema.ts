import {EntityState} from "@reduxjs/toolkit";
import {Article, ArticleSortType, ArticleViews} from "entities/Article";
import {OrderType} from "shared/types/orderTypes";

export interface ArticlesSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string | null;
    view: ArticleViews;
    limit?: number;
    page?: number;
    hasMore?: boolean;
    sort?: ArticleSortType,
    order?: OrderType,
    search?: string;
    _inited?: boolean;
}
import {combineReducers} from "@reduxjs/toolkit";
import {ArticleDetailsPageCommentReducer} from "./ArticleDetailsPageCommentSlice";
import {
    ArticleDetailsPageRecommendedReducer
} from "./ArticleDetailsRecommendedSlice";

export const ArticleDetailsPageReducer = combineReducers({
    comments: ArticleDetailsPageCommentReducer,
    recommended: ArticleDetailsPageRecommendedReducer
})
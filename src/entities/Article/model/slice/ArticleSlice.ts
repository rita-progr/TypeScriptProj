import {Article, ArticleSchema} from "../types/ArticleSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchArticleById} from "../services/fetchArticleById";

const initialState: ArticleSchema = {
    isLoading: false,
    error: null,
    data: undefined,
}

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchArticleById.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>)=>{
                state.isLoading = false;
                state.error = null;
                state.data = action.payload
            })
            .addCase(fetchArticleById.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export const {reducer: ArticleReducer} = ArticleSlice
export const {actions: ArticleActions} = ArticleSlice
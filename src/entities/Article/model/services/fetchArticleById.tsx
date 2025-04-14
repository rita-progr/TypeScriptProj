import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Article} from "../types/ArticleSchema";

export const fetchArticleById = createAsyncThunk<Article, string , ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`,{
                params: {
                    _expend: 'user'
                }
            });
            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

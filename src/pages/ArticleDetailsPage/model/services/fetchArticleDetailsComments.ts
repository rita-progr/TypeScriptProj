import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Comment} from 'entities/Comment'


export const fetchArticleDetailsComments = createAsyncThunk<Comment[], string |undefined | number , ThunkConfig<string>>(
    'comment/fetchArticleDetailsComments',
    async (articleId, {extra, rejectWithValue}) => {
        if(!articleId){
            return rejectWithValue('При получении данных возникла ошибка ');
        }
        try {
            const response = await extra.api.get<Comment[]>(`/comments`,{
                params: {
                    articleId,
                    _expand: 'user'
                }
            });
            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

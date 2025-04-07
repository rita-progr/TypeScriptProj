import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Article} from "entities/Article";


export const fetchArticlesPage = createAsyncThunk<Article[], string |undefined | number , ThunkConfig<string>>(
    'article/fetchArticlesPage',
    async (_, {extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<Article[]>(`/articles`,{
                params: {
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

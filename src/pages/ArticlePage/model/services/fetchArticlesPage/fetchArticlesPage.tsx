import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Article} from "entities/Article";
import {getArticlesPageLimit} from "../../selectors/ArticlesPageSelectors";

interface fetchArticlePageProps{
    page?: number;
}

export const fetchArticlesPage = createAsyncThunk<Article[], fetchArticlePageProps, ThunkConfig<string>>(
    'article/fetchArticlesPage',
    async (props, {extra, rejectWithValue, getState}) => {
        const {page = 1} = props;
        const limit = getArticlesPageLimit(getState())
        console.log(limit)
        try {
            const response = await extra.api.get<Article[]>(`/articles`,{
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                }
            });
            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

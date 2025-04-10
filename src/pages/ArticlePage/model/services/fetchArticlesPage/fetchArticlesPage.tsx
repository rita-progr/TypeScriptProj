import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {Article} from "entities/Article";
import {
    getArticlesPageLimit, getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort
} from "../../selectors/ArticlesPageSelectors";
import {addQueryParams} from "shared/lib/url/addQueryParams/addQueryParams";

interface fetchArticlePageProps{
   replace?: boolean
}

export const fetchArticlesPage = createAsyncThunk<Article[], fetchArticlePageProps, ThunkConfig<string>>(
    'article/fetchArticlesPage',
    async (props, {extra, rejectWithValue, getState}) => {
        const page = getArticlesPageNum(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());

        const limit = getArticlesPageLimit(getState())
        console.log(limit)
        try {
            addQueryParams({
                sort,
                order,
                search,
            })
            const response = await extra.api.get<Article[]>(`/articles`,{
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search
                }
            });
            return response.data

        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

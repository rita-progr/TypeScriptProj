import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {
 getArticlesPageInited,
} from "../../selectors/ArticlesPageSelectors";
import {fetchArticlesPage} from "../fetchArticlesPage/fetchArticlesPage";
import {ArticlePageActions} from "pages/ArticlePage";
import {ArticleSortType} from "entities/Article";
import {OrderType} from "shared/types/orderTypes";

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'article/fetchNextArticlesPage',
    async (searchParams, { getState, dispatch}) => {
        const inited = getArticlesPageInited(getState());
        if(!inited) {
            const sortFromUrl = searchParams.get('sort')as ArticleSortType;
            const orderFromUrl = searchParams.get('order')  as OrderType;
            const search = searchParams.get('search');

            if(orderFromUrl) {
                dispatch(ArticlePageActions.setOrder(orderFromUrl));
            }

            if(sortFromUrl) {
                dispatch(ArticlePageActions.setSort(sortFromUrl));
            }

            if(search) {
                dispatch(ArticlePageActions.setSearch(search));
            }

            dispatch(ArticlePageActions.initView())
            dispatch(fetchArticlesPage({
               replace: true,
            }))
        }
    },
)

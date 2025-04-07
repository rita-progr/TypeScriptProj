import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum
} from "../../selectors/ArticlesPageSelectors";
import {fetchArticlesPage} from "../fetchArticlesPage/fetchArticlesPage";
import {ArticlePageActions} from "pages/ArticlePage";

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'article/fetchNextArticlesPage',
    async (_, { getState, dispatch}) => {
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        const hasMore = getArticlesPageHasMore(getState());

        if(hasMore && !isLoading) {
            dispatch(ArticlePageActions.setPage(page+1))
            dispatch(fetchArticlesPage({
                page: page + 1
            }))
        }

    },
)

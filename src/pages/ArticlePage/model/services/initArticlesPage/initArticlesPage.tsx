import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {
 getArticlesPageInited,
} from "../../selectors/ArticlesPageSelectors";
import {fetchArticlesPage} from "../fetchArticlesPage/fetchArticlesPage";
import {ArticlePageActions} from "pages/ArticlePage";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'article/fetchNextArticlesPage',
    async (_, { getState, dispatch}) => {
        const inited = getArticlesPageInited(getState());
        if(!inited) {
            dispatch(ArticlePageActions.initView())
            dispatch(fetchArticlesPage({
               replace: true,
            }))
        }
    },
)

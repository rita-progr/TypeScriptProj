import {createEntityAdapter, createSlice, PayloadAction,} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProveder";
import {Article, ArticleViews} from "entities/Article";
import {ArticlesSchema} from "../types/ArticlesSchema";
import {fetchArticlesPage} from "../services/fetchArticlesPage/fetchArticlesPage";
import {ARTICLE_VIEW_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const articleAdapter = createEntityAdapter<Article, string| number>({
    selectId: (article: Article) => article.id,
})

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articleAdapter.getInitialState()
)

const ArticlePageSlice = createSlice({
    name: 'ArticlePageSlice',
    initialState: articleAdapter.getInitialState<ArticlesSchema>({
        isLoading: false,
        error: null,
        ids: [],
        entities: {},
        view: ArticleViews.SMALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViews>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initView: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleViews
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchArticlesPage.fulfilled, (state, action: PayloadAction<Article[]>)=>{
                state.isLoading = false;
                state.error = null;
                articleAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesPage.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }

})

export const {reducer: ArticlePageReducer, actions: ArticlePageActions} = ArticlePageSlice

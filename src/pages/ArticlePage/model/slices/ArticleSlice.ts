import {createEntityAdapter, createSlice, PayloadAction,} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProveder";
import {Article, ArticleSortType, ArticleType, ArticleViews} from "entities/Article";
import {ArticlesSchema} from "../types/ArticlesSchema";
import {fetchArticlesPage} from "../services/fetchArticlesPage/fetchArticlesPage";
import {ARTICLE_VIEW_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import {OrderType} from "shared/types/orderTypes";

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
        view: ArticleViews.SMALL,
        page: 1,
        hasMore: true,
        order: 'asc',
        limit: 12,
        sort: ArticleSortType.CREATED,
        search: '',
        _inited: false,
        type: ArticleType.ALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViews>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<OrderType>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortType>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        initView: (state) => {
            const view = state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleViews
            state.view = view
            state.limit = view === ArticleViews.BIG ? 4 : 12
            state._inited = true

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPage.pending, (state, action) => {
                state.isLoading = true
                if(action.meta.arg.replace){
                    articleAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesPage.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.error = null;
                state.hasMore = action.payload.length >=state.limit
                if(action.meta.arg.replace){
                    articleAdapter.setAll(state, action.payload)
                }else{
                    articleAdapter.addMany(state, action.payload)
                }

            })
            .addCase(fetchArticlesPage.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }

})

export const {reducer: ArticlePageReducer, actions: ArticlePageActions} = ArticlePageSlice

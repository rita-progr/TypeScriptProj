import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProveder";
import {Article} from "entities/Article";
import {ArticlesRecommendedSchema} from "pages/ArticleDetailsPage/model/types/ArticleRecommendedSchema";
import {fetchArticleRecommendedPage} from "pages/ArticleDetailsPage/model/services/fetchArticleRecommended";



const recommendedAdapter = createEntityAdapter<Article, string| number>({
    selectId: (recommended) => recommended.id,
})

export const getArticleRecommended = recommendedAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommended || recommendedAdapter.getInitialState()
)

const ArticleDetailsPageCommentSlice = createSlice({
    name: 'ArticleDetailsPageCommentSlice',
    initialState: recommendedAdapter.getInitialState<ArticlesRecommendedSchema>({
        isLoading: false,
        error: null,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchArticleRecommendedPage.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendedPage.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.error = null;
                recommendedAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendedPage.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export const {reducer: ArticleDetailsPageRecommendedReducer} = ArticleDetailsPageCommentSlice

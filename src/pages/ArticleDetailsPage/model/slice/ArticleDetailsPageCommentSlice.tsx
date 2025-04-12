import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import {Comment} from "entities/Comment";
import {StateSchema} from "app/providers/StoreProveder";
import {CommentSchema} from "../types/comment";
import {fetchArticleDetailsComments} from "../services/fetchArticleDetailsComments";



const commentsAdapter = createEntityAdapter<Comment, string| number>({
    selectId: (comment: Comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const ArticleDetailsPageCommentSlice = createSlice({
    name: 'ArticleDetailsPageCommentSlice',
    initialState: commentsAdapter.getInitialState<CommentSchema>({
        isLoading: false,
        error: null,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchArticleDetailsComments.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(fetchArticleDetailsComments.fulfilled, (state, action: PayloadAction<Comment[]>)=>{
                state.isLoading = false;
                state.error = null;
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleDetailsComments.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export const {reducer: ArticleDetailsPageCommentReducer} = ArticleDetailsPageCommentSlice

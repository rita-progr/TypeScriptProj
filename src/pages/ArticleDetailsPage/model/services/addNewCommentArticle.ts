import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProveder";
import {getUserAuthData} from "entities/User";
import {getArticleData} from "entities/Article/model/selectors/ArticleSelectors";
import {addNewCommentActions} from "features/addNewComment/model/slices/addNewCommentSlice";
import {fetchArticleDetailsComments} from "./fetchArticleDetailsComments";


export const addNewCommentArticle = createAsyncThunk<Comment, string , ThunkConfig<string>>(
    'article/addNewCommentArticle',
    async (text, {extra, rejectWithValue, getState, dispatch}) => {
        const user = getUserAuthData(getState());
        const article = getArticleData(getState());

        if(!user || !article || !text) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.post<Comment>(`/comments`, {
                articleId: article.id,
                userId: user.id,
                text: text,
            });
            dispatch(addNewCommentActions.setText(''));
            dispatch(fetchArticleDetailsComments(article.id));
            return response.data


        }catch(err){
            console.log(err);
            return rejectWithValue('При получении данных возникла ошибка ')
        }

    },
)

import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {AuthByUserNameSchema} from "features/AuthByUserName";
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {CombinedState} from "@reduxjs/toolkit/query";
import {N as NavigateOptions, T as To} from "react-router/dist/development/route-data-BmvbmBej";
import {AxiosInstance} from "axios";
import {ProfileSchema} from "entities/Profile";
import {ArticleSchema} from "entities/Article";
import {CommentSchema} from "pages/ArticleDetailsPage";
import {addNewCommentSchema} from "features/addNewComment";
import {ArticlesSchema} from "pages/ArticlePage";



export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    login?: AuthByUserNameSchema
    profile?: ProfileSchema
    articles?: ArticleSchema
    articleDetailsComments?: CommentSchema
    newComment?: addNewCommentSchema
    articlesPage?:ArticlesSchema
}
export interface reduxManagerInterface{
    getReducerMap: () => ReducersMapObject<StateSchema>;
    //@ts-expect-error: This is a temporary workaround for a known issue
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add : (key: StateSchemaKeys, reducer: Reducer)=> void;
    remove : (key: StateSchemaKeys)=> void;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxWithStoreManager extends  EnhancedStore<StateSchema>{
    reducerManager:reduxManagerInterface;
}

export interface ThunkExtraArgs{
    api:AxiosInstance;
}
export interface ThunkConfig<T>{
    extra: ThunkExtraArgs;
    state: StateSchema;
    rejectValue: T;
}
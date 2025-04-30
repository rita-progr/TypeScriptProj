import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {AuthByUserNameSchema} from "features/AuthByUserName";
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {CombinedState} from "@reduxjs/toolkit/query";
import {AxiosInstance} from "axios";
import {ArticleSchema} from "entities/Article";
import {addNewCommentSchema} from "features/addNewComment";
import {ArticlesSchema} from "pages/ArticlePage";
import {TrottlingSchema} from "features/trottlingScroll";
import {ArticleDetailsPageSchema} from "pages/ArticleDetailsPage/model/types";
import {rtkApi} from "shared/api/rtkApi";
import {ProfileSchema} from "features/editableProfileCard";



export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    trottling: TrottlingSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    login?: AuthByUserNameSchema
    profile?: ProfileSchema
    articles?: ArticleSchema
    articleDetailsPage?:ArticleDetailsPageSchema
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
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {userReducer} from "entities/User";
import {counterReducer} from "entities/Counter";
import {createReducerManager} from "app/providers/StoreProveder/config/reduxManager";


export const createStore = (initialState?:StateSchema) => {

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }
    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState:initialState
    })
    //@ts-expect-error: This is a temporary workaround for a known issue
    store.reducerManager = reducerManager;
    return store;
}

export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']

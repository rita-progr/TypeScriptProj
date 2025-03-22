import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {userReducer} from "entities/User";
import {counterReducer} from "entities/Counter";
import {createReducerManager} from "./reduxManager";
import {$api} from "shared/api/api";
import {N as NavigateOptions, T as To} from "react-router/dist/development/route-data-BmvbmBej";


export const createReduxStore = (initialState?:StateSchema, asyncReducers?: ReducersMapObject<StateSchema>, navigate?:  (to: To, options?: NavigateOptions) => void | Promise<void>) => {

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }
    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState:initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument:{
                    api: $api,
                    navigate
                }
            }
        })
    })
    //@ts-expect-error: This is a temporary workaround for a known issue
    store.reducerManager = reducerManager;
    return store;
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

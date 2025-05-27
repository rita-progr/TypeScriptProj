import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArgs} from "./StateSchema";
import {userReducer} from "@/entities/User";
import {counterReducer} from "@/entities/Counter";
import {createReducerManager} from "./reduxManager";
import {$api} from "@/shared/api/api";
import {N as NavigateOptions, T as To} from "react-router/dist/development/route-data-BmvbmBej";
import {trottlingReducer} from "@/features/trottlingScroll";
import {rtkApi} from "@/shared/api/rtkApi";


export const createReduxStore = (initialState?:StateSchema, asyncReducers?: ReducersMapObject<StateSchema>, navigate?:  (to: To, options?: NavigateOptions) => void | Promise<void>) => {

    const extraArg: ThunkExtraArgs = {
        api: $api,
    }

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        trottling: trottlingReducer,
    }
    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState:initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        }).concat(rtkApi.middleware)
    })
    //@ts-expect-error: This is a temporary workaround for a known issue
    store.reducerManager = reducerManager;
    return store;
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

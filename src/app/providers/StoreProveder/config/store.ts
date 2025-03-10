import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {userReducer} from "entities/User";
import {counterReducer} from "entities/Counter";
import {loginReducer} from "features/AuthByUserName";


export const createStore = (initialState?:StateSchema) => {

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState:initialState
    })
}

export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']

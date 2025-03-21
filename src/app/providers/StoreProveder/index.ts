import {StoreProvider} from "./ui/StoreProvider";
import {createReduxStore} from "./config/store";
import type {StateSchema} from "./config/StateSchema";
import {AppDispatch} from "./config/store";
import {ReduxWithStoreManager, ThunkExtraArgs} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ReduxWithStoreManager,
    ThunkExtraArgs
};
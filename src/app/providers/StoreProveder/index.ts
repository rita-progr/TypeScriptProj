import {StoreProvider} from "./ui/StoreProvider";
import {createReduxStore} from "./config/store";
import type {StateSchema} from "./config/StateSchema";
export type {AppDispatch} from "./config/store";
export type {ReduxWithStoreManager, ThunkConfig} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
};
import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createStore, StateSchema} from "app/providers/StoreProveder";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface StoreProviderProps{
    children?:ReactNode;
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props:StoreProviderProps) => {
    const {
        children,
        initialState
    } = props;

    const store = createStore(initialState as StateSchema);

    return (
        <Provider store = {store}>
            {children}
        </Provider>
    )
}

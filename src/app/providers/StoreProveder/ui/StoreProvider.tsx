import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore, StateSchema} from "app/providers/StoreProveder";
import {useNavigate} from "react-router-dom";
import {N as NavigateOptions, T as To} from "react-router/dist/development/route-data-BmvbmBej";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface StoreProviderProps{
    children?:ReactNode;
    initialState?: DeepPartial<StateSchema>
    navigate?:  (to: To, options?: NavigateOptions) => void | Promise<void>;
}

export const StoreProvider = (props:StoreProviderProps) => {
    const {
        children,
        initialState
    } = props;

    const navigate = useNavigate();

    const store = createReduxStore(initialState as StateSchema, navigate);

    return (
        <Provider store = {store}>
            {children}
        </Provider>
    )
}

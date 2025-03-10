import {render} from "@testing-library/react";
import {ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "app/providers/StoreProveder";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface renderComponentsOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function renderComponents(component:ReactNode, options:renderComponentsOptions = {}){

    const {
        route = '/',
        initialState
    } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </StoreProvider>
    )
}
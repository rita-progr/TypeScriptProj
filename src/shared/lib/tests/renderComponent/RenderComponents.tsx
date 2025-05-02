import {render} from "@testing-library/react";
import {ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "app/providers/StoreProveder";
import {ReducersMapObject} from "@reduxjs/toolkit";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface renderComponentsOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}

export function renderComponents(component:ReactNode, options:renderComponentsOptions = {}){

    const {
        route = '/',
        initialState,
        asyncReducers
    } = options;

    return render(
        <StoreProvider asuncReducers={asyncReducers} initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </StoreProvider>
    )
}
import {render} from "@testing-library/react";
import {ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";

export interface renderComponentsOptions {
    route?: string;
}

export function renderComponents(component:ReactNode, options:renderComponentsOptions = {}){

    const {
        route = '/'
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            {component}
        </MemoryRouter>
    )
}
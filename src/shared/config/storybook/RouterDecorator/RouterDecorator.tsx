import { MemoryRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/StoreProveder";

export const RouterDecorator = (Story:  React.ComponentType) => (
    <MemoryRouter>
        <StoreProvider>
            <Story />
        </StoreProvider>
    </MemoryRouter>
);
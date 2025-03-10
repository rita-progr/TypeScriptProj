import {StoreProvider} from "app/providers/StoreProveder";

export const ReduxDecorator = (Story:  React.ComponentType) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);
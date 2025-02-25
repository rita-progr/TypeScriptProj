import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story:  React.ComponentType) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
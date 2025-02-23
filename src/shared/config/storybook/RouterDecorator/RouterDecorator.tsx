import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story: any) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
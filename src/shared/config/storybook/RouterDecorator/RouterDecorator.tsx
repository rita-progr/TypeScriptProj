import { MemoryRouter} from "react-router-dom";

export const RouterDecorator = (Story:  React.ComponentType) => (
    <MemoryRouter>
         <Story />
    </MemoryRouter>
);
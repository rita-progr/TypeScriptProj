import {ThemeType} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: ThemeType)=> (Story:  React.ComponentType) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
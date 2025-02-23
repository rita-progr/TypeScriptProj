import {ThemeType} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: ThemeType)=> (Story: any) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
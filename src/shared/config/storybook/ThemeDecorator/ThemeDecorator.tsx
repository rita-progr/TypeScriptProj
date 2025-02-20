import {StoryFn} from "@storybook/react";
import {ThemeType} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: ThemeType)=> (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
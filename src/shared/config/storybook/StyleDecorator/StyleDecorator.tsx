import 'app/styles/index.scss'
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (Story: any) => (
    <div>
        <Story />
    </div>
);
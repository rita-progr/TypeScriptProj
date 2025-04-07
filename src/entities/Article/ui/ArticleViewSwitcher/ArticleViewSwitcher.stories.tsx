import type {Meta, StoryObj} from '@storybook/react';
import {ArticleViewSwitcher} from './ArticleViewSwitcher';


const meta = {
    title: 'shared/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleViewSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

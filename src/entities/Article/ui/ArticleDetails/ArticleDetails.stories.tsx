import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetails} from './ArticleDetails';


const meta = {
    title: 'shared/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

import type {Meta, StoryObj} from '@storybook/react';
import  ArticlePage from './ArticlePage';


const meta = {
    title: 'shared/ArticlePage',
    component: ArticlePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

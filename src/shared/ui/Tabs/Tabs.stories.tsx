import type {Meta, StoryObj} from '@storybook/react';
import {Tabs} from './Tabs';
import {action } from '@storybook/addon-actions';


const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tabs:[
            {
                value: "Tab 1",
                content: "Tab 1"
            },
            {
                value: "Tab 2",
                content: "Tab 2"
            },
            {
                value: "Tab 3",
                content: "Tab 3"
            },
        ],
        value:"Tab 1",
        onTabClick: action('onTabCLick'),
    },
};

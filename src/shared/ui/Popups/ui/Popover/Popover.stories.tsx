import type {Meta, StoryObj} from '@storybook/react';
import {Popover} from './Popover';


const meta = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

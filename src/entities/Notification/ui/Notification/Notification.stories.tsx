import type {Meta, StoryObj} from '@storybook/react';
import {Notification} from './Notification';


const meta = {
    title: 'shared/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

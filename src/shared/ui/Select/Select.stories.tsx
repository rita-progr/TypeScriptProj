import type { Meta, StoryObj } from '@storybook/react';
import {Select } from './Select';


const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label:'sdkfk',
        options: [
            {
            value: 'sdkfk',
            content: 'The first '
            },
            {
                value: '111',
                content: 'The second '
            },
        ]
    },
};

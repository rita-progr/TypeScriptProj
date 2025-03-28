import type { Meta, StoryObj } from '@storybook/react';
import {Avatar } from './Avatar';
import avatar from 'shared/assets/test/haker.jpeg';


const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        img:avatar,
        alt:'картинка хакера'
    },
};


export const Small: Story = {
    args: {
        img:avatar,
        alt:'картинка хакера',
        size:50,
    },
};



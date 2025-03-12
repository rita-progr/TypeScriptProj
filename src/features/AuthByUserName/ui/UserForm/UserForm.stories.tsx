import type { Meta, StoryObj } from '@storybook/react';
import {UserForm } from './UserForm';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {ThemeType} from "app/providers/ThemeProvider";




const meta = {
    title: 'shared/UserForm',
    component: UserForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

export const Dark: Story = {
    args: {

    },
};




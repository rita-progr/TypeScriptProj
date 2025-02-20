import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import  Main  from './Main';
import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'pages/Main',
    component: Main,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},

};

Dark.decorators = [ThemeDecorator(ThemeType.DARK)]


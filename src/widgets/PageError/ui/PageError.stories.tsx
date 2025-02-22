import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { PageError} from './PageError';
import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
    args: {},
};

export const DarkTheme: Story = {
    args: {}
};

DarkTheme.decorators = [ThemeDecorator(ThemeType.DARK)]


import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Navbar} from './Navbar';
import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {}
};


Dark.decorators = [ThemeDecorator(ThemeType.DARK)]


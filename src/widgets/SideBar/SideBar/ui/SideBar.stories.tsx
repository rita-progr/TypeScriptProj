import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { SideBar } from './SideBar';
import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'widgets/SideBar',
    component: SideBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},

};

Dark.decorators = [ThemeDecorator(ThemeType.DARK)]


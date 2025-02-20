import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CustomButton, ThemeButton } from './CustomButton';
import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'shared/CustomButton',
    component: CustomButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:'Text'
    },
};

export const Secondary: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.CLEAR
    }
};

export const Outline: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.OUTLINE
    }
};
Outline.decorators = [ThemeDecorator(ThemeType.DARK)]


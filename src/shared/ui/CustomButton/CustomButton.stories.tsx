import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {ButtonSize, CustomButton, ThemeButton } from './CustomButton';
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
export const Large: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.CLEAR,
        size: ButtonSize.LARGE
    },
};

export const Medium: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.CLEAR,
        size: ButtonSize.MEDIUM
    },
};

export const Small: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.CLEAR,
        size: ButtonSize.SMALL
    },
};

export const LargeDark: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.BACKGROUND,
        size: ButtonSize.LARGE
    },
};

export const MediumDarkInverted: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.BACKGROUND_INVERTED,
        size: ButtonSize.MEDIUM
    },
};

export const SmallDark: Story = {
    args: {
        children:'Text',
        theme: ThemeButton.CLEAR,
        size: ButtonSize.SMALL
    },
};

LargeDark.decorators = [ThemeDecorator(ThemeType.DARK)]
MediumDarkInverted.decorators = [ThemeDecorator(ThemeType.DARK)]
SmallDark.decorators = [ThemeDecorator(ThemeType.DARK)]

Outline.decorators = [ThemeDecorator(ThemeType.DARK)]


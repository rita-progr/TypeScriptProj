import type {Meta, StoryObj} from '@storybook/react';
import {Skeleton} from './Skeleton';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width:100,
        height:200,
    },
};

export const Circle: Story = {
    args: {
        width:100,
        height:100,
        border: '50%'
    },
};

export const NormalDark: Story = {
    args: {
        width:100,
        height:200,
    },
};

NormalDark.decorators = [ThemeDecorator(ThemeType.DARK)]

export const CircleDark: Story = {
    args: {
        width:100,
        height:100,
        border: '50%'
    },
};
CircleDark.decorators = [ThemeDecorator(ThemeType.DARK)]

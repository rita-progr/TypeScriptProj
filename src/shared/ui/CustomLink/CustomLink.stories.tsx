import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import {CustomLink, CustomLinkType} from './CustomLink';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {ThemeType} from "app/providers/ThemeProvider";



const meta = {
    title: 'shared/CustomLink',
    component: CustomLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args:{
        to:'/'
    }
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: CustomLinkType.PRIMARY,
        children:'Text'
    },
};

export const Secondary: Story = {
    args: {
        theme: CustomLinkType.SECONDARY,
        children:'Text'
    },

};

export const PrimaryDark: Story = {
    args: {
        theme: CustomLinkType.PRIMARY,
        children:'Text'
    },
};
PrimaryDark.decorators = [ThemeDecorator(ThemeType.DARK)]

export const SecondaryDark: Story = {
    args: {
        theme: CustomLinkType.SECONDARY,
        children:'Text'
    },

};

SecondaryDark.decorators = [ThemeDecorator(ThemeType.DARK)]

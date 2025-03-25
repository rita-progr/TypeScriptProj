import type { Meta, StoryObj } from '@storybook/react';
import {Text, TextTheme} from './Text';
// import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title:'Lorem dsk dsjfi',
        text: 'description',
    },
};
export const onlyTitle: Story = {
    args: {
        title:'Lorem dsk dsjfi',
    },
};
export const onlyText: Story = {
    args: {
        text: 'description',
    },
};

export const error: Story = {
    args: {
        title: 'error',
        theme: TextTheme.ERROR
    },
};



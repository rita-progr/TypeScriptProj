import type { Meta, StoryObj } from '@storybook/react';
import {CountrySelector } from './CountrySelector';


const meta = {
    title: 'shared/CountrySelector',
    component: CountrySelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof CountrySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

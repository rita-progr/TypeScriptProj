import type { Meta, StoryObj } from '@storybook/react';
import {CurrencySelect } from './CurrencySelect';


const meta = {
    title: 'shared/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

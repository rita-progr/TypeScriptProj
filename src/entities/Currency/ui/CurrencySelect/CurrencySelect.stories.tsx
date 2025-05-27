import type { Meta, StoryObj } from '@storybook/react';
import {CurrencySelect } from './CurrencySelect';
import {Currency} from "@/entities/Currency";


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
        onChange:(value:string) => console.log('ss'),
        value: Currency.EUR,
    },
};

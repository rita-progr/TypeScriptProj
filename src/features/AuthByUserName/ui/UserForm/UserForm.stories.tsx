import type { Meta, StoryObj } from '@storybook/react';
import UserForm from './UserForm';

const meta = {
    title: 'shared/UserForm',
    component: UserForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

export const Dark: Story = {
    args: {

    },
};




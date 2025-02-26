import type { Meta, StoryObj } from '@storybook/react';
import {Modal } from './Modal';
// import {ThemeType} from "app/providers/ThemeProvider";


const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;
 
export const Primary: Story = {
    args: {
        isOpen:true,
        children:'lorem fdvk kerkfi kfdnverjgike'
    },
};




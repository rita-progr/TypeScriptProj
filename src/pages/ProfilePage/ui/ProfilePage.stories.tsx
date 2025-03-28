import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from './ProfilePage';
import {ThemeType} from "app/providers/ThemeProvider";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import avatar from 'shared/assets/test/haker.jpeg';


const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

// export const error: Story = {
//     args: {
//         error:'dkm'
//     },
// };


// export const loading: Story = {
//     args: {
//         isLoading:true
//     },
// };


// Primary.decorators = [ThemeDecorator(ThemeType.DARK)]


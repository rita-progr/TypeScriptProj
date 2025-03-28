import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {ProfileCard} from './ProfileCard';
import {ThemeType} from "app/providers/ThemeProvider";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import avatar from 'shared/assets/test/haker.jpeg';


const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data :{
            first: 'Рита',
            lastname: 'Афанасьева',
            age: 17 ,
            city: 'Санкт-Петербург',
            username: '@ritaaa969',
            avatar:  avatar,
        }
    },
};

export const error: Story = {
    args: {
       error:'dkm'
    },
};


export const loading: Story = {
    args: {
        isLoading:true
    },
};


// Primary.decorators = [ThemeDecorator(ThemeType.DARK)]


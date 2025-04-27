import type {Meta, StoryObj} from '@storybook/react';
import {ListBox} from './ListBox';


const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onChange :()=>console.log(''),
        items: [
            {
                content:'kdksldmlck',
                value: 'kdlsdck'
            },
            {
                content:'kdsdlcck',
                value: 'kdc;dsk'
            },
            {
                content:'jsdnk',
                value: 'kdck'
            },
            {
                content:'jsdnk',
                value: 'kdsdlck'
            }
        ],
        direction: 'top',
        value: 'kdck',
    },
};

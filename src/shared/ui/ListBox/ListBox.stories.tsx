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
        direction: 'top left',
        value: 'kdck',
    },
};

export const TopRight: Story = {
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
        direction: 'top right',
        value: 'kdck',
    },
};

export const BottomRight: Story = {
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
        direction: 'bottom right',
        value: 'kdck',
    },
};

export const BottomLeft: Story = {
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
        direction: 'bottom left',
        value: 'kdck',
    },
};

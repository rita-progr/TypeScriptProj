import type {Meta, StoryObj} from '@storybook/react';
import {DropDown} from './DropDown';


const meta = {
    title: 'shared/DropDown',
    component: DropDown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items:[
            {content: 'sdvikcsdi', id:'dsk'},
            {content: 'sdviksdkmccsdi', id:'ddsk'},
            {content: 'sdvidskcsdi', id:'dssdfck'},
            {content: 'sdvikcsdfsdi', id:'dsksd'},
        ],
        trigger:'Click'
    },
};

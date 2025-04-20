import type {Meta, StoryObj} from '@storybook/react';
import {Flex} from './Flex';


const meta = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlexRow: Story = {
    args: {
        direction: 'row',
        children: 'sfkdckvsdm'
    },
};

export const FlexColumn: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <p>jdsnckjn</p>
                <p>jdsnckjn</p>
                <p>jdsnckjn</p>
                <p>jdsnckjn</p>
            </>
        )
    },
};

export const FlexColumnGap: Story = {
    args: {
        direction: 'column',
        gap: "16",
        children: (
            <>
                <p>jdsnckjn</p>
                <p>jdsnckjn</p>
                <p>jdsnckjn</p>
                <p>jdsnckjn</p>
            </>
        )
    },
};

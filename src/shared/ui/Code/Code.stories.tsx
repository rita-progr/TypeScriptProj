import type {Meta, StoryObj} from '@storybook/react';
import {Code} from './Code';


const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: `
        import type {Meta, StoryObj} from '@storybook/react';
        import {Code} from './Code';
        
        const meta = {
            title: 'shared/Code',
            component: Code,
            parameters: {
                layout: 'centered',
            },
            tags: ['autodocs'],
            args: {},
        } satisfies Meta<typeof Code>;
        
        export default meta;
        type Story = StoryObj<typeof meta>;
`
    },
};

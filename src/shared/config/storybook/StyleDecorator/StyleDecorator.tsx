import 'app/styles/index.scss'

export const StyleDecorator = (Story: React.ComponentType) => (
    <div>
        <Story />
    </div>
);
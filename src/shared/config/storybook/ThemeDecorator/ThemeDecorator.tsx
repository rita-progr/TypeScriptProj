import React from 'react';
import { ThemeType } from 'app/providers/ThemeProvider';

export function ThemeDecorator(theme: ThemeType) {
    return function Decorator(Story: React.ComponentType) {
        return (
            <div className={`app ${theme}`}>
                <Story />
            </div>
        );
    };
}


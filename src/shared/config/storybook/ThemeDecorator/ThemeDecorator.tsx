import React from 'react';
import {ThemeProvider, ThemeType} from 'app/providers/ThemeProvider';

export function ThemeDecorator(theme: ThemeType) {
    return function Decorator(Story: React.ComponentType) {
        return (
            <ThemeProvider initialTheme={ThemeType.DARK} >
                <div className={`app ${theme}`}>
                    <Story/>
                </div>
            </ThemeProvider>
        );
    };
}


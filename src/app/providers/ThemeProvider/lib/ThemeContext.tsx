import { createContext } from 'react';
export enum ThemeType {
    DARK = 'dark_app_theme',
    LIGHT = 'light_app_theme',
    ORANGE = 'orange_app_theme',
}

export interface ThemeContextProps {
    theme?: ThemeType;
    setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
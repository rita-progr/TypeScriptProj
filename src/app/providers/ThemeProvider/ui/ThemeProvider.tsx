import {FC, useMemo, useState} from 'react'
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType} from "../lib/ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode; // Тип для children
    initialTheme?: ThemeType;
}

const ThemeProvider: FC<ThemeProviderProps> = (props)=> {

    const {
        children,
        initialTheme
    } = props

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || ThemeType.LIGHT;

    const [theme,setTheme] = useState<ThemeType>(initialTheme || defaultTheme);

    const defaultProps = useMemo(()=>({
        theme:theme,
        setTheme:setTheme,
    }),[theme])


    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )

}
export default ThemeProvider;
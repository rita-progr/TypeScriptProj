import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeProps{
    theme:ThemeType,
    toggleTheme:()=>void;
}

export function useTheme(): UseThemeProps{
    const {theme, setTheme} = useContext(ThemeContext);

     function toggleTheme(){
         const newTheme = theme === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;

         setTheme(newTheme);
         localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
     }

     return {theme, toggleTheme};
}

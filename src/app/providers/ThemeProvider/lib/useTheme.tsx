import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeProps{
    theme:ThemeType,
    toggleTheme:()=>void;
}

export function useTheme(): UseThemeProps{
    const {theme, setTheme} = useContext(ThemeContext);

     function toggleTheme(){

        let newTheme: ThemeType;

        switch(theme){
            case ThemeType.DARK:
                newTheme = ThemeType.LIGHT
                break;
            case ThemeType.LIGHT:
                newTheme = ThemeType.ORANGE
                break;
            case ThemeType.ORANGE:
                newTheme = ThemeType.DARK
                break;
                default:
                    newTheme = ThemeType.LIGHT
        }

         if (setTheme) {
             setTheme(newTheme);
         }
         localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
     }

     return {theme, toggleTheme} as UseThemeProps;
}

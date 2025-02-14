import {classNames} from "shared/lib/classNames/classNames";
import DarkIcon from 'shared/assets/darkIcon.svg';
import LightIcon from 'shared/assets/lightIcon.svg';
import {ThemeType, useTheme} from "app/providers/ThemeProvider";
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";


interface ThemeSwitchersProps {
    className?: string;
}

export const ThemeSwitchers = ({className}:ThemeSwitchersProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
            <CustomButton
                className={classNames("")}
                          onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
            >
                {theme === ThemeType.DARK? <DarkIcon /> : <LightIcon stroke="black" strokeWidth="0.5" />}
            </CustomButton>
    )
}
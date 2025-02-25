import cls from './CustomButton.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton{
    CLEAR='clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background_theme',
    BACKGROUND_INVERTED = 'backgroundInverted_theme',
}

export enum ButtonSize{
    LARGE= 'l',
    MEDIUM='m',
    SMALL='s'
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?:ThemeButton
    size?:ButtonSize
}

export const CustomButton:FC<CustomButtonProps> = (props) => {

    const {
        className,
        children,
        size,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    const mods: Record<string,boolean> = {

    }

    return (
        <button className={classNames(cls.CustomButton, mods,[className, cls[size], cls[theme]  ])}
                {...otherProps}>
            {children}
        </button>
    )
}
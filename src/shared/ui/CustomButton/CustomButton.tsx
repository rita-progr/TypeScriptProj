import cls from './CustomButton.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton{
    CLEAR='clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background_theme',
    BACKGROUND_INVERTED = 'backgroundInverted_theme',
}

export enum ColorButton {
    INVERTED = 'inverted',
    BASIC = 'basic',
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
    color?:ColorButton
}

export const CustomButton:FC<CustomButtonProps> = (props) => {

    const {
        className,
        children,
        size,
        color = ColorButton.BASIC,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;


    return (
        <button className={classNames(cls.CustomButton , {} ,[className, cls[size], cls[theme], cls[color]  ])}
                {...otherProps}>
            {children}
        </button>
    )
}
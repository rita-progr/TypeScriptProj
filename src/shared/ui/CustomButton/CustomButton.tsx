import cls from './CustomButton.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC, memo} from "react";

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
    disabled?:boolean
}

export const CustomButton= memo(function CustomButton(props:CustomButtonProps){

    const {
        className,
        children,
        size = ButtonSize.MEDIUM,
        color = ColorButton.BASIC,
        theme = ThemeButton.CLEAR,
        disabled,
        ...otherProps
    } = props;


    return (
        <button className={classNames(cls.CustomButton , {[cls.disabled]:disabled } ,[className, cls[size], cls[theme], cls[color]  ])}
                disabled={disabled}
                {...otherProps}>
            {children}
        </button>
    )
})
import cls from './CustomButton.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton{
    CLEAR='clear',
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?:ThemeButton
}

export const CustomButton:FC<CustomButtonProps> = (props) => {

    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;
    return (
        <button className={classNames(cls.CustomButton, {},[className, cls[theme] ])}
                {...otherProps}>
            {children}
        </button>
    )
}
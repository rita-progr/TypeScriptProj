import cls from './Card.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {HTMLAttributes, memo} from "react";

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: CardTheme;
}

export const Card = memo(function Card({className,theme = CardTheme.NORMAL, children, ...otherProps}: CardProps){
    return (
        <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps} >
            {children}
        </div>
    )
})
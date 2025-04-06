import cls from './Card.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {HTMLAttributes, memo} from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}

export const Card = memo(function Card({className, children, ...otherProps}: CardProps){
    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps} >
            {children}
        </div>
    )
})
import {Link, LinkProps} from "react-router-dom";
import cls from './CustomLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {FC, memo} from "react";

export enum CustomLinkType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface CustomLinkProps extends LinkProps {
    className?: string;
    theme?:CustomLinkType;
    short?: boolean;
}

export const CustomLink= memo( function CustomLink (props:CustomLinkProps)  {
    const {className ,
        children,
        to,
        short,
        theme = CustomLinkType.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link to={to} className={classNames(cls.CustomLink, {},[className, cls[theme]])}
            {...otherProps}>

            {children}
        </Link>
    )
})
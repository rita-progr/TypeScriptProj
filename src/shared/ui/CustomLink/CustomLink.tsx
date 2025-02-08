import {Link, LinkProps} from "react-router-dom";
import cls from './CustomLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";

export enum CustomLinkType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface CustomLinkProps extends LinkProps {
    className?: string;
    theme?:CustomLinkType
}

export const CustomLink:FC<CustomLinkProps> = (props) => {
    const {className ,
        children,
        to,
        theme = CustomLinkType.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link to={to} className={classNames(cls.CustomLink, {},[className, cls[theme]])}
            {...otherProps}>

            {children}
        </Link>
    )
}
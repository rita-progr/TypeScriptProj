import cls from './Avatar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CSSProperties, useMemo} from "react";

interface AvatarProps{
    className?: string;
    alt?: string;
    img?: string;
    size?: number;
    width?: number| string;
    height?: number | string;
}

export const Avatar = (props:AvatarProps) => {

    const {alt, img, width, height, className, size} = props;

    const styles = useMemo<CSSProperties>(()=>({
        width: width || size,
        height: height || size,
    }),[height, size, width]);

    return (
        <img
            style = {styles}
            className={classNames(cls.Avatar, {},[className])}
            src = {img}
            alt = {alt}/>

    )
}
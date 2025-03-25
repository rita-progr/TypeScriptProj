import cls from './Avatar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CSSProperties, useMemo} from "react";

interface AvatarProps{
    className?: string;
    alt?: string;
    img?: string;
    size?: number;
}

export const Avatar = (props:AvatarProps) => {

    const {alt, img, size, className} = props;

    const styles = useMemo<CSSProperties>(()=>({
        width: size || 100,
        height: size || 100,
    }),[size])

    return (
        <img
            style = {styles}
            className={classNames(cls.Avatar, {},[className])}
            src = {img}
            alt = {alt}/>

    )
}
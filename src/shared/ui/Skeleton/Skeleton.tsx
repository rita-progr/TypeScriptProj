import cls from './Skeleton.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CSSProperties} from "react";

interface SkeletonProps {
    className?: string;
    height?:number;
    width?:number | string;
    border?:number | string;

}

export const Skeleton = ({className, width, border, height}: SkeletonProps) => {

    const styles : CSSProperties = {
        height,
        width,
        borderRadius: border,
    }

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles}>

        </div>
    )
}
import cls from './Icon.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import React, {memo} from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(function Icon({className, Svg, inverted = false, ...other}: IconProps) {
    return (
        <Svg className={classNames(cls.Icon, {[cls.inverted]:inverted}, [className])} {...other}/>
    )
})
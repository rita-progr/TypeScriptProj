import cls from './Text.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {memo} from "react";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum TextAlign{
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize{
    SMALL = 's',
    MEDIUM = 'm',
    BIG = 'x'
}

interface TextProps{
    className?: string;
    title?:string;
    theme?:TextTheme;
    size?:TextSize;
    text?:string;
    align?: TextAlign;
}

type TextHeaderType = 'h1' | 'h2' | 'h3' ;

const mapSizeHeaderTag: Record<TextSize,TextHeaderType> = {
    [TextSize.BIG]: 'h1',
    [TextSize.MEDIUM]: 'h2',
    [TextSize.SMALL]: 'h3'
}



export const Text = memo(function Text (props:TextProps)  {
    const {
        className,
        text,
        title,
        size = TextSize.MEDIUM,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
    } = props;

    const HeaderTag = mapSizeHeaderTag[size]

    return (
        <div className={classNames(cls.Text, {},[className, cls[theme], cls[align]])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
import cls from './Text.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
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

interface TextProps{
    className?: string;
    title?:string;
    theme?:TextTheme;
    text?:string;
    align?: TextAlign;
}

export const Text = memo(function Text (props:TextProps)  {
    const {
        className,
        text,
        title,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, {},[className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
import cls from './Text.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}


interface TextProps{
    className?: string;
    title?:string;
    theme?:TextTheme;
    text?:string;
}

export const Text = (props:TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, {},[className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}
import cls from './Code.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import CopyIcon from 'shared/assets/Vector.svg'
import {memo, useCallback} from "react";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(function Code ({className, text}: CodeProps){

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    },[text])
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <CopyIcon className = {cls.icon} onClick={onCopy} />
            <code>
                {text}
            </code>
        </pre>
    )
})
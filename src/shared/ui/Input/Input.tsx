import cls from './Input.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ChangeEvent, InputHTMLAttributes} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = (props:InputProps) => {
    const {
        className,
        placeholder,
        type = 'text',
        value,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(cls.InputWrapper, {},[className])}>
            <div className={cls.Input}>
                <p>{`${placeholder}>`}</p>
                <input type={type}
                       value={value}
                       onChange={onChangeHandler}
                       {...otherProps}/>
            </div>
        </div>
    )
}
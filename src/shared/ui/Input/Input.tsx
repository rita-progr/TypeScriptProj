import cls from './Input.module.scss';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {ChangeEvent, InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'| 'readOnly'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Input = memo(function Input (props:InputProps){
    const {
        className,
        placeholder,
        type = 'text',
        readOnly,
        value,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const mods:Mods = {
        [cls.readOnly]:readOnly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods,[className,])}>
            <div className={cls.Input}>
                <p>{`${placeholder}>`}</p>
                <input type={type}
                       value={value}
                       readOnly={readOnly}
                       onChange={onChangeHandler}
                       {...otherProps}/>
            </div>
        </div>
    )
})
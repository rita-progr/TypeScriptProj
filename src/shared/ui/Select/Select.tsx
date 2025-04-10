import cls from './Select.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ChangeEvent, memo, useMemo} from "react";

export interface Options<T extends string> {
    value?: string;
    content?: string;
}

interface SelectProps<T extends string> {
    className?: string;
    value?: T;
    onChange?: (value: T) => void;
    options?: Options<T>[];
    label?: string;
}

export const Select =<T extends string>(props:SelectProps<T>) => {
    const {
        className,
        value,
        options,
        onChange,
        label,
    } = props;

    const listOption= useMemo(()=> options?.map((opt: Options<T>)=>(
        <option value={opt.value} key = {opt.value}>
            {opt.content}
        </option>
    )),[options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>)=> {
        onChange?.(e.target.value as T)
    }

    return (
        <div >
            {label && (
                <span className={cls.Label}>{label}</span>
            )}
            <select name="lsd" id= "1"
                    className={classNames(cls.Select, {},[className])}
                    onChange={onChangeHandler}
                    value={value}
            >
                {listOption}
            </select>
        </div>
    )
}
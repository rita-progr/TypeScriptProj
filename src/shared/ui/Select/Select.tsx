import cls from './Select.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ChangeEvent, memo, useMemo} from "react";

interface Options {
    value?: string;
    content?: string;
}

interface SelectProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    options?: Options[];
    label?: string;
}

export const Select = memo(function Select(props:SelectProps) {
    const {
        className,
        value,
        options,
        onChange,
        label,
    } = props;

    const listOption= useMemo(()=> options?.map((opt: Options)=>(
        <option value={opt.value} key = {opt.value}>
            {opt.content}
        </option>
    )),[options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>)=> {
        onChange?.(e.target.value)
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
})
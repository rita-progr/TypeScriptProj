import {Select} from "shared/ui/Select/Select";
import {Currency} from "../../model/types/CurrencySchema";
import {useCallback} from "react";

interface CurrencyProps{
    className?: string;
    onChange?: (currency: Currency) => void;
    value?: string;
}

export const CurrencySelect = ({className, value, onChange}:CurrencyProps) => {

    const onChangeHandler = useCallback((value:string)=>{
        onChange?.(value as Currency);
    },[onChange])

    const options = [
        {value: Currency.USD, content: Currency.USD},
        {value: Currency.RUB, content: Currency.RUB},
        {value: Currency.EUR, content: Currency.EUR},
    ]

    return (
        <Select
            label={"Укажите валюту"}
            options={options}
            onChange={onChangeHandler}
            value={value}
        />
    )
}
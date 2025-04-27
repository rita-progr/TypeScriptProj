import {Select} from "shared/ui/Select/Select";
import {Currency} from "../../model/types/CurrencySchema";
import {useCallback} from "react";
import {ListBox, ListBoxOptions} from "shared/ui/ListBox/ListBox";

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
        <ListBox
            direction={'top'}
            items={options}
            onChange={onChangeHandler}
            value={value ?? ''}
        />
    )
}
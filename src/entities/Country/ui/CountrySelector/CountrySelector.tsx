import {Select} from "shared/ui/Select/Select";
import {Country} from "../../model/types/CountrySchema";
import {useCallback} from "react";


interface CountrySelectorProps{
    className?: string;
    onChange?: (value:Country)=> void;
    value?: Country;
}

export const CountrySelector = ({className, value, onChange}:CountrySelectorProps) => {

    const onChangeHandler = useCallback((value: string)=>{
        onChange?.(value as Country);
    },[onChange])

    const options = [
        {value: Country.USA, content: Country.USA},
        {value: Country.ENGLAND, content: Country.ENGLAND},
        {value: Country.RUSSIAN, content: Country.RUSSIAN},
    ]

    return (
       <Select value={value}
               label={'Укажите вашу страну'}
       onChange={onChangeHandler} options={options}/>
    )
}
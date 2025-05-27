import cls from './ListBox.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Text, TextTheme} from '@/shared/ui/Text/Text'
import popupCls from '../../styles/Popup.module.scss';
import {Listbox as ListboxH, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import {Fragment, ReactNode} from 'react'
import {CustomButton, ThemeButton} from "@/shared/ui/CustomButton/CustomButton";
import {Direction} from "@/shared/types/ui";
import {mapDirection} from "../../styles/consts";

export interface ListBoxOptions {
    value: string;
    content: ReactNode;
}


interface ListBoxProps {
    items: ListBoxOptions[];
    className?: string;
    direction?: Direction;
    value:string;
    defaultValue?:string;
    onChange:(value:string) => void;
    disabled?:boolean;
}

export const ListBox = ({className, direction = 'bottom left', onChange, value, defaultValue, disabled, items}: ListBoxProps) => {
    const classes = [
        mapDirection[direction],
    ]
    return (
            <ListboxH  onChange={onChange} as = 'div'  value={value} className={popupCls.Popup}>
                <ListboxButton > <CustomButton theme={ThemeButton.OUTLINE}><Text text={ value ?? defaultValue} theme={TextTheme.PRIMARY}/></CustomButton></ListboxButton>
                <ListboxOptions className={classNames(cls.options,{},classes)}>
                            {items.map((person) => (
                                <ListboxOption as = {Fragment}  key={person.value} value={person.value}>
                                        {({ focus, selected }) => (
                                            <div className={classNames(cls.li, {[cls.focused]:focus, [cls.selected]:selected},[])}>
                                                {person.value}
                                            </div>
                                        )}
                                </ListboxOption>

                            ))}
                </ListboxOptions>
            </ListboxH>
    )
}
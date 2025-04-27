import cls from './ListBox.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Text, TextTheme} from 'shared/ui/Text/Text'

import {Listbox as ListboxH, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import {Fragment, ReactNode, useState} from 'react'
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";

type Direction = 'top' | 'bottom' ;

export const mapDirection: Record<Direction, string> = {
    top: cls.topOptions,
    bottom: cls.bottomOptions
}



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

export const ListBox = ({className, direction = 'bottom', onChange, value, defaultValue, disabled, items}: ListBoxProps) => {
    const classes = [
        mapDirection[direction],
    ]
    return (
            <ListboxH  onChange={onChange} as = 'div' disabled={disabled} value={value} className={cls.ListBox}>
                <ListboxButton > <CustomButton theme={ThemeButton.OUTLINE}><Text text={ value ?? defaultValue} theme={TextTheme.PRIMARY}/></CustomButton></ListboxButton>
                <ListboxOptions anchor="bottom" className={classNames(cls.options,{},classes)}>
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
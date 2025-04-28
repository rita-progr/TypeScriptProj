import cls from './ListBox.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Text, TextTheme} from 'shared/ui/Text/Text'

import {Listbox as ListboxH, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import {Fragment, ReactNode, useState} from 'react'
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {Direction} from "shared/types/ui";


export const mapDirection: Record<Direction, string> = {
    'top left': cls.topLeftOptions,
    'top right': cls.topRightOptions,
    'bottom right': cls.bottomRightOptions,
    'bottom left': cls.bottomLeftOptions,
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

export const ListBox = ({className, direction = 'bottom left', onChange, value, defaultValue, disabled, items}: ListBoxProps) => {
    const classes = [
        mapDirection[direction],
    ]
    return (
            <ListboxH  onChange={onChange} as = 'div'  value={value} className={cls.ListBox}>
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
import cls from './DropDown.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {Fragment, ReactNode} from "react";
import {Link} from "react-router-dom";
import {Direction} from "shared/types/ui";

export interface DropDownItem{
    id: string;
    disabled?:boolean;
    content:ReactNode;
    href?: string;
    onClick?: () => void;
}

interface DropDownProps {
    className?: string;
    trigger?:ReactNode;
    items:DropDownItem[];
    direction?:Direction;
}

export const mapDirection: Record<Direction, string> = {
    'top left': cls.topLeftOptions,
    'top right': cls.topRightOptions,
    'bottom right': cls.bottomRightOptions,
    'bottom left': cls.bottomLeftOptions,
}

export function DropDown(props:DropDownProps) {
    const {className, trigger, items,direction = 'bottom left' } = props;
    const classes = [
        mapDirection[direction],
    ]
    return (
        <Menu as = 'div' className={cls.DropDown}>
            <MenuButton className={cls.btn}>
                {trigger}
            </MenuButton>
            <MenuItems className={classNames(cls.menu, {}, classes)}>
                {items.map(item=>{
                    const content = ({focus}: {focus:boolean})=> (
                        <button className={classNames(cls.item,{[cls.active]:focus})} onClick={item.onClick}>
                            {item.content}
                        </button>
                    )
                    if(item.href){
                        return (
                            <MenuItem as = {Link} to = {item.href}  key={item.id}>
                                {content}
                            </MenuItem>
                        )
                    }
                    return(
                        <MenuItem as = {Fragment} key={item.id}>
                            {content}
                        </MenuItem>
                    )
                })}
            </MenuItems>
        </Menu>
    )
}
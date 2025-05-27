import cls from './Popover.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {ReactNode} from "react";
import {Direction} from "@/shared/types/ui";
import {mapDirection} from "../../styles/consts";
import popupCls from '../../styles/Popup.module.scss'


interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    children?: ReactNode;
    direction?: Direction;
}

export const Popover = ({className, trigger, children, direction = 'bottom right'}: PopoverProps) => {

    const classes = [

        mapDirection[direction],
    ]

    return (
        <HPopover className={classNames(popupCls.Popup,{},[className])}>
            <PopoverButton>{trigger}</PopoverButton>
            <PopoverPanel className={classNames(cls.PopoverPanel,{},classes)}>
                {children}
            </PopoverPanel>
        </HPopover>
    )
}



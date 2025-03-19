import cls from './SideBarItem.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomLink} from "shared/ui/CustomLink/CustomLink";
import {ItemsListInterface} from "../model/items";
import {memo} from "react";


interface SideBarItemProps{
    item?:ItemsListInterface;
    collapsed?:boolean;
}

export const SideBarItem = memo(function SideBarItem (props:SideBarItemProps) {
    const {item, collapsed} = props;
    return (
        <div className={classNames('',{[cls.collapsed]:collapsed})}>
            <CustomLink
                to={item.path}
                className={classNames(cls.allLinks)}>
                <item.icon className={cls[item.className]}/>
                <span className={cls.link}>{item.title}</span>
            </CustomLink>
        </div>
    )
})
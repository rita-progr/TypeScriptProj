import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {memo, useState} from "react";
import {ThemeSwitchers} from "widgets/ThemeSwitchers";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {ButtonSize, ColorButton, CustomButton} from "shared/ui/CustomButton/CustomButton";

import {SideBarItem} from "../SideBarItem/SideBarItem";
import {useSelector} from "react-redux";
import {getSideBarItems} from "../model/selectors/getSideBarItems";

interface SideBarProps{
    className?: string;
}

export const SideBar = memo(function SideBar({className}:SideBarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const ItemsList = useSelector(getSideBarItems)

    function toggleCollapse(){
        setCollapsed(collapsed=>!collapsed);
    }

    return (
        <menu data-testid = "sidebar" className={classNames(cls.SideBar, {[cls.collapsed]:collapsed},[className])}>
            <div className={classNames(cls.links)}>
                {ItemsList.map(item=>(
                    <SideBarItem item={item} key = {item.path} collapsed = {collapsed}/>
                ))}
            </div>
            <CustomButton data-testid = "sidebar-toggle" color={ColorButton.INVERTED} onClick={toggleCollapse} size = {ButtonSize.LARGE} className={classNames(cls.buttonToggle)}>{collapsed?">":"<"}</CustomButton>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitchers/>
                <LanguageSwitcher short = {collapsed}/>
            </div>
        </menu>
    )
})
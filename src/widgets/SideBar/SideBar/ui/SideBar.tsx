import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitchers} from "widgets/ThemeSwitchers";

interface SideBarProps{
    className?: string;
}

export const SideBar = ({className}:SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    function toggleCollapse(){
        setCollapsed(collapsed=>!collapsed);
    }

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]:collapsed},[className])}>
            <div onClick={toggleCollapse}>toggle</div>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitchers/>
            </div>
        </div>
    )
}
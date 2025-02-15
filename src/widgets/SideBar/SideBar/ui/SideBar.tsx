import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitchers} from "widgets/ThemeSwitchers";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {CustomButton} from "../../../../shared/ui/CustomButton/CustomButton";

interface SideBarProps{
    className?: string;
}

export const SideBar = ({className}:SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    function toggleCollapse(){
        setCollapsed(collapsed=>!collapsed);
    }

    return (
        <div data-testid = "sidebar" className={classNames(cls.SideBar, {[cls.collapsed]:collapsed},[className])}>
            <CustomButton data-testid = "sidebar-toggle" onClick={toggleCollapse}>toggle</CustomButton>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitchers/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}
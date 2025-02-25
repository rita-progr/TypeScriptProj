import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitchers} from "widgets/ThemeSwitchers";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {ButtonSize, CustomButton} from "shared/ui/CustomButton/CustomButton";
import {CustomLink} from "shared/ui/CustomLink/CustomLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/mainPage.svg";
import AboutIcon from "shared/assets/aboutPage.svg";

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
            <div className={classNames(cls.links)}>
                <CustomLink
                    to={RoutePath.main}
                    className={cls.allLinks}>
                    <MainIcon className={classNames(cls.icon)}/>
                    <span className={cls.link}>Главная</span>
                </CustomLink>
                <CustomLink
                    to={RoutePath.about}
                    className={cls.allLinks}>
                    <AboutIcon className={classNames(cls.iconAbout)}/>
                    <span className={cls.link}>О нас</span>
                </CustomLink>
            </div>
            <CustomButton data-testid = "sidebar-toggle" onClick={toggleCollapse} size = {ButtonSize.LARGE} className={classNames(cls.buttonToggle)}>{collapsed?">":"<"}</CustomButton>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitchers/>
                <LanguageSwitcher short = {collapsed}/>
            </div>
        </div>
    )
}
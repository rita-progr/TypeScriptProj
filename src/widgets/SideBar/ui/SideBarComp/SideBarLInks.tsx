import cls from './SideBarLInks.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/mainPage.svg";
import {CustomLink} from "shared/ui/CustomLink/CustomLink";

interface SideBarLInksProps{
    className?: string;
}

export const SideBarLInks = ({className}:SideBarLInksProps) => {
    return (
        <div className={classNames(cls.SideBarLInks, {},[className])}>
            <CustomLink
                to={RoutePath.main}
                className={cls.allLinks}>
                <MainIcon className={classNames(cls.icon)}/>
                <span className={cls.link}>Главная</span>
            </CustomLink>
        </div>
    )
}
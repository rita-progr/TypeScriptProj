import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/mainPage.svg";
import AboutIcon from "shared/assets/aboutPage.svg";
import ProfileIcon from "shared/assets/ProfileIcon.svg";


export interface ItemsListInterface{
    path:string;
    icon:React.FC<React.SVGProps<SVGSVGElement>>;
    title:string;
    className:string;
    authOnly?:boolean;
}

export const ItemsList:ItemsListInterface[] = [
    {
        path:RoutePath.main,
        icon: MainIcon,
        title:'Главная',
        className:'icon',
    },
    {
        path:RoutePath.about,
        icon: AboutIcon,
        title:'О нас',
        className:'iconAbout'
    },
    {
        path:RoutePath.profile,
        icon: ProfileIcon,
        title:'Профиль',
        className:'iconAbout',
        authOnly:true
    }
]
import {RouteProps} from "react-router-dom";
import {MainAsync} from "pages/MainPage";
import {AboutAsync} from "pages/AboutPage";
import {NotFound} from "pages/NotFound";
import {ProfilePage} from "pages/ProfilePage";

export enum RouteType {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound',

}

export type AppRouteProps = RouteProps & {
    authOnly?:boolean
}

export const RoutePath: Record<RouteType,string>={
    [RouteType.MAIN]:"/",
    [RouteType.ABOUT]:"/about",
    [RouteType.PROFILE]:"/profile",
    [RouteType.NOT_FOUND]:"*",

}
export const RouteConfig:Record<RouteType, AppRouteProps> = {
    [RouteType.MAIN]:{
        path:RoutePath.main,
        element:<MainAsync/>
    },
    [RouteType.ABOUT]:{
        path:RoutePath.about,
        element:<AboutAsync/>
    },
    [RouteType.PROFILE]:{
        path:RoutePath.profile,
        element:<ProfilePage/>,
        authOnly: true
    },
    [RouteType.NOT_FOUND]:{
        path:RoutePath.notFound,
        element:<NotFound/>
    },

}
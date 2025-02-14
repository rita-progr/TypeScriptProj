import {RouteProps} from "react-router-dom";
import {MainAsync} from "pages/MainPage";
import {AboutAsync} from "pages/AboutPage";
import {NotFound} from "pages/NotFound";

export enum RouteType {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<RouteType,string>={
    [RouteType.MAIN]:"/",
    [RouteType.ABOUT]:"/about",
    [RouteType.NOT_FOUND]:"*",
}
export const RouteConfig:Record<RouteType, RouteProps> = {
    [RouteType.MAIN]:{
        path:RoutePath.main,
        element:<MainAsync/>
    },
    [RouteType.ABOUT]:{
        path:RoutePath.about,
        element:<AboutAsync/>
    },
    [RouteType.NOT_FOUND]:{
        path:RoutePath.notFound,
        element:<NotFound/>
    },
}
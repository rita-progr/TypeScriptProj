import {RouteProps} from "react-router-dom";
import {MainAsync} from "pages/MainPage";
import {AboutAsync} from "pages/AboutPage";

export enum RouteType {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<RouteType,string>={
    [RouteType.MAIN]:"/",
    [RouteType.ABOUT]:"/about",
}
export const RouteConfig:Record<RouteType, RouteProps> = {
    [RouteType.MAIN]:{
        path:RoutePath.main,
        element:<MainAsync/>
    },
    [RouteType.ABOUT]:{
        path:RoutePath.about,
        element:<AboutAsync/>
    }
}
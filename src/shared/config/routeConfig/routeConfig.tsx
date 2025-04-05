import {RouteProps} from "react-router-dom";
import {MainAsync} from "pages/MainPage";
import {AboutAsync} from "pages/AboutPage";
import {NotFound} from "pages/NotFound";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlePage} from "pages/ArticlePage";
import {ArticleDetailsPage} from "pages/ArticleDetailsPage";

export enum RouteType {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'notFound',
}

export type AppRouteProps = RouteProps & {
    authOnly?:boolean
}

export const RoutePath: Record<RouteType,string>={
    [RouteType.MAIN]:"/",
    [RouteType.ABOUT]:"/about",
    [RouteType.PROFILE]:"/profile/", //+id
    [RouteType.ARTICLES]:"/articles",
    [RouteType.ARTICLE_DETAILS]:"/articles/", //+id
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
        path:`${RoutePath.profile}:id`,
        element:<ProfilePage/>,
        authOnly: true
    },
    [RouteType.ARTICLES]:{
        path:RoutePath.articles,
        element:<ArticlePage/>,
        authOnly: true
    },
    [RouteType.ARTICLE_DETAILS]:{
        path:`${RoutePath.article_details}:id`,
        element:<ArticleDetailsPage/>,
        authOnly: true
    },
    [RouteType.NOT_FOUND]:{
        path:RoutePath.notFound,
        element:<NotFound/>
    },

}
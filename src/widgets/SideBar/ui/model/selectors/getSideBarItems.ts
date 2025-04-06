import {ItemsListInterface} from "widgets/SideBar/ui/model/types/ItemListInterface";
import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/mainPage.svg";
import AboutIcon from "shared/assets/aboutPage.svg";
import ProfileIcon from "shared/assets/ProfileIcon.svg";
import ArticleIcon from "shared/assets/article.svg";

export const getSideBarItems = createSelector(
    getUserAuthData,
    (userData)=>{
        const itemsList:ItemsListInterface[] = [
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
        ]
        if(userData){
                itemsList.push(
                    {
                        path:RoutePath.profile + userData.id,
                        icon: ProfileIcon,
                        title:'Профиль',
                        className:'iconAbout',
                        authOnly:true
                    },
                    {
                        path:RoutePath.articles,
                        icon: ArticleIcon,
                        title:'Статьи',
                        className:'icon',
                        authOnly:true
                    }
                )
        }
        return itemsList;
    }
)
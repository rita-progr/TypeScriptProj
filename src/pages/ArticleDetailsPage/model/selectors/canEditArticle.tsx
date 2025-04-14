import {createSelector} from "@reduxjs/toolkit";
import {getArticleData} from "entities/Article/model/selectors/ArticleSelectors";
import {getUserAuthData} from "entities/User";

export const canEditArticle = createSelector(
    getArticleData,
    getUserAuthData,
    (article, user) => {
        console.log(article,user)
        if(!article || !user) {
            return false;
        }
        return article?.userId == user.id;
    }
)
import cls from './ArticleDetailsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleCardList, ArticleDetails} from "entities/Article";
import {useNavigate, useParams} from "react-router-dom";
import {CommentList} from "entities/Comment";
import {Text} from 'shared/ui/Text/Text'
import {useTranslation} from "react-i18next";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import { getArticleComments} from "../model/slice/ArticleDetailsPageCommentSlice";
import {useSelector} from "react-redux";
import {getArticlesDetailsLoading} from "../model/selectors/getArticlesDetailsState";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleDetailsComments} from "../model/services/fetchArticleDetailsComments";
import {AddNewCommentForm} from "features/addNewComment";
import {useCallback} from "react";
import {addNewCommentArticle} from "pages/ArticleDetailsPage/model/services/addNewCommentArticle";
import {ArticleDetailsPageReducer} from "pages/ArticleDetailsPage/model/slice";
import {getArticleRecommended} from "pages/ArticleDetailsPage/model/slice/ArticleDetailsRecommendedSlice";
import {fetchArticleRecommendedPage} from "pages/ArticleDetailsPage/model/services/fetchArticleRecommended";
import {ArticleDetailsHeader} from "./ArticleDetailsHeader/ArticleDetaisHeader";


interface ArticleDetailsPageProps {
    className?: string;
}

const reducers : ReducersList = {
    articleDetailsPage: ArticleDetailsPageReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation();
    const {id} = useParams<{id: string}>();
    const isLoading = useSelector(getArticlesDetailsLoading);
    const dispatch = useAppDispatch();
    const recommended = useSelector(getArticleRecommended.selectAll)
    const comments = useSelector(getArticleComments.selectAll);


   useInitEffect(() => {
       dispatch(fetchArticleDetailsComments(id));
       dispatch(fetchArticleRecommendedPage())
   })

    const sendComment = useCallback((text: string)=>{
        dispatch(addNewCommentArticle(text))
    },[dispatch])


    if(!id){
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
            </div>
        )
    }


    return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
               <ArticleDetailsHeader/>
                <ArticleDetails id = {id}/>
                <AddNewCommentForm sendNewComment={sendComment}/>
                <div className={cls.comments}>
                    <Text title={t('Рекомендации')}/>
                    <ArticleCardList articles={recommended} target={`_blank`}/>
                    <Text title={t('Комментарии')}/>
                    <CommentList isLoading={isLoading} comments={comments}/>
                </div>
            </div>
        </DynemicModuleLoader>
    )
}

export default ArticleDetailsPage;
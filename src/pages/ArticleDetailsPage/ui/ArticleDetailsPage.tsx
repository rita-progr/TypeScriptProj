import cls from './ArticleDetailsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import { ArticleDetails} from "entities/Article";
import { useParams} from "react-router-dom";
import {Text} from 'shared/ui/Text/Text'
import {useTranslation} from "react-i18next";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {AddNewCommentForm} from "features/addNewComment";
import {useCallback} from "react";
import {addNewCommentArticle} from "pages/ArticleDetailsPage/model/services/addNewCommentArticle";
import {ArticleDetailsPageReducer} from "pages/ArticleDetailsPage/model/slice";
import {ArticleDetailsHeader} from "./ArticleDetailsHeader/ArticleDetaisHeader";
import {ArticleRecommendationList} from "features/articleRecommendationList";
import {ArticleCommentsList} from "pages/ArticleDetailsPage/ui/ArticleCommentsList/ArticleCommentsList";


interface ArticleDetailsPageProps {
    className?: string;
}

const reducers : ReducersList = {
    articleDetailsPage: ArticleDetailsPageReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation();
    const {id} = useParams<{id: string}>();
    const dispatch = useAppDispatch();



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
                    <ArticleRecommendationList/>
                    <Text title={t('Комментарии')}/>
                    <ArticleCommentsList id={id}/>
                </div>
            </div>
        </DynemicModuleLoader>
    )
}

export default ArticleDetailsPage;
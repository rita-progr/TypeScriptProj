import cls from './ArticleDetailsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleDetails} from "entities/Article";
import {useParams} from "react-router-dom";
import {CommentList} from "entities/Comment";
import{Text} from 'shared/ui/Text/Text'
import {useTranslation} from "react-i18next";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {ArticleDetailsPageCommentReducer, getArticleComments} from "../model/slice/ArticleDetailsPageCommentSlice";
import {useSelector} from "react-redux";
import {
    getArticlesDetailsLoading
} from "../model/selectors/getArticlesDetailsState";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleDetailsComments} from "../model/services/fetchArticleDetailsComments";
import {AddNewCommentForm} from "features/addNewComment";
import {useCallback} from "react";
import {addNewCommentArticle} from "pages/ArticleDetailsPage/model/services/addNewCommentArticle";



interface ArticleDetailsPageProps {
    className?: string;
}

const reducers : ReducersList = {
    articleDetailsComments: ArticleDetailsPageCommentReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation();
    const {id} = useParams<{id: string}>();
    const isLoading = useSelector(getArticlesDetailsLoading);
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);


   useInitEffect(() => {
       dispatch(fetchArticleDetailsComments(id));
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
                <ArticleDetails id = {id}/>
                <AddNewCommentForm sendNewComment={sendComment}/>
                <div className={cls.comments}>
                    <Text title={t('Комментарии')}/>
                    <CommentList isLoading={isLoading} comments={comments}/>
                </div>
            </div>
        </DynemicModuleLoader>
    )
}

export default ArticleDetailsPage;
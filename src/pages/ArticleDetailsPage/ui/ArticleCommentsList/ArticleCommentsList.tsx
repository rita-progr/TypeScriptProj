import {useCallback} from "react";
import {addNewCommentArticle} from "pages/ArticleDetailsPage/model/services/addNewCommentArticle";
import {CommentList} from "entities/Comment";
import {useSelector} from "react-redux";
import {getArticlesDetailsLoading} from "pages/ArticleDetailsPage/model/selectors/getArticlesDetailsState";
import {getArticleComments} from "pages/ArticleDetailsPage/model/slice/ArticleDetailsPageCommentSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {fetchArticleDetailsComments} from "pages/ArticleDetailsPage/model/services/fetchArticleDetailsComments";
import {fetchArticleRecommendedPage} from "pages/ArticleDetailsPage/model/services/fetchArticleRecommended";

interface ArticleCommentsListProps{
    className?: string;
    id?:string;
}

export const ArticleCommentsList = ({id}:ArticleCommentsListProps) => {
    const isLoading = useSelector(getArticlesDetailsLoading);
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useAppDispatch();

    useInitEffect(() => {
        dispatch(fetchArticleDetailsComments(id));
        dispatch(fetchArticleRecommendedPage())
    })


    return (
        <CommentList isLoading={isLoading} comments={comments}/>
    )
}
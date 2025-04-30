import {useSelector} from "react-redux";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "pages/ArticlePage/model/selectors/ArticlesPageSelectors";
import {getArticles} from "pages/ArticlePage/model/slices/ArticleSlice";
import {ArticleCardList} from "entities/Article";
import {Text} from 'shared/ui/Text/Text'
import {useSearchParams} from "react-router-dom";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {initArticlesPage} from "pages/ArticlePage/model/services/initArticlesPage/initArticlesPage";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ArticleInfinityListProps{
    className?: string;
}

export const ArticleInfinityList = ({className}:ArticleInfinityListProps) => {
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const articles = useSelector(getArticles.selectAll)
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch();

    useInitEffect(()=>{
        dispatch(initArticlesPage(searchParams))
    })

    if(error){
        return (
            <Text text={error}/>
        )
    }

    return (
        <ArticleCardList view={view} isLoading={isLoading} articles={articles}/>
    )
}
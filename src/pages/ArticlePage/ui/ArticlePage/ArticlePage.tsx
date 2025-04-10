import cls from './ArticlePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleCardList, ArticleViews, ArticleViewSwitcher} from "entities/Article";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../../model/selectors/ArticlesPageSelectors";
import {useSelector} from "react-redux";
import {ArticlePageActions, ArticlePageReducer, getArticles} from "../../model/slices/ArticleSlice";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {useCallback} from "react";
import {Page} from "widgets/Page/Page";
import {fetchNextArticlesPage} from "pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {initArticlesPage} from "pages/ArticlePage/model/services/initArticlesPage/initArticlesPage";
import {AriclePageFilters} from "pages/ArticlePage/ui/AriclePageFilters/AriclePageFilters";

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: ArticlePageReducer
}

const ArticlePage = ({className}: ArticlePageProps) => {
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const articles = useSelector(getArticles.selectAll)
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();


    const onLoadNextPage = useCallback(()=>{
        dispatch(fetchNextArticlesPage())
    },[dispatch])

    useInitEffect(()=>{
      dispatch(initArticlesPage())
    })

    return (
        <DynemicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticlePage, {}, [className])} onScrollEnd={onLoadNextPage}>
                <AriclePageFilters/>
                <ArticleCardList view={view} isLoading={isLoading} articles={articles}/>
            </Page>
        </DynemicModuleLoader>

    )
}
export default ArticlePage
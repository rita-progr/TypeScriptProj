import cls from './ArticlePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleCardList, ArticleViews, ArticleViewSwitcher} from "entities/Article";
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNum,
    getArticlesPageView
} from "../model/selectors/ArticlesPageSelectors";
import {useSelector} from "react-redux";
import {ArticlePageActions, ArticlePageReducer, getArticles} from "../model/slices/ArticleSlice";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticlesPage} from "pages/ArticlePage/model/services/fetchArticlesPage/fetchArticlesPage";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {useCallback} from "react";
import {Page} from "shared/ui/Page/Page";
import {fetchNextArticlesPage} from "pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";

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
    const view = useSelector(getArticlesPageView)
    const dispatch = useAppDispatch();


    const onViewsChange =useCallback((view: ArticleViews) =>{
        dispatch(ArticlePageActions.setView(view));
    },[dispatch])

    const onLoadNextPage = useCallback(()=>{
        dispatch(fetchNextArticlesPage())
    },[dispatch])

    useInitEffect(()=>{
        dispatch(ArticlePageActions.initView())
        dispatch(fetchArticlesPage({
            page: 1
        }))
    })

    return (
        <DynemicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticlePage, {}, [className])} onScrollEnd={onLoadNextPage}>
                <ArticleViewSwitcher onViewsChange={onViewsChange} views={view} />
                <ArticleCardList view={view} isLoading={isLoading} articles={articles}/>
            </Page>
        </DynemicModuleLoader>

    )
}
export default ArticlePage
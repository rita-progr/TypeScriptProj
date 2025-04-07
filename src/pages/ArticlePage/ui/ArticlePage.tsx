import cls from './ArticlePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleCardList, ArticleViews, ArticleViewSwitcher} from "entities/Article";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../model/selectors/ArticlesPageSelectors";
import {useSelector} from "react-redux";
import {ArticlePageActions, ArticlePageReducer, getArticles} from "../model/slices/ArticleSlice";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticlesPage} from "pages/ArticlePage/model/services/fetchArticlesPage/fetchArticlesPage";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {useCallback} from "react";

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

    useInitEffect(()=>{
        dispatch(fetchArticlesPage())
        dispatch(ArticlePageActions.initView())
    })

    const onViewsChange =useCallback((view: ArticleViews) =>{
        dispatch(ArticlePageActions.setView(view));
    },[dispatch])

    return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlePage, {}, [className])}>
                <ArticleViewSwitcher onViewsChange={onViewsChange} views={view} />
                <ArticleCardList view={view} isLoading={isLoading} articles={articles}/>
            </div>
        </DynemicModuleLoader>

    )
}
export default ArticlePage
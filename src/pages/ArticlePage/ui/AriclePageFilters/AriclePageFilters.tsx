import cls from './AriclePageFilters.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleSortType, ArticleViews, ArticleViewSwitcher} from "entities/Article";
import {useCallback} from "react";
import {ArticlePageActions} from "pages/ArticlePage";
import {useSelector} from "react-redux";
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView
} from "pages/ArticlePage/model/selectors/ArticlesPageSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {ArticleSortSelector} from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import {Card} from "shared/ui/Card/Card";
import {Input} from "shared/ui/Input/Input";
import {useTranslation} from "react-i18next";
import {OrderType} from "shared/types/orderTypes";
import {fetchArticlesPage} from "pages/ArticlePage/model/services/fetchArticlesPage/fetchArticlesPage";

interface AriclePageFiltersProps {
    className?: string;
}

export const AriclePageFilters = ({className}: AriclePageFiltersProps) => {
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const fetchData = useCallback(()=>{
        dispatch(fetchArticlesPage({replace: true}))
    },[dispatch])

    const onViewsChange =useCallback((view: ArticleViews) =>{
        dispatch(ArticlePageActions.setView(view));
    },[dispatch])

    const onSortChange =useCallback((sort: ArticleSortType) =>{
        dispatch(ArticlePageActions.setSort(sort));
        dispatch(ArticlePageActions.setPage(1));
        fetchData()
    },[dispatch, fetchData])

    const onOrderChange =useCallback((order: OrderType) =>{
        dispatch(ArticlePageActions.setOrder(order));
        dispatch(ArticlePageActions.setPage(1));
        fetchData()
    },[dispatch, fetchData])
    const onSearchChange =useCallback((text: string) =>{
        dispatch(ArticlePageActions.setSearch(text));
        dispatch(ArticlePageActions.setPage(1));
        fetchData()
    },[dispatch, fetchData])
    return (
        <div className={classNames(cls.AriclePageFilters, {}, [className])}>
            <div className={cls.flex}>
                <ArticleSortSelector
                    sort={sort}
                    onSortChange={onSortChange}
                    onOrderChange={onOrderChange}
                    order={order}
                />
                <ArticleViewSwitcher onViewsChange={onViewsChange} views={view} />
            </div>
            <Card>
                <Input placeholder={t("Поиск")} value={search} onChange={onSearchChange}/>
            </Card>
        </div>
    )
}
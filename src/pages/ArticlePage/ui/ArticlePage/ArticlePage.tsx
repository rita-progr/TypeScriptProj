import cls from './ArticlePage.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {ArticlePageReducer} from "../../model/slices/ArticleSlice";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {DynemicModuleLoader, ReducersList} from "@/shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {useCallback} from "react";
import {Page} from "@/widgets/Page/Page";
import {fetchNextArticlesPage} from "@/pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {AriclePageFilters} from "@/pages/ArticlePage/ui/AriclePageFilters/AriclePageFilters";
import {ArticleInfinityList} from "@/pages/ArticlePage/ui/ArticleInfinityList/ArticleInfinityList";

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: ArticlePageReducer
}

const ArticlePage = ({className}: ArticlePageProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPage = useCallback(()=>{
        dispatch(fetchNextArticlesPage())
    },[dispatch])


    return (
        <DynemicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticlePage, {}, [className])} onScrollEnd={onLoadNextPage}>
                <AriclePageFilters/>
                <ArticleInfinityList/>
            </Page>
        </DynemicModuleLoader>

    )
}
export default ArticlePage
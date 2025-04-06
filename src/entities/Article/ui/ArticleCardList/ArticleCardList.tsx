import cls from './ArticleCardList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Article, ArticleViews} from "../../model/types/ArticleSchema";
import { ArticleCardItem } from '../ArticleCardItem/ArticleCardItem';
import {ArticleCardSkeletonItem} from "entities/Article/ui/ArticleCardItem/ArticleCardSkeleton";

interface ArticleCardListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleViews
}

export const ArticleCardList = ({className, articles, view = ArticleViews.SMALL, isLoading}: ArticleCardListProps) => {

    if(isLoading){
        return (
            <div className={classNames('', {}, [cls[view]])}>
                <div className={classNames(cls.ArticleCardList, {}, [className, cls[view]])}>
                    {
                        new Array(view === ArticleViews.SMALL ? 12 : 3)
                            .fill(0)
                            .map((item, index) => (
                                <ArticleCardSkeletonItem className={cls.card} view={view} key={index}/>
                            ))
                    }
                </div>
            </div>
        )
    }

    const renderItem = (article: Article) => {
        return (
            <ArticleCardItem className={cls.card} article = {article} key={article.id} view={view} />
        )
    }

    return (
        <div className={classNames('',{},[cls[view]])}>
            <div className={classNames(cls.ArticleCardList, {}, [className, cls[view]])}>
                {articles.length > 0 ?
                    (articles.map((article: Article) => (renderItem(article)))) : null}
            </div>
        </div>

    )
}
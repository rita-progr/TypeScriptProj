import cls from './ArticleCardList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Article, ArticleViews} from "../../model/types/ArticleSchema";
import { ArticleCardItem } from '../ArticleCardItem/ArticleCardItem';
import {ArticleCardSkeletonItem} from "../ArticleCardItem/ArticleCardSkeleton";
import {HStack} from "shared/ui/Stack";


interface ArticleCardListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleViews
    target?: string
}

export const ArticleCardList = ({className, articles, view = ArticleViews.SMALL, isLoading, target}: ArticleCardListProps) => {


         const getLoading= (view: ArticleViews) => (
                <div className={classNames(cls.ArticleCardList, {}, [className, cls[view]])}>
                    {
                        new Array(view === ArticleViews.SMALL ? 12 : 3)
                            .fill(0)
                            .map((item, index) => (
                                <ArticleCardSkeletonItem className={cls.card} view={view} key={index}/>
                            ))
                    }
                </div>
        )

    const renderItem = (article: Article) => {
        return (
            <ArticleCardItem className={cls.card} article = {article} key={article.id} view={view} target={target} />

        )
    }


    return (
                    <HStack gap={'8'} className={classNames(cls.ArticleCardList, {}, [className, cls[view]])}>
                        { articles && articles.length > 0 ?
                            (articles.map((article: Article) => (renderItem(article)))) : null}
                        {isLoading && getLoading(view)}

                    </HStack>

    )
}
import cls from './ArticleCardList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Article, ArticleViews} from "../../model/types/ArticleSchema";
import { ArticleCardItem } from '../ArticleCardItem/ArticleCardItem';
import {ArticleCardSkeletonItem} from "entities/Article/ui/ArticleCardItem/ArticleCardSkeleton";
import { VariableSizeList as List } from 'react-window';

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

    if(isLoading){
        return (getLoading(view))
    }

    const renderItem = (article: Article) => {
        return (
            <ArticleCardItem className={cls.card} article = {article} view={view} target={target} />
        )
    }

    const getItemSize = (index: number) => {
        return view === ArticleViews.SMALL ? 150 : 300;
    };
    console.log(articles)
    const Row = ({ index, style }:{index: number; style: React.CSSProperties}) => (
        <div style={style}>
            {renderItem(articles[index])}
        </div>
    );

if(articles.length === 0 ){
    return null;
}


    return (
                <div className={classNames('', {}, [cls[view]])}>
                    <List
                        className="List"
                        height={500}
                        itemCount={1000}
                        itemSize={getItemSize}
                        width={"100%"}
                    >
                        {Row}
                    </List>
                    {isLoading && articles.length > 0 && (
                        <div className={cls.loadingMore}>
                            <ArticleCardSkeletonItem view={view} />
                        </div>
                    )}
                    {/*<div className={classNames(cls.ArticleCardList, {}, [className, cls[view]])}>*/}
                    {/*    {articles.length > 0 ?*/}
                    {/*        (articles.map((article: Article) => (renderItem(article)))) : null}*/}
                    {/*    {isLoading && getLoading(view)}*/}
                    {/*</div>*/}

                </div>

    )
}
import cls from './ArticleCardItem.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleViews} from "../../model/types/ArticleSchema";
import {Card} from "shared/ui/Card/Card";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";


interface ArticleCardSkeletonItemProps {
    className?: string;
    view: ArticleViews
}

export const ArticleCardSkeletonItem = ({className, view}: ArticleCardSkeletonItemProps) => {

    if (view == ArticleViews.BIG) {
        return (
            <div className={classNames(cls.ArticleCardItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.userInfo}>
                        <Skeleton height={30} width={30} border={'50%'} />
                        <Skeleton width={100} height={16}/>
                    </div>
                    <Skeleton width={100} height={30}/>
                    <Skeleton width={'100%'} height={200} className={cls.ImgWrapper}/>

                    <div className={cls.footer}>
                        <Skeleton width={100} height={16}/>
                        <Skeleton width={50} height={16}/>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleCardItem, {}, [className, cls[view]])}>
            <Card className={cls.card} >
                <div className={cls.ImgWrapper}>
                    <Skeleton width={200} height={200}/>
                </div>
                <div className={cls.TypesWrapper}>
                    <Skeleton width={100} height={16}/>
                    <Skeleton width={20} height={16}/>
                </div>
                <Skeleton width={200} height={16}/>
            </Card>
        </div>
    )
}
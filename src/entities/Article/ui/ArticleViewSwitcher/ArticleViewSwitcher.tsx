import cls from './ArticleViewSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import ArticleList from 'shared/assets/bi_list.svg';
import ArticleTiled from 'shared/assets/fe_tiled.svg'
import {ArticleViews} from "../../model/types/ArticleSchema";
import {Icon} from "shared/ui/Icon/Icon";
import {CustomButton} from "shared/ui/CustomButton/CustomButton";



interface ArticleViewSwitcherProps {
    className?: string;
    views?: ArticleViews;
    onViewsChange: (view: ArticleViews) => void;
}

const viewTypes = [
    {
        type: ArticleViews.SMALL,
        icon: ArticleList
    },
    {
        type: ArticleViews.BIG,
        icon: ArticleTiled
    }
]

export const ArticleViewSwitcher = ({className, views, onViewsChange}: ArticleViewSwitcherProps) => {


    const onViewChange = (view: ArticleViews) => () =>{
        onViewsChange?.(view);
    }

    return (
        <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
            {viewTypes.map((view) => (
                <CustomButton key = {view.type} onClick={onViewChange(view.type)}>
                    <Icon Svg={view.icon} className={classNames('', {[cls.notSelected]:view.type !== views}, [])}/>
                </CustomButton>
            ))}
        </div>
    )
}
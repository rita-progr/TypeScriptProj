
import {classNames} from "shared/lib/classNames/classNames";
import {Tabs, TabsType} from "shared/ui/Tabs/Tabs";
import {ArticleType} from "entities/Article";

interface ArticleTypeSelectorProps {
    className?: string;
    type: ArticleType;
    onTypeChange: (type: TabsType<ArticleType>) => void;
}

export const ArticleTypeSelector = ({className, type, onTypeChange}: ArticleTypeSelectorProps) => {

    const typeTabs: TabsType<ArticleType>[] = [
        {
            value: ArticleType.ALL,
            content:"Все статьи"
        },
        {
            value: ArticleType.IT,
            content:"Айти"
        },
        {
            value: ArticleType.ECONOMICS,
            content:"Экономика"
        },
        {
            value: ArticleType.SCIENCE,
            content:"Наука"
        },

    ]
    return (
        <div className={classNames('', {}, [className])}>
            <Tabs value={type} tabs={typeTabs} onTabClick={onTypeChange}/>
        </div>
    )
}
import cls from './ArticleCodeBlockComponent.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Code} from "shared/ui/Code/Code";
import {ArticleCODEBlocks} from "entities/Article/model/types/ArticleSchema";

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCODEBlocks
}

export const ArticleCodeBlockComponent = ({className, block}: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block?.code}/>
        </div>
    )
}
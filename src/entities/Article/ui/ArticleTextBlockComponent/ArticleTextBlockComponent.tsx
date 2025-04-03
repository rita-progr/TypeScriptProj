import cls from './ArticleTextBlockComponent.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleTEXTBlocks} from "../../model/types/ArticleSchema";
import {Text} from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block?: ArticleTEXTBlocks;
}

export const ArticleTextBlockComponent = ({className, block}: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block?.title && (
                <Text title = {block.title} className={cls.articleItem}/>
            )}
            {block?.paragraphs.map((paragraph) => (
                <Text text={paragraph} key = {paragraph} className={cls.articleItem}/>
            ))}
        </div>
    )
}